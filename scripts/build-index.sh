#!/bin/bash
cd "${0%/*}/../documentation/reference/"
for module in *; do
  cCount=$cCount+1
  if [[ -d $module ]]; then
    echo "# $module
    " > "$module.md"
    for api in "$module/*.md"; do
      cCount=$cCount+1
      echo "$(cat $api)" >> "$module.md"
    done
  fi
done

