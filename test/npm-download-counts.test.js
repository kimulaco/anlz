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

describe('Npmanalyze', () => {
  let npmanalyze

  beforeAll(() => {
    const Npmanalyze = require('../npmanalyze')
    npmanalyze = new Npmanalyze('npm')
  })

  describe('download([period])', () => {
    test('\'last-year\'', async () => {
      const response = await npmanalyze.download('last-year')
      expect(enabledResponse(response)).toBeTruthy()
    })

    test('\'last-month\'', async () => {
      const response = await npmanalyze.download('last-month')
      expect(enabledResponse(response)).toBeTruthy()
    })

    test('\'last-week\'', async () => {
      const response = await npmanalyze.download('last-week')
      expect(enabledResponse(response)).toBeTruthy()
    })

    test('\'last-day\'', async () => {
      const response = await npmanalyze.download('last-day')
      expect(enabledResponse(response)).toBeTruthy()
    })

    test('\'2019-01-01\'', async () => {
      const response = await npmanalyze.download('2019-01-01')
      expect(enabledResponse(response)).toBeTruthy()
    })

    test('\'2019-01-01:2019-01-31\'', async () => {
      const response = await npmanalyze.download('2019-01-01:2019-01-31')
      expect(enabledResponse(response)).toBeTruthy()
    })
  })
})
