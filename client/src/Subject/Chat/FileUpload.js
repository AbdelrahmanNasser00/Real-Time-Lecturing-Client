import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import axios from "axios";

const FileUpload = () => {
  // const onDrop = useCallback((acceptedFiles) => {
  //   console.log(acceptedFiles);
  //   const formData = new FormData();
  //   acceptedFiles.forEach((file) => {
  //     formData.append("file", file);
  //   });

  const onDrop = (files) => {
    console.log(files);
    let formData = new FormData();
    const config = {
      header: { "Content-Type": "multipart/form-data" },
    };
    formData.append("file", files[0]);

    axios.post("api/chat/uploadfiles", formData, config);
  };

  //   axios
  //     .post("http://localhost:3000/api/upload", formData, {
  //       headers: {
  //         "Content-Type": "multipart/form-data",
  //       },
  //     })
  //     .then((response) => {
  //       console.log("File uploaded successfully:", response.data);
  //     })
  //     .catch((error) => {
  //       console.error("Error uploading file:", error);
  //     });
  // }, []);

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div
      {...getRootProps()}
      style={{ border: "2px dashed #ccc", padding: "20px", cursor: "pointer" }}>
      <input {...getInputProps()} />
      <button>select files</button>
    </div>
  );
};

export default FileUpload;
