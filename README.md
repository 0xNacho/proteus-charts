ProteicJS 
==============
_In Greek mythology, Proteus is an early sea-god or god of rivers and oceanic bodies of water, one of several deities whom Homer calls the "Old Man of the Sea". Some who ascribe to him a specific domain call him the god of "elusive sea change", which suggests the constantly changing nature of the sea or the liquid quality of water in general. He can foretell the future, but, in a mytheme familiar to several cultures, will change his shape to avoid having to; he will answer only to someone who is capable of capturing the beast. From this feature of Proteus comes the adjective protean, with the general meaning of "versatile", "mutable", "capable of assuming many forms". "Protean" has positive connotations of flexibility, versatility and adaptability._ - [Wikipedia](https://en.wikipedia.org/wiki/Proteus)

[![Build Status](https://travis-ci.org/proteus-h2020/proteic.svg?branch=master)](https://travis-ci.org/proteus-h2020/proteic)
[![Dependency Status](https://www.versioneye.com/user/projects/57ee106f16c630002a9a2022/badge.svg?style=flat-square)](https://www.versioneye.com/user/projects/57ee106f16c630002a9a2022)
[![codecov](https://codecov.io/gh/proteus-h2020/proteus-charts/branch/development/graph/badge.svg)](https://codecov.io/gh/proteus-h2020/proteus-charts/branch/development)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/4e39876ac5324eba8035c6f5ec95b52b)](https://www.codacy.com/app/0xnacho/proteic?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=proteus-h2020/proteic&amp;utm_campaign=Badge_Grade)
[![Gitter](https://img.shields.io/gitter/room/proteus-h2020/proteic.svg?maxAge=2592000)](https://gitter.im/proteus-h2020/proteic)

![alt text](https://github.com/proteus-h2020/proteic/blob/development/images/proteo.jpg "Proteic.js")


##Motivation
Before start developing this (awesome) library, we first analyzed hundreds of charting libraries out there. They are really good but almost all of them:
* have a really bad and unreadable code. No code patterns. Variables traveling between files. :airplane: :airplane: = **Bad for developers and community**
* are really heavy. Redundant and duplicate code. :heavy_exclamation_mark: = **not fast as it should be**
* lack ES6 fearures. No modules. = **More code lines & prone to errors**
* are developed on top of old D3.js versions. **Bad performance**


For these reasons we decided to develop a new web-based visualization library from scratch, by aiming to solve all the previously identified issues.

##Usage
Simply add the ``proteic.js`` script to your project and include it in your HTML:
```javascript
<script type="text/javascript" src="proteic.min.js"></script>
```
After including the script (preferably the minified version for production environments) you are ready to use ProteicJS.

##Dependencies
Proteic.js has a unique but important dependency: <a href="https://d3js.org/">D3.js</a>. We are using the recently released version 4, which has not compatibility with previous versions. Yo can have a look into the changes <a href="https://github.com/d3/d3/blob/master/CHANGES.md">here</a>.

##Examples

You can visit <a href="https://proteus-h2020.github.io/proteic">this site</a> which is a build of the current project. We are still developing and constantly adding new  features but you can already use our <a href="https://github.com/proteus-h2020/proteic/releases">stable releases</a>.


##Contributing
If you are interested in the project and you want to collaborate in your spare time, you can have a look into the <a href="https://github.com/proteus-h2020/proteic/blob/development/CONTRIBUTING.md">contributing guide</a>.


##Developers

### Running the examples
```bash
git clone https://github.com/proteus-h2020/proteic && cd proteic
npm install
npm run-script serve
```
Now you can browse on http://localhost:8080/examples/ and see the full list of working examples

### Debugging
We provide an http debug server that automatically refresh the website after every change. To use this feature run the following command:
```bash
npm run-script serve:watch
```


