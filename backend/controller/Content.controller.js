const Content = require("../models/content.model");

// get content by id
const getContent = async (req, res) => {
  const id = req.params.id;
  try {
    const content = await Content.findById(id);
    res.status(200).json(content);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// get all contents
const getContents = async (req, res) => {
  try {
    const contents = await Content.find();
    res.status(200).json(contents);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getContent,
  getContents,
};
