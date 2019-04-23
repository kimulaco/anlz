const axios = require('axios')

/**
 * Anlz
 * @constructor
 * @param {string} packageName
 */
class Anlz {
  constructor(packageName, option) {
    this.option = Object.assign({
      downloadPeriod: 'last-year'
    })
    this.packageName = packageName
    this.registory = null
  }

  /**
   * async
   * @returns {Promise}
   */
  async analyze() {
    console.log('analyze')

    if (!this.registory) {
      this.registory = await this.getRegistory()
    }

    if (!this.registory.download) {
      this.registory.download = await this.download()
    }

    return this.registory
  }

  /**
   * getRegistory
   * @returns {Promise}
   */
  getRegistory() {
    const registoryUrl = 'https://registry.npmjs.org'
    return axios.get(`${registoryUrl}/${this.packageName}`).then((response) => {
      return response.data
    })
  }

  /**
   * getDownload
   * @param {string} period
   * @returns {Promise}
   */
  getDownload(period) {
    const apiUrl = 'https://api.npmjs.org'
    period = period || this.option.downloadPeriod
    const url = `${apiUrl}/downloads/point/${period}/${this.packageName}`

    return axios.get(url).then((response) => {
      return response.data
    })
  }
}

module.exports = Anlz
