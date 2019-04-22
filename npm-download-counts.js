const axios = require('axios')
const baseUrl = 'https://api.npmjs.org/downloads/point/'

const npmDownloadCounts = (packageName, period = 'last-year') => {
  return axios.get(`${baseUrl}${period}/${packageName}`).then((response) => {
    return response.data
  })
}

module.exports = npmDownloadCounts
