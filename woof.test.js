const woof = require("./woof");

test("should return number of woofs", function() {
   const result = woof("oh herro");
   expect(result).toBe("8woof!"); //strict equality
   expect(result).toEqual("8woof!"); //not strict equality
});
