import PropTypes from "prop-types";
import { formatPhoneNumber } from "../utils/utils";

const ContactInfo = ({ content }) => {
  return (
    <section className="md:w-1/2 px-4  ">
      <div className="flex flex-col space-y-4 md:pr-10 ">
        <div className="flex flex-col space-y-4">
          <p>{content?.pageBody}</p>
          <p>{content?.pageBody2}</p>
        </div>

        <h3 className="font-bold underline">Contact Us Details</h3>
        <div className="flex flex-col">
          <p>Phone: {content?.phone ? formatPhoneNumber(content.phone) : ""}</p>
          <p>Email: {content?.email}</p>
        </div>

        <h3 className="font-bold underline">Postal Address:</h3>
        <div>
          <p>{content?.postalAddress}</p>
        </div>

        <h3 className="font-bold underline">
          Contact centre hours of operation
        </h3>
        <div>
          <p>{content?.businessHours}</p>
        </div>
      </div>
    </section>
  );
};

ContactInfo.propTypes = {
  content: PropTypes.shape({
    pageBody: PropTypes.string,
    pageBody2: PropTypes.string,
    phone: PropTypes.string,
    email: PropTypes.string,
    postalAddress: PropTypes.string,
    businessHours: PropTypes.string,
  }),
};

export default ContactInfo;
