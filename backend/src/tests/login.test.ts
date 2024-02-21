import request from "supertest"
import app from "../main"
import sql from "../config/db";

afterAll(async () => {
    await sql.end()
});

describe("Login a user", () => {
    test("Should respond with logged in user and status code 200 if credentials are valid", async () => {

        const userObj = {
            email: 'test@email.com',
            password: "password"
        }

        const response = await request(app).post('/api/auth/login')
            .send(userObj)
            .set('Accept', 'application/json')

        expect(response.statusCode).toBe(200)
        expect(response.body.data.user).toBeDefined()
        expect(response.body.data.user.email).toMatch(userObj.email)
        expect(response.body.status).toContain("successful")

    })
})
