import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.header`
  display: flex;
  background: ${(props) => props.theme.colors.primary};
  width: 100vw;
  min-width: 600px;
  color: #ffffff;
  align-items: center;
  justify-content: space-between;
  padding: 1em 3em;
  @media print {
    display: none;
  }
  /* overflow-x: hidden; */
`;

export const Logo = styled.div`
  display: flex;
  width: 30%;
  & img {
    width: 40em;
  }
  & h1 {
    margin-left: 0.2em;
    font-size: 18em;
  }
`;

export const MenuIconOpen = styled(Link)`
  display: flex;
  justify-content: start;
  font-size: 3rem;
  margin-left: 2rem;
  padding-top: 0.5em;
  color: #ffffff;
  width: 80%;
`;

export const MenuIconClose = styled(Link)`
  display: flex;
  justify-content: end;
  font-size: 1.5rem;
  margin-top: 0.75rem;
  margin-right: 1rem;
  color: #ffffff;
`;

export const SidebarMenu = styled.div<{ close: boolean }>`
  width: 200px;
  height: 100vh;
  background-color: ${(props) => props.theme.colors.primary};
  position: fixed;
  top: 0;
  left: ${({ close }) => (close ? "0" : "-100%")};
  transition: 1s;
  -webkit-transition: 1s;
  z-index: 1;
`;

export const MenuItems = styled.li`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: start;
  width: 100%;
  height: 65px;
  padding: 1rem 0 1.25rem;
`;

export const MenuItemLinks = styled(Link)`
  display: flex;
  align-items: center;
  padding: 0 2rem;
  font-size: 20px;
  text-decoration: none;
  color: #ffffff;
  &:hover {
    background-color: #ffffff;
    color: ${(props) => props.theme.colors.secondary};
    width: 100%;
    height: 45px;
    text-align: center;
    border-radius: 5px;
    margin: 0 2rem;
    transition: all 0.6s ease;
    -webkit-transition: all 0.6s ease;
    transition: all 0.6s ease;
  }
`;

export const LogoutLink = styled.a`
  display: flex;
  align-items: center;
  padding: 0 2rem;
  font-size: 20px;
  text-decoration: none;
  color: #ffffff;
  &:hover {
    cursor: pointer;
    background-color: #ffffff;
    color: ${(props) => props.theme.colors.secondary};
    width: 100%;
    height: 45px;
    text-align: center;
    border-radius: 5px;
    margin: 0 2rem;
    transition: all 0.6s ease;
    -webkit-transition: all 0.6s ease;
    transition: all 0.6s ease;
  }
`;
