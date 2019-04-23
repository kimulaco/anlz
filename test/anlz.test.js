const testDownloadResponse = (response) => {
  if (
    typeof response.downloads === 'number' &&
    typeof response.start === 'string' &&
    typeof response.end === 'string' &&
    typeof response.package === 'string'
  ) {
    return true
  }

  return false
}

describe('Anlz', () => {
  let anlz

  beforeAll(() => {
    const Anlz = require('../anlz')
    anlz = new Anlz('npm')
  })

  describe('getDownload([period])', () => {
    test('\'last-year\'', async () => {
      const response = await anlz.getDownload('last-year')
      expect(testDownloadResponse(response)).toBeTruthy()
    })

    test('\'last-month\'', async () => {
      const response = await anlz.getDownload('last-month')
      expect(testDownloadResponse(response)).toBeTruthy()
    })

    test('\'last-week\'', async () => {
      const response = await anlz.getDownload('last-week')
      expect(testDownloadResponse(response)).toBeTruthy()
    })

    test('\'last-day\'', async () => {
      const response = await anlz.getDownload('last-day')
      expect(testDownloadResponse(response)).toBeTruthy()
    })

    test('\'2019-01-01\'', async () => {
      const response = await anlz.getDownload('2019-01-01')
      expect(testDownloadResponse(response)).toBeTruthy()
    })

    test('\'2019-01-01:2019-01-31\'', async () => {
      const response = await anlz.getDownload('2019-01-01:2019-01-31')
      expect(testDownloadResponse(response)).toBeTruthy()
    })
  })
})
