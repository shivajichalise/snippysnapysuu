import request from "supertest"
import app from "../main"
import sql from "../config/db";

afterAll(async () => {
    await sql.end()
});

describe("Logout a user", () => {
    test("Should logout a user and respond status code 200 if user is logged in", async () => {

        const userObj = {
            email: 'test@email.com',
            password: "password"
        }

        const loginResponse = await request(app).post('/api/auth/login')
            .send(userObj)
            .set('Accept', 'application/json')

        const cookie = loginResponse.headers['set-cookie'][0]

        const response = await request(app).post('/api/auth/logout')
            .set('Accept', 'application/json')
            .set('Cookie', cookie)
        
        expect(response.statusCode).toBe(200)
        expect(response.body.status).toContain("successful")
        expect(response.body.message).toContain("Logged out")
    })
})
