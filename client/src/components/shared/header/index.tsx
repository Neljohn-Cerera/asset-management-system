import { useContext, useState } from "react";
import Switch from "react-switch";
import { ThemeContext } from "styled-components";
import { shade } from "polished";
import {
  HeaderContainer,
  MenuIconOpen,
  SidebarMenu,
  MenuIconClose,
  MenuItems,
  MenuItemLinks,
  Logo,
  LogoutLink,
} from "./styles";
import * as FaIcons from "react-icons/fa";
import logo from "../../../assets/logo.png";
import { SidebarData } from "../../sidebarData";
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import { postLogout } from "../../../api/postData";

type Props = {
  toggleTheme(): void;
};

const Header: React.FC<Props> = ({ toggleTheme }) => {
  const cookies = new Cookies();
  const { colors, title } = useContext(ThemeContext);
  const [close, setClose] = useState(false);
  const showSidebar = () => setClose(!close);
  const navigate = useNavigate();

  const handleLogOut = async () => {
    const logout = window.confirm("Do you want to logout?");
    if (logout) {
      const { data } = await postLogout();
      if (data) {
        window.alert("Logout success");
        cookies.remove("personnel");
        navigate("/");
      } else {
        window.alert("Logout failed");
      }
    }
  };

  return (
    <HeaderContainer>
      <Logo>
        <img src={logo} alt="logo" />
        <h1>SPCT</h1>
        <MenuIconOpen to="#" onClick={showSidebar}>
          <FaIcons.FaBars />
        </MenuIconOpen>
      </Logo>
      <SidebarMenu close={close}>
        <MenuIconClose to="#" onClick={showSidebar}>
          <FaIcons.FaTimes />
        </MenuIconClose>
        {SidebarData.map((item, index) => {
          if (item.title === "Logout") {
            return (
              <MenuItems key={index}>
                <LogoutLink onClick={handleLogOut}>
                  {item.icon}
                  <span style={{ marginLeft: "16px" }}>{item.title}</span>
                </LogoutLink>
              </MenuItems>
            );
          }

          return (
            <MenuItems key={index}>
              <MenuItemLinks to={item.path}>
                {item.icon}
                <span style={{ marginLeft: "16px" }}>{item.title}</span>
              </MenuItemLinks>
            </MenuItems>
          );
        })}
      </SidebarMenu>

      <Switch
        onChange={toggleTheme}
        checked={title === "dark"}
        checkedIcon={false}
        uncheckedIcon={false}
        height={10}
        width={40}
        handleDiameter={20}
        offColor={shade(0.15, colors.primary)}
        onColor={colors.secondary}
      />
    </HeaderContainer>
  );
};

export default Header;
