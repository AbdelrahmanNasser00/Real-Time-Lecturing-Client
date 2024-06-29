import React, { useCallback } from "react";
import { DropdownMenu, MenuItem } from "react-bootstrap-dropdown-menu";
import "../UI/css/SettingMenu.css";
import { logout } from "../utils/auth";
import store from "../../store/store";

const SettingsMenu = () => {
  const deleteAccount = useCallback((e) => {
    console.log("Deleting Account");
  }, []);
  const userName = store.getState().auth.userDetails?.username;

  return (
    <DropdownMenu userName={userName} className="test">
      <MenuItem text="Home" location="/home" />
      <MenuItem text="Edit Profile" location="/profile" />
      <MenuItem text="Change Password" location="/change-password" />
      <MenuItem text="Privacy Settings" location="/privacy-settings" />
      <MenuItem text="Delete Account" onClick={deleteAccount} />
      <MenuItem text="Logout" onClick={logout} />
    </DropdownMenu>
  );
};

export default SettingsMenu;
