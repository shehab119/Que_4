function wearPPE() {
    return new Promise((resolve) => {
        setTimeout(() => resolve('Wearing PPE'), 2000);
    })
}

function fightCorona() {
    return new Promise((resolve) => {
        setTimeout(() => resolve('Fighting Corona'), 1000);
    })
}

function execute() {
    
    // wearPPE().then(result => console.log(result));
    // fightCorona().then(result => console.log(result));

    Promise.all([wearPPE(),fightCorona()]).then((result)=>{
        console.log(result[0])
        console.log(result[1])
    })
}

execute();