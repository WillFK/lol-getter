# lol-getter
Stupid script which lists lol matches, fetched from http://www.lolskill.net

meant to be used as:
```
node script.js 42
```
42 being the page you want to load. If no argument is passed, it will load the first page.


This is a crappy piece of code and won't work really well. It has problems with encoding and synchronism.

requires chreerio and node >= 7 (or 6, I'm not sure)

to install cheerio, do as follows:
```
npm install cheerio
```
