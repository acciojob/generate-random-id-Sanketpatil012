function makeid(l) {
     let str = '';
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < l; i++) {
        str += chars[Math.floor(Math.random() * chars.length)];
    }

    return str;
}

// Do not change the code below.
const l = prompt("Enter a number.");
alert(makeid(l));
