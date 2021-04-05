module.exports = {
    idGenerator: require('./idGenerator'),
    queues: require('./aws.sqs'),
    res: require('./res'),
    repository: require('./aws.dynamodb'),
    orderTableName: process.env.ORDER_TABLE
}