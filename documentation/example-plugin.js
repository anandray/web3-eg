window.$docsify.plugins = (window.$docsify.plugins||[]).concat([
  function(hook, vm) {
    var tagRegex = /<codesandbox.*>(\s+)?([^\s]*)(\s+)?<\/codesandbox>/g;
    var cleanup = function(html) {
      return html.replace(tagRegex, '<codesandbox example="$2" class="javascript"></codesandbox>');
    }
    var embed = function(html) {
      var iframe = (
        `<codesandbox>$2</codesandbox><div style="display: flex; justify-content: center;">
          <button class="btn btn-web3js">Load CodeSandbox</button>
          <iframe
            data-src="https://codesandbox.io/embed/github/${config.orgName}/${config.repoName}/tree/${config.branch}/example-src/packages/$2?fontsize=12&hidenavigation=1&view=editor&codemirror=1&runonclick=1&previewwindow=console"
            style="margin:0px; display:none; width:100%; height:600px; border:2px; border-radius:5px; overflow:hidden;"
            sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
          ></iframe>
        </div>`
      );
      return html.replace(tagRegex, iframe);
    }
    hook.beforeEach(function(content) {
      return content.replace(tagRegex, `#### Example\n<codesandbox>$2</codesandbox>`)
    });
    hook.afterEach(function(html, next) {
      next(cleanup(embed(html)));
    });
  },
]);
