const user=require('../modules/user');
const expect=require('expect');
const userinfo=new user.user("mors",37);
describe("user", () => {
test("add mors+37 to equals mors--37",()=>{
    expect(userinfo.fulinfo()).toBe("mors--37");
});
test('detect even or odd number',()=>{
    expect(userinfo.iseven()).toBeTruthy();
})
});

// describe("evnt",()=>{

//     test("detect invalid email",()=>{
//         expect();
//     });
// });