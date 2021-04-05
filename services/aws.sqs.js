const AWS = require('aws-sdk');
const sqs = new AWS.SQS({ region: process.env.REGION });
const sqsUrl = process.env.PENDING_ORDER_QUEUE;

class Queues {

    #sqs
    #sqsUrl

    constructor(sqs, sqsUrl) {
        this.#sqs = sqs;
        this.#sqsUrl = sqsUrl;
    }

    async send(data) {
        const params = {
            MessageBody: JSON.stringify(data),
            QueueUrl: this.#sqsUrl
          }
      
          const res = await this.#sqs.sendMessage(params).promise();
          return res;
    }
}



module.exports = new Queues(sqs, sqsUrl);