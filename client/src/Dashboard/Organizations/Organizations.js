import React, { useState } from "react";
import { styled } from "@mui/system";
import "../../shared/UI/css/OrganizationsAndSubjects.css";
import CreateOrganization from "./CreateOrganization";

const Wrapper = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: "white",
  height: "calc(100vh - 107px)",
  position: "relative",
  borderRadius: "40px",
  padding: "20px",
  margin: "5px",
  boxShadow: "0px 0px 5px #999999",
});

const Organizations = () => {
  const [organizations, setOrganizations] = useState([
    {
      name: "FCI Assiut University",
      subjects: ["Operating System", "Data Structures"],
    },
  ]);
  const [activeAccordion, setActiveAccordion] = useState(null);
  const [createOrg, setCreateOrg] = useState(false);
  const handleAccordion = (index) => {
    setActiveAccordion((prev) => (prev === index ? null : index));
  };

  const handleCreateOrganization = (organizationData) => {
    setOrganizations((prev) => [...prev, organizationData]);
    setCreateOrg(!createOrg);
  };

  return (
    <Wrapper>
      <h2 styled={{ padding: "5px", margin: "10px" }}>Organizations</h2>
      <div className="accodions-container">
        {organizations.map((organization, index) => (
          <div className="accordion" key={index}>
            <div
              className={`organization-name ${
                activeAccordion === index ? "active" : ""
              }`}
              onClick={() => handleAccordion(index)}>
              {organization.name}
            </div>
            <div
              className={`content ${
                activeAccordion === index ? "active" : ""
              }`}>
              {organization.subjects.map((subject, subjectIndex) => (
                <span key={subjectIndex}>{subject}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
      {createOrg ? (
        <>
          <CreateOrganization
            handleCreateOrganization={handleCreateOrganization}
          />
          <button onClick={() => setCreateOrg(false)}>Cancel</button>
        </>
      ) : (
        <button onClick={() => setCreateOrg(true)}>Create Organization</button>
      )}
    </Wrapper>
  );
};

export default Organizations;
