const awesomeFunction = (req, res, next) => {
    res.json('Cameron Davis');
}

const returnAnotherPerson = (req, res, next) => {
    res.json('Super Awesome person');
}

 module.exports = {awesomeFunction, returnAnotherPerson};