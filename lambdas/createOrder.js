/*
const createOrder = ({ idGenerator, sqs, sqs_url, res }) => async (event) => {
  try {
    const eventParsed = JSON.parse(event.body);
    const data = {...eventParsed};

    const order = {
      name: data.name,
      email: data.email,
      phone: data.phone,
      address: data.address,
      order: data.order,
      deliveryStatus: "IN_PREPARATION_PROCESS",
      date: new Date()
    }

    order.id = idGenerator.generate();;

    const params = {
      MessageBody: JSON.stringify({ order }),
      QueueUrl: sqs_url
    }

    const notification = await sqs.sendMessage(params).promise();

    console.info('Post to queue processed with the following data: ', notification);

    const message = { message: `The order was successfully registered. Your order number is ${order.id}`, body: order };

    return res.success(200, message);
    
  } catch (err) {
    console.error(err);
    return res.error(500, err);
  }
}
*/

const createOrder = ({ idGenerator, queues, res }) => async (event) => {
  try {
    const eventParsed = JSON.parse(event.body);
    const data = {...eventParsed};

    const order = {
      name: data.name,
      email: data.email,
      phone: data.phone,
      address: data.address,
      order: data.order,
      deliveryStatus: "IN_PREPARATION_PROCESS",
      date: new Date()
    }

    order.id = idGenerator.generate();

    const notification = await queues.send({ order });

    console.info('Post to queue processed with the following data: ', notification);

    const message = { message: `The order was successfully registered. Your order number is ${order.id}`, body: order };

    return res.success(200, message);
    
  } catch (err) {
    console.error(err);
    return res.error(500, err);
  }
}

module.exports = createOrder;
  