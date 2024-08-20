import PropTypes from "prop-types";
import { formatPhoneNumber } from "../utils/utils";
import FormField from "./FormField";
import { createContactUs } from "../services/services";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ContactUsForm = ({ content }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNum: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState(null);

  const navigate = useNavigate();

  // function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // validate phone number  - must contain only digits
    const phoneNumberPattern = /^\d+$/;
    if (!phoneNumberPattern.test(formData.phoneNum)) {
      setFormStatus({
        success: false,
        message: "Phone number must contain only digits.",
      });
      return;
    }
    try {
      await createContactUs(formData);
      setFormStatus({
        success: true,
        message: "Your message has been sent successfully!",
      });
      navigate("/thank-you");
    } catch (error) {
      console.error("Error submitting contact form:", error);
      setFormStatus({
        success: false,
        message: "Failed to send your message. Please try again later.",
      });
    }
  };

  // function to handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <section className="w-full max-md:mt-8 md:w-1/2 bg-[#f7f7f8] mx-auto">
      <div className="flex flex-col md:p-10 p-4">
        <p>
          Fill in your details and we&apos;ll be in touch right away. Or if you
          prefer call us on{" "}
          {content?.phone ? formatPhoneNumber(content.phone) : ""}.
        </p>
        {formStatus && (
          <p
            className={`text-sm ${
              formStatus.success ? "text-green-500" : "text-red-500"
            }`}
          >
            {formStatus.message}
          </p>
        )}
        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <FormField
            type="text"
            placeholder="First Name"
            name="firstName"
            form="input"
            value={formData.firstName}
            onChange={handleChange}
          />

          <FormField
            type="text"
            placeholder="Last Name"
            name="lastName"
            form="input"
            value={formData.lastName}
            onChange={handleChange}
          />

          <FormField
            type="email"
            placeholder="Email Address"
            name="email"
            form="input"
            value={formData.email}
            onChange={handleChange}
          />

          <FormField
            type="tel"
            placeholder="Phone Number"
            name="phoneNum"
            form="input"
            value={formData.phoneNum}
            onChange={handleChange}
          />

          <FormField
            placeholder="What do you want to speak to us about?"
            name="message"
            form="textarea"
            value={formData.message}
            onChange={handleChange}
          />
          <div>
            <div className="space-y-1">
              <button type="submit" className="w-full py-4 px-5 btn">
                Send Message
              </button>

              <p className="text-sm">
                By sending a message you agree to the{" "}
                <span className="document-links">Terms and Conditions</span> and{" "}
                <span className="document-links">Privacy Policy.</span>
              </p>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

ContactUsForm.propTypes = {
  content: PropTypes.shape({
    phone: PropTypes.string,
  }),
};

export default ContactUsForm;
