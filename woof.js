function woof(str) {
    if (typeof str !== "string") {
        return;
    }
    console.log("the woof ran: ", str);
    return str.length + "woof!";
}

module.exports = woof;