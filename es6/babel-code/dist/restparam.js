"use strict";

function corePrintUser(name, address, age, phone) {
    var result = name + " " + address + " " + age + " " + phone;
    return result;
}

function printUser() {
    return corePrintUser.apply(undefined, arguments);
}

var res = printUser("john", "1st ave", 21, "(858)123-45678");