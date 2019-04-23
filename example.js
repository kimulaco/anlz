const Anlz = require('./anlz.js')
const anlz = new Anlz('vanilla-smoothie')

anlz.analyze().then((registory) => {
  console.log('registory');
  console.log(registory);
})
