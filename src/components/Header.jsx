import styled from "styled-components";
import { GradientButton } from "./GradientButton";
import { laptop, tablet } from "../responsive";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
export const Header = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  return (
    <Container>
      <Logo>
        {" "}
        <img src="./images/logo.svg" alt="Easybank Logo" />{" "}
      </Logo>
      <Menu>
        <Nav>
          <Ul menuIsOpen={menuIsOpen}>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Blog</li>
            <li>Careers</li>
          </Ul>
        </Nav>
        <div className="menuRight">
          <Button text="Request invite" />
          <FontAwesomeIcon onClick={() => setMenuIsOpen(!menuIsOpen)} icon={menuIsOpen ? faXmark : faBars} />
        </div>
      </Menu>
    </Container>
  );
};

const Container = styled.div`
  background-color: #fff;
  width: 100%;
  box-sizing: border-box;
  padding: 0px 10%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  z-index: 10;
`;
const Ul = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  color: gray;

  ${tablet({
    display: (props) => (props.menuIsOpen ? "flex" : "none"),
    position: "absolute",
    width: "100%",
    boxSizing: "border-box",
    top: "70px",
    left: "0",
    flexDirection: "column",
    alignItems: "center",
    boxShadow: "1px 12px 7px -10px rgba(0,0,0,0.15)"

  })}
  li {
    padding: 20px;
    margin: 0;
    transition: 0.3s;
    background-color: #fff;
    border-bottom: 3px solid rgba(0, 0, 0, 0);
    ${laptop({
      fontSize: "14px",
    })}
    ${tablet({
      width: "100%",
      textAlign: "center"
    })}

    &:hover {
      transition: 0.3s;
      border-bottom: 3px solid var(--lime-green);
      cursor: pointer;
      box-sizing: border-box;
      color: #000;
    }
  }
`;
const Logo = styled.div`
  flex: 1;
  img {
    ${laptop({
      flex: 0,
      width: "100px",
    })}
  }
`;
const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 2;
  ${laptop({
    flex: "4",
  })}
  ${tablet({
    padding: "20px",
  })}
  .menuRight {
    button {
      ${tablet({
        display: "none",
      })}
    }
    svg {
      cursor: pointer;
      font-size: 22px;
      padding: 5px;
      transition: 0.3s;
      display: none;
      ${laptop({
        display: "none",
      })}
      ${tablet({
        display: "block",
      })}
      &:hover {
        transition: 0.3s;
        color: var(--lime-green);
      }
    }
  }
`;
const Nav = styled.nav``;
const Button = styled(GradientButton)``;
