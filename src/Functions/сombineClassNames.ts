let combineClassNames = (...args: any[]): string => {
    let strings: Array<string> = [];
    for (let i = 0; i < args.length; i++) {
        let arg = args[i];
        if (!arg) continue;

        let argumentType = typeof arg;

        if (argumentType === "string") {
            strings.push(arg);
        } else if (argumentType === "number") {
            strings.push(arg + "");
        } else if (argumentType === "object") {
            if (arg.toString !== Object.prototype.toString) {
                strings.push(arg.toString());
            } else {
                for (let key in arg) {
                    if ({}.hasOwnProperty.call(arg, key) && arg[key]) {
                        strings.push(key);
                    }
                }
            }
        }
    }
    return strings.join(' ');
}

export default combineClassNames;
