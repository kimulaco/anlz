const axios = require('axios')
const apiUrl = 'https://api.npmjs.org'

class Npmanalyze {
  constructor(packageName) {
    this.packageName = packageName
  }

  download(period) {
    const url = `${apiUrl}/downloads/point/${period}/${this.packageName}`

    return axios.get(url).then((response) => {
      return response.data
    })
  }
}

module.exports = Npmanalyze
