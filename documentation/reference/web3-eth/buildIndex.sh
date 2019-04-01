#!/bin/bash
cd "$(dirname "$0")"
dir=${PWD#*/documentation/}
section=${PWD##*/}

echo "# $section
" > "../$section.md"

for file in *.md; do
  echo "$(echo $'\n')%[{ $dir/$file }]%" >> "../$section.md"
done
