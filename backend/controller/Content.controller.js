const Content = require("../models/content.model");

const getContent = async (req, res) => {
  const id = req.params.id;
  try {
    const content = await Content.findById(id);
    res.status(200).json(content);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getContent,
};
