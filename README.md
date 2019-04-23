# anlz (WIP)

[![npm version](https://badge.fury.io/js/anlz.svg)](https://badge.fury.io/js/anlz)

Analyze information in npm module.

## Install

```shell
npm install --save anlz
```

## Use

```js
const Anlz = require('./anlz.js')
const anlz = new Anlz('npm')

anlz.analyze().then((registory) => {
  console.log(registory);
})
```
