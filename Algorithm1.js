var count = 0;

const retry = (callback, wait, option) => {
    ++count;
    console.log(count);
    if(callback() === true) {
        console.log('true');
        return true
    } else if(option.max) {
        if(count >= option.max) {
            console.log('false');
            return false
        } else {
            setTimeout(retry.bind(this, callback, wait, option), wait);
        }
    } else {
        setTimeout(retry.bind(this, callback, wait, option), wait);
    }
}

const func = () => {
    var random = Math.random();
    console.log('random:', random);
    return random < 0.2
}

retry(func, 1000, {max: 5});