import React, { useState } from "react";
import Wrapper from "../../shared/components/Wrapper";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import VideoCameraFrontOutlinedIcon from "@mui/icons-material/VideoCameraFrontOutlined";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import FolderOutlinedIcon from "@mui/icons-material/FolderOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import Room from "../../Dashboard/Room/Room";
import Lecture from "../Lecture/Lecture";
import { Link } from "react-router-dom";
import { logout } from "../../shared/utils/auth";

const MobileSidebar = ({ isUserInRoom, subject, width, handleFullScreen }) => {
  const [selectMenuItem, setSelectMenuItem] = useState("lecture");
  const [isOpen, setIsOpen] = useState(true);

  const components = {
    lecture: isUserInRoom ? (
      <Room handleFullScreen={handleFullScreen} />
    ) : (
      <Lecture subjectId={subject.id} />
    ),
    chat: null,
    files: null,
    calendar: null,
  };
  const handleToggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const sidebarStyle = {
    width: `${width}px`,
    minWidth: `${width}px`,
    transition: "width 0.5s, min-width 0.5s",
  };

  const iconStyle = {
    color: "rgb(0, 152, 229)",
  };

  return (
    <Wrapper style={{ flexDirection: "row-reverse" }}>
      <Sidebar className="mobileSidebar" style={sidebarStyle}>
        <div className="sidebarMenu">
          <h4
            style={{ textAlign: "center", cursor: "pointer", color: "#5c27fe" }}
            onClick={handleToggleSidebar}>
            {subject.name} ({subject.code})
          </h4>
          <Menu>
            <MenuItem
              className="menu-item"
              component={<Link to="/dashboard" />}
              icon={<GridViewOutlinedIcon style={iconStyle} />}>
              Dashboard
            </MenuItem>
            <MenuItem
              className="menu-item"
              icon={<VideoCameraFrontOutlinedIcon style={iconStyle} />}
              onClick={() => {
                setSelectMenuItem("lecture");
              }}>
              Lecture
            </MenuItem>
            <MenuItem
              className="menu-item"
              icon={<ChatOutlinedIcon style={iconStyle} />}
              onClick={() => setSelectMenuItem("chat")}>
              Chat
            </MenuItem>
            <MenuItem
              className="menu-item"
              icon={<FolderOutlinedIcon style={iconStyle} />}
              onClick={() => setSelectMenuItem("files")}>
              Files
            </MenuItem>
            <MenuItem
              className="menu-item"
              icon={<CalendarMonthOutlinedIcon style={iconStyle} />}
              onClick={() => setSelectMenuItem("calendar")}>
              Calendar
            </MenuItem>
          </Menu>
        </div>
        <div className="sidebarBottom">
          <Menu>
            <MenuItem
              className="menu-item"
              icon={
                <LogoutOutlinedIcon style={{ color: "rgb(255, 65, 65)" }} />
              }
              onClick={logout}
              style={{
                position: "relative",
                marginBottom: "40px",
              }}>
              Logout
            </MenuItem>
          </Menu>
        </div>
      </Sidebar>
      {components[selectMenuItem]}
    </Wrapper>
  );
};

export default MobileSidebar;
