import React from "react";
import styled from "styled-components";
import { PropTypes } from "react";
const Button = styled.button`
  background-color: #060b26;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    background-color: gray;
    color: #060b26;
  }
`;
const FileUploader = (props) => {
  const hiddenFileInput = React.useRef(null);

  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };
  const handleChange = (event) => {
    const fileUploaded = event.target.files[0];
    props.handleFile(fileUploaded);
  };
  return (
    <>
      <Button onClick={handleClick}>Upload a file</Button>
      <input
        type="file"
        ref={hiddenFileInput}
        onChange={handleChange}
        style={{ display: "none" }}
      />
    </>
  );
};
export default FileUploader;
