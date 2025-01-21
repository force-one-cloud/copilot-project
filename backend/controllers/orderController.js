const Order = require('../models/Order');

const createOrder = async (req, res) => {
  const { products, totalAmount } = req.body;

  const order = new Order({
    user: req.user._id,
    products,
    totalAmount,
  });

  const createdOrder = await order.save();
  res.status(201).json(createdOrder);
};

const getOrders = async (req, res) => {
  const orders = await Order.find({}).populate('user', 'name email');
  res.json(orders);
};

const getOrderById = async (req, res) => {
  const order = await Order.findById(req.params.id).populate('user', 'name email');

  if (order) {
    res.json(order);
  } else {
    res.status(404).json({ message: 'Order not found' });
  }
};

const updateOrderStatus = async (req, res) => {
  const { status } = req.body;
  const order = await Order.findById(req.params.id);

  if (order) {
    order.status = status;
    const updatedOrder = await order.save();
    res.json(updatedOrder);
  } else {
    res.status(404).json({ message: 'Order not found' });
  }
};

module.exports = {
  createOrder,
  getOrders,
  getOrderById,
  updateOrderStatus,
};
