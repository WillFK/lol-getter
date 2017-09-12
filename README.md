# lol-getter
Stupid script which lists lol matches, fetched from http://www.lolskill.net

meant to be used as:
```
node script.js 42
```
42 being the page you want to load. If no argument is passed, it will load the first page.


This a crappy piece of code and won't work really well. It has problem with encoding and synchronism.

requires chreerio and node > 7

to install cheerio, do as follows:
```
npm install cheerio
```
