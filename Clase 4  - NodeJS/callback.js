const asyncCallback = function (callback) {
    setTimeout(() => {
        if (Math.random() <0.5) {
            return callback(null, 'hello world')
        } else {
            callback (new Error('hello error'));
        }
    }, 2000)
}

asyncCallback((err, msj) => {
    if (err) {
        console.log('error', err)
    } else {
        console.log('message', msj)
    }
});

