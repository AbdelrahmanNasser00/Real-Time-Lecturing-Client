import React, { useState } from "react";
import Wrapper from "../../shared/components/Wrapper";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import VideoCameraFrontOutlinedIcon from "@mui/icons-material/VideoCameraFrontOutlined";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import Room from "../../Dashboard/Room/Room";
import Lecture from "../Lecture/Lecture";
import { Link } from "react-router-dom";
import { logout } from "../../shared/utils/auth";
import "../../shared/UI/css/Sidebar.css";
import Chat from "../Chat/Chat";

const SideBar = ({ isUserInRoom, subject, handleFullScreen, isFullScreen }) => {
  const [selectMenuItem, setSelectMenuItem] = useState("lecture");
  const [isOpen, setIsOpen] = useState(true);
  const [showChat, setShowChat] = useState(false);

  const components = {
    lecture: isUserInRoom ? (
      <Room handleFullScreen={handleFullScreen} isFullScreen={isFullScreen} />
    ) : (
      <Lecture subjectId={subject.id} />
    ),
  };

  const handleToggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleMenuItemClick = (menuItem) => {
    setSelectMenuItem(menuItem);
    setShowChat(menuItem === "chat");
  };

  const iconStyle = {
    color: "#2E86C1",
  };

  return (
    <Wrapper>
      <Sidebar className="Sidebar" collapsed={!isOpen}>
        <div className="sidebarMenu">
          <h4
            style={{ textAlign: "center", cursor: "pointer" }}
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
                handleMenuItemClick("lecture");
              }}>
              Lecture
            </MenuItem>
            <MenuItem
              className="menu-item"
              icon={<ChatOutlinedIcon style={iconStyle} />}
              onClick={() => setShowChat(!showChat)}>
              Chat
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
      <div
        style={{
          display: "flex",
          flexDirection: "row-reverse",
          width: "100%",
        }}>
        <div style={{ flex: showChat ? 3 : 1 }}>
          {components[selectMenuItem]}
        </div>
        {showChat && (
          <div style={{ flex: 1, maxWidth: "500px" }}>
            <Chat subjectId={subject.id} />
          </div>
        )}
      </div>
    </Wrapper>
  );
};

export default SideBar;
