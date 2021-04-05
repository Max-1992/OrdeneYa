const AWS = require('aws-sdk');

class Repository {

    #dynamodb

    constructor(AWS) {
        this.#dynamodb = new AWS.DynamoDB.DocumentClient();
    }

    async get(table, key) {
        const params = {
            TableName: table,
            Key: key 
        };

        const res = await  this.#dynamodb.get(params).promise();

        return res;
    }

    async create(table, data) {
        const params = {
            TableName: table,
            Item: data
        };

        const res = await this.#dynamodb.put(params).promise();

        return res;
    }

    async update(table, key, query) {

        const params = {
            TableName: table, // Chequear si la tabla tiene que ir hardcodeada o dinamica
            Key: { 'id': key },
            ...query
        }

        const res = await this.#dynamodb.update(params).promise();

        return res;
    }

}

module.exports = new Repository(AWS);