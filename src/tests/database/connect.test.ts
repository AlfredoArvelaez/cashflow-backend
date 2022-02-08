import { connectToDatabase } from '../../database/connect'

describe('database config', () => {
  it('should return true', async () => {
    const isConnected = await connectToDatabase()
    expect(isConnected).toBe(true)
  })
})
