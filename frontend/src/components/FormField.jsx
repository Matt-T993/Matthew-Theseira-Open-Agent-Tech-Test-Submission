import PropTypes from "prop-types";

const FormField = ({ type, placeholder, name, form, value, onChange }) => {
  return (
    <>
      {form === "input" ? (
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          className="mt-1 p-3 block w-full border border-gray-300 rounded-md"
          value={value}
          onChange={onChange}
          required
        />
      ) : (
        <textarea
          name={name}
          placeholder={placeholder}
          rows="4"
          className="mt-1 p-3 block w-full border border-gray-300 rounded-md h-[200px]"
          value={value}
          onChange={onChange}
          required
        />
      )}
    </>
  );
};

FormField.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  form: PropTypes.oneOf(["input", "textarea"]).isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default FormField;
