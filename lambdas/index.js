const services = require('../services');

module.exports = {
    createOrder: require('./createOrder')(services),
    prepareOrder: require('./prepareOrder')(services),
    sendOrder: require('./sendOrder')(services),
    getOrder: require('./getOrder')(services)
}