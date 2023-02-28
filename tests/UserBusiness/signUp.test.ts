import { UserBusiness } from "../../src/business/UserBusiness"
import { UserDatabaseMock } from '../mocks/UserDatabaseMock'
import { IdGeneratorMock } from '../mocks/IdGeneratorMock'
import { TokenManagerMock } from '../mocks/TokenManagerMock'
import { HashManagerMock } from '../mocks/HashManagerMock'
import {SignupInputDTO} from '../../src/dtos/userDTO'

describe("signUp", () => {

    const userBusiness = new UserBusiness(
        new UserDatabaseMock(),
        new IdGeneratorMock(),
        new TokenManagerMock(),
        new HashManagerMock()
    )
    test("Deve retonar a token de uma conta normal", async () => {
        const input: SignupInputDTO ={
            name: "Teste Mock",
            email: "Teste@email.com",
            password: "bananinha" // informacao encontrada no HashManagerMock.ts
        }

        const result = await userBusiness.signup(input)

        expect(result.token).toBe("token-mock-normal")
    })
})