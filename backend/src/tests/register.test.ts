import request from "supertest"
import app from "../main"
import sql from "../config/db";

afterAll(async () => {
    await sql.end()
});

describe("Register a user", () => {
    test("Should respond with created user and status code 200 with given email is not already used", async () => {

        const userObj = {
            name: 'Test User',
            email: 'test@email.com',
            password: "password"
        }

        const response = await request(app).post('/api/auth/register')
            .send(userObj)
            .set('Accept', 'application/json')

        expect(response.statusCode).toBe(200)
        expect(response.body.data.user).toBeDefined()
        expect(response.body.data.user.name).toMatch(userObj.name)
        expect(response.body.data.user.email).toMatch(userObj.email)
        expect(response.body.status).toContain("successful")

    })
})
