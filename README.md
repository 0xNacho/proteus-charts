<img src="https://github.com/proteus-h2020/proteic/raw/development/images/proteic.png" align="middle">

# Proteic.js
**Streaming and static data visualization for the modern web.**

[![Build Status](https://travis-ci.org/proteus-h2020/proteic.svg?branch=master)](https://travis-ci.org/proteus-h2020/proteic)
[![Dependency Status](https://www.versioneye.com/user/projects/5808f09c449f290038216bf0/badge.svg)](https://www.versioneye.com/user/projects/5808f09c449f290038216bf0)
[![codecov](https://codecov.io/gh/proteus-h2020/proteic/branch/development/graph/badge.svg)](https://codecov.io/gh/proteus-h2020/proteic/branch/development)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/4e39876ac5324eba8035c6f5ec95b52b)](https://www.codacy.com/app/0xnacho/proteic?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=proteus-h2020/proteic&amp;utm_campaign=Badge_Grade)
[![Gitter](https://img.shields.io/gitter/room/proteus-h2020/proteic.svg?maxAge=2592000)](https://gitter.im/proteus-h2020/proteic)
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fproteus-h2020%2Fproteic.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2Fproteus-h2020%2Fproteic?ref=badge_shield)

Proteic.js is a general purpose data visualization library built for both static and streaming data. It provides a wide [catalogue](https://proteic.js.org/catalogue.html) of ready-to-use visualizations, a fluent API for easy configuration, and connectors for streams of data over different protocols like WebSocket and HTTP. The library is built with a modular architecture, focusing on code cleanliness so it can be easily extended and customized. 

Development of Proteic.js is funded by the European Union as part of the broader [PROTEUS project](https://www.proteus-bigdata.com/). 🇪🇺

We invite you to [contribute](/CONTRIBUTING.md)! 🌎🌍🌏  

![Annotated scatterplot](/images/annotated-scatterplot.png)
![Streaming area chart](/images/streaming-areachart.png)

## Installation and usage

**You can find a more detailed documentation in our [Wiki](https://github.com/proteus-h2020/proteic/wiki) and [JSDoc](https://proteic.js.org/docs/)**

Simply add the ``proteic.js`` script and a Proteic CSS theme to your project and include it in your HTML:
```html
<script type="text/javascript" src="proteic.min.js"></script>
<link rel='stylesheet' href='proteic.css'
```
After including the script (preferably the minified version for production environments) you are ready to use ProteicJS.

As an example, here is how to create a simple Barchart with static data:

```html
<script type="text/javascript" src="https://d3js.org/d3.v4.min.js"></script>
<script type="text/javascript" src="proteic.min.js"></script>
<link rel='stylesheet' href='proteic.css'>

<!-- By default, Proteic.js places the chart into div#chart -->
<div style id='chart'></div>

<script type="text/javascript">
var data = [
  {x: 'SP', key: '- 18', y: 30},
  {x: 'SP', key: '+ 18 - 35', y: 25},
  {x: 'SP', key: '+ 35', y: 45},
  {x: 'FR', key: '- 18', y: 10},
  {x: 'FR', key: '+ 18 - 35', y: 50},
  {x: 'FR', key: '+ 35', y: 40}
];

var barchart = new proteic.Barchart(data);
barchart.draw();
</script>
```

We also distribute Proteic as a [NPM package](https://www.npmjs.com/package/proteic).

## Dependencies
Proteic.js has a unique but important dependency: <a href="https://d3js.org/">D3.js</a>. We are using the recently released version 4, which is not compatible with previous versions. Yo can have a look into the changes <a href="https://github.com/d3/d3/blob/master/CHANGES.md">here</a>.

## Contributing
If you are interested in the project and you want to collaborate in your spare time, you can have a look into the <a href="https://github.com/proteus-h2020/proteic/blob/development/CONTRIBUTING.md">contributing guide</a>.


## Developers
We provide the following NPM Scripts to ease the development process. You can run each script like the following `npm run-script serve:watch`

- `lint`: runs the JSHint linter to detect errors and problems in the code
- `pretest`: builds the source code before testing
- `test`: runs the tests using Karma
- `prebuild`: removes the build directory before building to prevent errors
- `build`: builds the source code with Rollup.js
- `serve`: launches an http debug server and automatically refreshes the browser after every change

### Documentation
You can find general information about Proteic in its [website](http://proteic.js.org), developer documentation in the [Wiki](https://github.com/proteus-h2020/proteic/wiki) and API documentation in the [JSDocs](http://proteus-h2020.github.io/proteic/docs/).



## License
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fproteus-h2020%2Fproteic.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2Fproteus-h2020%2Fproteic?ref=badge_large)