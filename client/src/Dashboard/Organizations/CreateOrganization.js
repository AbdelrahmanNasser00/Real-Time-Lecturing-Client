import React, { useState } from "react";
import "../../shared/UI/css/OrganizationsAndSubjects.css";

const styleCreateOrganization = {
  display: "flex",
  flexDirection: "column",
  padding: "10px 15px",
  width: "100%",
  justifyContent: "center",
  alignItems: "center",
};

const CreateOrganization = ({ handleCreateOrganization }) => {
  const [subjectCount, setSubjectCount] = useState(1);
  const [organizationData, setOrganizationData] = useState({
    name: "",
    subjects: [],
    adminName: "",
  });

  const handleAddBtn = () => {
    setSubjectCount(subjectCount + 1);
  };

  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    if (name === "name" || name === "adminName") {
      setOrganizationData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    } else {
      const subjectInx = parseInt(name.replace("subject", ""), 10);
      setOrganizationData((prevData) => {
        const newSubjects = [...prevData.subjects];
        newSubjects[subjectInx - 1] = value;

        return {
          ...prevData,
          subjects: newSubjects,
          [name]: value,
        };
      });
    }
  };
  const handleCreate = () => {
    if (organizationData.name.trim() !== "") {
      handleCreateOrganization(organizationData);
    }
  };
  return (
    <div className="create-organization" style={styleCreateOrganization}>
      <input
        type="text"
        name="name"
        placeholder="Oraganization name"
        value={organizationData.name}
        onChange={handleInputChange}
      />
      {Array.from({ length: subjectCount }).map((_, index) => (
        <input
          key={index}
          type="text"
          name={`subject${index + 1}`}
          placeholder={`Subject ${index + 1}`}
          onChange={handleInputChange}
        />
      ))}
      <button onClick={handleAddBtn}>+</button>
      <input
        type="text"
        name="adminName"
        placeholder="Admin name"
        value={organizationData.adminName}
        onChange={handleInputChange}
      />
      <button onClick={handleCreate}>Create</button>
    </div>
  );
};

export default CreateOrganization;

/*
import React, { useState } from "react";
import "../../shared/UI/css/OrganizationsAndSubjects.css";

const styleCreateOrganization = {
  display: "flex",
  flexDirection: "column",
  padding: "10px 15px",
  width: "100%",
  justifyContent: "center",
  alignItems: "center",
};

const CreateOrganization = ({ handleCreateOrganization }) => {
  const [subjectCount, setSubjectCount] = useState(1);
  const [organizationData, setOrganizationData] = useState({
    name: "",
    subjects: [],
    adminName: "",
  });

  const handleAddBtn = () => {
    setSubjectCount(subjectCount + 1);
  };

  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    setOrganizationData((prevData) => {
      const newSubjects = [...prevData.subjects];
      newSubjects[index] = value;

      return {
        ...prevData,
        subjects: newSubjects,
        [name]: value,
      };
    });
  };

  const handleCreate = () => {
    if (organizationData.name.trim() !== "") {
      console.log(organizationData);
      handleCreateOrganization(organizationData);
    }
  };

  return (
    <div className="create-organization" style={styleCreateOrganization}>
      <input
        type="text"
        name="name"
        placeholder="Organization name"
        value={organizationData.name}
        onChange={(e) => handleInputChange(e)}
      />
      {Array.from({ length: subjectCount }).map((_, index) => (
        <input
          key={index}
          type="text"
          name={`subject${index + 1}`}
          placeholder={`Subject ${index + 1}`}
          onChange={(e) => handleInputChange(e, index)}
        />
      ))}
      <button onClick={handleAddBtn}>+</button>
      <input
        type="text"
        name="adminName"
        placeholder="Admin name"
        value={organizationData.adminName}
        onChange={(e) => handleInputChange(e)}
      />
      <button onClick={handleCreate}>Create</button>
    </div>
  );
};

export default CreateOrganization;
 */
