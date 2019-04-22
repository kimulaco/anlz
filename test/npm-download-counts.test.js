const enabledResponse = (response) => {
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

describe('npmDownloadCounts([packageName, period])', () => {
  let npmDownloadCounts
  let packageName = 'npm'

  beforeAll(() => {
    npmDownloadCounts = require('../npm-download-counts')
  })

  describe('[packageName]', () => {
    test('null', async () => {
      const response = await npmDownloadCounts(null)
      expect(enabledResponse(response)).toBeTruthy()
    })

    test('packageName', async () => {
      const response = await npmDownloadCounts(packageName)
      expect(enabledResponse(response)).toBeTruthy()
    })
  })

  describe('[period]', () => {
    test('last-year', async () => {
      const response = await npmDownloadCounts(packageName, 'last-year')
      expect(enabledResponse(response)).toBeTruthy()
    })

    test('last-month', async () => {
      const response = await npmDownloadCounts(packageName, 'last-month')
      expect(enabledResponse(response)).toBeTruthy()
    })

    test('last-week', async () => {
      const response = await npmDownloadCounts(packageName, 'last-week')
      expect(enabledResponse(response)).toBeTruthy()
    })

    test('last-day', async () => {
      const response = await npmDownloadCounts(packageName, 'last-day')
      expect(enabledResponse(response)).toBeTruthy()
    })

    test('2019-01-01', async () => {
      const response = await npmDownloadCounts(packageName, '2019-01-01')
      expect(enabledResponse(response)).toBeTruthy()
    })

    test('2019-01-01:2019-01-31', async () => {
      const response = await npmDownloadCounts(packageName, '2019-01-01:2019-01-31')
      expect(enabledResponse(response)).toBeTruthy()
    })
  })
})
