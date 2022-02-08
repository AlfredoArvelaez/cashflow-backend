import app from '../../app'
import request from 'supertest'

describe('auth routes', () => {
  const rootAuthURI = '/api/v1/auth'

  it('should return response object', async () => {
    const expectedResponse = 'SignIn route working'

    const res =
      await request(app)
        .post(`${rootAuthURI}/signIn`)
        .send()

    expect(res.text).toBe(expectedResponse)
    expect(res.statusCode).toBe(200)
  })

  it('should return hello from signUp', async () => {
    const expectedResponse = 'SignUp route working'

    const res = await request(app)
      .post(`${rootAuthURI}/signUp`)
      .send()

    expect(res.text).toBe(expectedResponse)
    expect(res.statusCode).toEqual(200)
  })
})
