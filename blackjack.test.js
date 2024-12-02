var sum = 0;
let cards = [];
test("checks for equality",()=>{
    expect(sum).toBe(0)
})

describe("cards to be falsy",()=>{
    expect(cards).toBeFalsy()
})