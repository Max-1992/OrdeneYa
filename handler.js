const { createOrder, prepareOrder, sendOrder, getOrder } = require('./lambdas');

module.exports = {
    createOrder,
    prepareOrder,
    sendOrder,
    getOrder
};