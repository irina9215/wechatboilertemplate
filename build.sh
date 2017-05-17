#!/bin/bash

export PATH="/usr/local/bin:$PATH"
export LC_ALL="en_US.UTF-8"
export LANG="en_US.UTF-8"

npm install
npm run build:css
npm run buildjs:deploy
zip -r -n.map ./out.zip ./dist