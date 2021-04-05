const getOrder = ({ repository, orderTableName, res }) => async (event) => {
    try {
    const { orderId } = event.pathParameters;

    const data = await repository.get(orderTableName, { id: orderId });
    const order = data.Item;

    const message = { message: `Order status: ${order.id} is ${order.deliveryStatus}` };
    return res.success(200, message);
      
    } catch (err) {
      console.error(err);
      return res.error(500, err);
    }
  }
  
  module.exports = getOrder;