const prepareOrder = ({ repository, orderTableName, res }) => async (event) => {
    try {
      const parsedEvent = JSON.parse(event.Records[0].body)
      const data = { ...parsedEvent };

      const { order } = data;
      order.deliveryStatus = "READY_FOR_DELIVERY";

      await repository.create(orderTableName, order);
  
      return res.success(200, order);
      
    } catch (err) {
      console.error(err);
      return res.error(500, err);
    }
  }
  
  module.exports = prepareOrder;
    