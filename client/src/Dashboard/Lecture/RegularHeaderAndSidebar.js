import React, { useState } from "react";
import Wrapper from "../../shared/components/Wrapper";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import VideoCameraFrontOutlinedIcon from "@mui/icons-material/VideoCameraFrontOutlined";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import FolderOutlinedIcon from "@mui/icons-material/FolderOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import Room from "../Room/Room";
import Lecture from "./Lecture";
import { Link } from "react-router-dom";
import DashboardHeader from "../../shared/components/DashboardHeader";

const RegularHeaderAndSidebar = ({ isUserInRoom, subject }) => {
  const [selectMenuItem, setSelectMenuItem] = useState("dashboard");
  const components = {
    lecture: isUserInRoom ? <Room /> : <Lecture subjectId={subject.id} />,
    chat: null,
    files: null,
    calendar: null,
  };

  return (
    <>
      <DashboardHeader />
      <Wrapper>
        <Sidebar
          className="Sidebar"
          style={{ backgroundColor: "white", marginTop: "1px" }}>
          <h4 style={{ textAlign: "center" }}>
            Data Structure ({subject.code})
          </h4>
          <Menu>
            <MenuItem
              className="menu-item"
              component={<Link to="/dashboard" />}
              icon={<GridViewOutlinedIcon />}>
              Dashboard
            </MenuItem>
            <MenuItem
              className="menu-item"
              icon={<VideoCameraFrontOutlinedIcon />}
              onClick={() => {
                setSelectMenuItem("lecture");
              }}>
              Lecture
            </MenuItem>
            <MenuItem
              className="menu-item"
              icon={<ChatOutlinedIcon />}
              onClick={() => setSelectMenuItem("chat")}>
              Chat
            </MenuItem>
            <MenuItem
              className="menu-item"
              icon={<FolderOutlinedIcon />}
              onClick={() => setSelectMenuItem("files")}>
              Files
            </MenuItem>
            <MenuItem
              className="menu-item"
              icon={<CalendarMonthOutlinedIcon />}
              onClick={() => setSelectMenuItem("calendar")}>
              Calendar
            </MenuItem>
          </Menu>
        </Sidebar>
        {components[selectMenuItem]}
      </Wrapper>
    </>
  );
};

export default RegularHeaderAndSidebar;
