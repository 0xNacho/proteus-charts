# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [0.0.30] - 2018-02-12
### Changed
- Transfer NPM package to @proteus-h2020 org

### Fixed
- Network chart improvements

## [0.0.29] - 2018-02-05
### Added
- iframe example

### Changed
- Fixed Proteic not working within an iframe
- Remove unused storageService

## [0.0.28] - 2018-02-02
### Changed
- Fixed UMD module

### Fixed
- Updated Webpack to version 3
- Lots of fixes and improvements

## [0.0.27] - 2017-10-09
### Added
- ⭐ **New visualization: Parallel Coordinates**
- New pause / resume button for streaming visualizations
- New error component that shows an error sign if something went wrong
- New brush + zoom interaction
- Streaming visualizations now show a throbber while waiting for data to start coming
- Confidence band component for line charts

## [0.0.26] - 2017-06-30
### Added
- New annotated events
- New band annotations
- New alerts component :bell:
- Function to unpivot wide format coming from the Datasource to narrow format
- Function to destroy charts
- Option to set the position of the legend
- Option to rotate X axis labels
- Method to clear the chart data
- Interpolated color scales
- Added linear X axis to swimlane
- Added sequential color scales to swimlane
- Added option to display `propertyZ` in the swimlane boxes
- TS linting

### Changed
- Upgrade TS version
- The Y axis maximum calculation is now always a 10% larger than the original domain
- The format of the color legend labels is now configurable using `valuesFormat` option
- Design improvements
- Upgraded d3-annotation version

### Fixed
- Huge performance improvements :zap:
- Fixed heatmap drawing numbers as strings
- Fixed keepDrawing ignoring propertyKey
- Fixed a bug in Lineset that happened when using a propertyKey other than 'key'
- Fixed Y axis not showing up if max and min are the same
- Fixed swimlane series toggle not working
- Fix color legend domain
- Unclutter log messages

## [0.0.25] - 2017-04-24
### Added
 - ⭐ **New visualization: Histogram**
 - New Annotation component :pencil:
 - New ColorLegend component :art:

### Changed
 - Updated D3 version to 4.7.1

### Fixed
 - Fix important performance issues :zap:
 - Minor fixes improvements

:rocket:

## [0.0.24] - 2017-03-07
### Fixed
 - Sequential scales bugfix

## [0.0.23] - 2017-03-07
### Fixed
 - Heatmap bugfix

## [0.0.22] - 2017-03-03
### Changed
 - Improve datasource subscriptions

## [0.0.21] - 2017-03-02
### Changed
 - Refactor keepDrawing

## [0.0.20] - 2017-03-01
### Fixed
 - Small bugfixes

## [0.0.19] - 2017-03-01
### Fixed
 - Small bugfixes

## [0.0.18] - 2017-03-01
### Fixed
 - Hotfix unmerged changes

## [0.0.17] - 2017-02-28 [YANKED]
### Added
 - Now you can connect several visualizations to the same websocket
 - Filter for null values in several visualizations

### Fixed
 - Minor fixes and improvements

## [0.0.16] - 2017-02-24
### Added
 - CSS themes :art:

## [0.0.15] - 2017-02-24
### Fixed
 - Fix missing dist folder

## [0.0.14] - 2017-02-22
### Added
 - Helper methods that retrieve available configurations and scales

## [0.0.13] - 2017-02-21
### Fixed
 - Fix compilation error

## [0.0.12] - 2017-02-21 [YANKED]
### Added
 - Method to get the available visualizations

## [0.0.11] - 2017-02-14
### Fixed
 - Minor fix

## [0.0.10] - 2017-02-13
### Changed
 - Update packaging library to UMD

## [0.0.9] - 2017-02-08
### Added
 - ⭐ **New visualization: heatmap**

### Changed
 - Upgraded dependencies

### Fixed
 - Fixed a major bug in legends and data updates
 - Barset transitions improved
 - Various bugfixes and improvements

## [0.0.8] - 2017-01-24
### Changed
 - Upgraded dependencies

## [0.0.7] - 2017-01-24
### Changed
 - Now Webpack bundler replaces Rollup
 - Some refactoring with filenames and folder structure

### Fixed
 - Fix some broken tests
 - Lots of bug fixes

## [0.0.6] - 2017-01-19
### Fixed
 - A major bug fixed. It was a problem with parameters propertyY and propertyX. They were sometimes ignored
 - Some minor changes

## [0.0.5] - 2017-01-16
### Added
 - ⭐ **New visualization: pie chart**
 - ⭐ **New visualization: network chart**
 - Configurable data keys
 - Canvas scatterplot
 - Example showcasing all the available charts
 - Add ts module definition

### Changed
 - Migrate codebase to TypeScript

### Fixed
 - Improve responsive behaviour
 - Lots of bugfixes and improvements

## [0.0.4] - 2016-11-06
### Added
 - Streaming scatterplot example
 - Minified version

### Fixed
 - Some minor bug fixes

## [0.0.3] - 2016-11-03
### Added
 - ⭐ **New visualization: scatterplot**
 - New HTTPDatasource

### Changed
 - Modify gauge and swimlane data formats

### Fixed
 - Minor fixes and improvements

## [0.0.2] - 2016-10-24
### Fixed
 - Fixed a bug with xAxisFormat in websocket streamgraph (#5c3d35d)
 - Minor bugfixes
 - Fixed code style issues and other minor changes

## [0.0.1] - 2016-10-17
### Added
- First release of Proteic. :tada:

[Unreleased]: https://github.com/proteus-h2020/proteic/compare/0.0.26...development
