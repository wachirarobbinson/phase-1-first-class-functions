const chai = "chai";
const spies = "chai-spies";
chai.use(spies);


function receivesAFunction(spy) {
    spy();
}

function returnsANamedFunction() {
    return function namedFunction() {

    };
}

function returnsAnAnonymousFunction() {
    return function () {

    };
}