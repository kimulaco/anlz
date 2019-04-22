# npm-download-counts

[![npm version](https://badge.fury.io/js/npm-download-counts.svg)](https://badge.fury.io/js/npm-download-counts)

This module can easily get the download count of npm.

## Install

```shell
npm install --save npm-download-counts
```

## Use

```js
(astnc () => {
  const npmDownloadCounts = require('npm-download-counts')
  const response = await npmDownloadCounts('package-name', 'last-year')
  console.log(response)
  {
    downloads: 1000,
    start: 'YYYY-MM-DD',
    end: 'YYYY-MM-DD',
    package: 'package-name',
  }
})
```
