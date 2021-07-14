import { TextField } from "../atoms";

const inputField = ({  textFieldProps, SpecificStyle = "flex mr-20 my-4 mx-10  "
}) => {
  return (
    <div className={SpecificStyle}>
      <TextField {...textFieldProps} />

    </div>
  );
};

export default inputField;