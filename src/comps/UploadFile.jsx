import React, { useState } from "react";
import ProgressBar from "./ProgressBar";


const FileUpload = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const handleChange = (e) => {
    let selected = e.target.files[0];
    const types = ["image/jpeg", "image/png", "image/jpg"];
    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError("");
    } else {
      setFile(null);
      setError("Please select an valid image file");
    }
    console.log(e.target.files[0]);
  };
  return (
    <div>
      <form>
        <label>

        <input onChange={handleChange} type="file" />
        <span>+</span>
        </label>
        <div className="output">
          {error && <div className="error">{error}</div>}
          {file && <div>{file.name}</div>}
          {file && <ProgressBar file={file} setFile={setFile} />}
        </div>
      </form>
    </div>
  );
};
export default FileUpload;
