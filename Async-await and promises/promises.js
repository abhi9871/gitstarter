// Using promises
console.log('person1: shows ticket');
console.log('person2: shows ticket');

const promiseWifeBringingTicks = new Promise((resolve, reject) => {
    setTimeout(() => resolve('ticket'), 3000);
});

const getPopcorn = promiseWifeBringingTicks.then((t) => { 
    console.log('wife: i have the tics')
    console.log('husband : we should go in');
    console.log('wife : no i am hungry');
    return  new Promise((resolve, reject) => resolve('popcorn'));
});

const addButter = getPopcorn.then((t) => {
    console.log('husband: i got some popcorn');
    console.log('husband : we should go in');
    console.log('wife : I need butter');
    return  new Promise((resolve, reject) => resolve('butter'));
});

const getColdDrinks = addButter.then((t) => {
    console.log('husband : we should go in');
    console.log('wife : I need cold drinks');
    return new Promise((resolve, reject) => resolve('cold drinks'))
});

getColdDrinks.then((t) => console.log(t));

console.log('person4: shows ticket');
console.log('person5: shows ticket');