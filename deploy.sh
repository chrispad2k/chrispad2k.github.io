#!/bin/bash

LAST_COMMIT=`git log -1 --pretty=%B`
PUBLISH_REPO="chrispad2k.github.io/"

rm -rf $PUBLISH_REPO/*
mv -f build/* $PUBLISH_REPO
rm -rf build/

cd $PUBLISH_REPO
git add .
git commit -m "$LAST_COMMIT"
git push

cd ..
git add $PUBLISH_REPO
git commit -m "Deployed to Github Pages"
