const awesomeFunction = (req, res, next) => {
    res.json('Awesome person');
}

const returnAnotherPerson = (req, res, next) => {
    res.json('Super Awesome person');
}

 module.exports = {awesomeFunction, returnAnotherPerson};