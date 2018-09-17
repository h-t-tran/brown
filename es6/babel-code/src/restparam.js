function corePrintUser(name, address, age, phone ) {
    let result = name + " " + address + " " + age + " " + phone;
    return result;
}

function printUser(...args) {
    return corePrintUser(...args)
}

let res = printUser("john", "1st ave", 21, "(858)123-45678");
