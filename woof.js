function woof(str) {
    if (typeof str !== "string") {
        return null;
    }
    console.log("the woof ran: ", str);
    return str.length + "woof!";
}

module.exports = woof;