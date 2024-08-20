const ContactUs = require("../models/contactus.model");

// Get all contact us
const getContactUs = async (req, res) => {
  try {
    const { id } = req.params;
    const contactUs = await ContactUs.findById(id);
    res.status(200).json(contactUs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new contact us
const createContactUs = async (req, res) => {
  try {
    const contactUs = new ContactUs(req.body);
    await contactUs.save();
    res.status(201).send(contactUs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
module.exports = {
  getContactUs,
  createContactUs,
};
