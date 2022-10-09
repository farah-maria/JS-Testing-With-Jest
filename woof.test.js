const woof = require("./woof");

test("should return number of woofs", function() {
   const result = woof("oh herro");
   expect(result).toBe("8woof!"); //strict equality
   expect(['a', 'b', 'c']).toContain('b'); 
});

test("should return null when not given a string", () => {
   const result = woof();
   expect(result).toBeNull();
});

test.todo("should not allow numbers to be passed");