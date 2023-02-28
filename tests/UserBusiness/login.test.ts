import { UserBusiness } from '../../src/business/UserBusiness'
import { UserDatabaseMock } from '../mocks/UserDatabaseMock'
import { IdGeneratorMock } from '../mocks/IdGeneratorMock'
import { TokenManagerMock } from '../mocks/TokenManagerMock'
import { HashManagerMock } from '../mocks/HashManagerMock'
import { LoginInputDTO } from '../../src/dtos/userDTO'


describe("login", () => {
    const userBusiness = new UserBusiness(
        new UserDatabaseMock(),
        new IdGeneratorMock(),
        new TokenManagerMock(),
        new HashManagerMock()
    )

    test("retornar token de login da conta normal", async () => {
        const input: LoginInputDTO = {
            email: "normal@email.com",
            password: "bananinha" // informacao encontrada no HashManagerMock.ts
        }

        const result = await userBusiness.login(input)

        expect(result.token).toBe("token-mock-normal")

    })

    test("Retornar toke de login da conta admin", async () => {
        const input: LoginInputDTO = {
            email: "admin@email.com",
            password: "bananinha" // informacao encontrada no HashManagerMock.ts
        }

        const result = await userBusiness.login(input)

        expect(result.token).toBe("token-mock-admin")
    })

})