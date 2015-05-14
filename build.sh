#! /bin/sh

rm -rf build
mkdir build
for file in css images js humans.txt index.html robots.txt; do
    cp -r $file build
done