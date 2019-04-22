# anlz (WIP)

[![npm version](https://badge.fury.io/js/anlz.svg)](https://badge.fury.io/js/anlz)

Analyze information in npm module.

## Install

```shell
npm install --save anlz
```

## Use

```js
(astnc () => {
  const Anlz = require('../anlz')
  const anlz = new Anlz('package-name')
  const response = await anlz.download('last-year')
  console.log(response)
  {
    downloads: 1000,
    start: 'YYYY-MM-DD',
    end: 'YYYY-MM-DD',
    package: 'package-name',
  }
})
```
