const tgroup = require("./tgroup")
// @ponicode
describe("generateNumber", () => {
    let inst

    beforeEach(() => {
        inst = new tgroup.default()
    })

    test("0", () => {
        let callFunction = () => {
            inst.generateNumber()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("removeNumber", () => {
    let inst

    beforeEach(() => {
        inst = new tgroup.default()
    })

    test("0", () => {
        let callFunction = () => {
            inst.removeNumber()
        }
    
        expect(callFunction).not.toThrow()
    })
})
