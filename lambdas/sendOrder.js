const sendOrder = ({ repository, orderTableName, res }) => async (event) => {
    try {
      const records = { ...event.Records[0]};

      const orderId = records.dynamodb.Keys.id.S;

      if(records.eventName !== 'INSERT') return;

      const query = {
        ConditionExpression: 'attribute_exists(id)',
        UpdateExpression: 'set deliveryStatus = :v',
        ExpressionAttributeValues: {
            ':v': 'DELIVERED'
        },
        ReturnValues: 'ALL_NEW'
     }

     const orderAttributes = await repository.update(orderTableName, orderId, query);
     const order = orderAttributes.Attributes;
      
     console.info('ORDER DELIVERED: ', order.id);
      
     const message = { message: `The order number ${order.id} was delivered.`, body: order };

     return res.success(200, message);
      
    } catch (err) {
      console.error(err);
      return res.error(500, err);
    }
  }
  
  module.exports = sendOrder;