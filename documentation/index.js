function attachClick() {
  $(".btn").on("click", function() {
    var iframeLoad = $(this).parent()[0].children[1];
    $(iframeLoad).attr("src",$(iframeLoad).attr("data-src")).removeAttr("data-src").show(300);
    $(this).hide();
    $(this).parent().css("border", "4px var(--mono-tint2) solid");
  })
}
function setStatic() {
  $("codesandbox").each(function() {
    var el = $(this);
    var path = el.attr("example");
    var url = `https://raw.githubusercontent.com/${config.orgName}/${config.repoName}/${config.branch}/example-src/packages/${path}/index.js`;
    $.get(url, function(data) {
      el.text(data.match(/{\n(.*)return.*}/s)[1].slice(0,-2));
      document.querySelectorAll('codesandbox').forEach((block) => {
        hljs.highlightBlock(block);
      });
    });
  });
}
$(document).ready(function() {
  attachClick();
  setStatic();
  $("aside").on("click", function() {
    attachClick();
    setStatic();
  });
});
