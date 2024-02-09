import React from "react";
import { styled } from "@mui/system";
import FilesListItem from "./FilesListItem";

const MainContainer = styled("div")({
  flexGrow: 1,
  width: "100%",
});
const FilesList = () => {
  const files = [
    { id: 1, file: "Class Materials" },
    { id: 2, file: "Assignments" },
    { id: 3, file: "Projects" },
  ];
  console.log(files);
  return (
    <MainContainer>
      {files.map(({ id, file }) => (
        <FilesListItem key={id} name={file} />
      ))}
    </MainContainer>
  );
};
export default FilesList;
