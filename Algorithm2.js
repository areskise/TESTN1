var x = 3;

const combination = (sessions, x) => {
    if(x < 0) return [];
    if(x == 0) return [[]];
    let results = [];
    for(let i = 0; i < sessions.length; i++) {
        let current = sessions[i];
        let remaining = x - current;
        let reCombination = combination(sessions, remaining);
        for(let a of reCombination) {
            a.push(current);
            results.push(a);
        }
    }
    return results;
}

console.log(combination([1, 2], x));
