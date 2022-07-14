import styled from "styled-components";
import { laptop, laptopSmall, mobile, tablet } from "../responsive";
import { GradientButton } from "./GradientButton";

export const Intro = () => {
  return (
    <Container>
      <Left>
        <h1>Next generation digital banking</h1>
        <p>
          Take your financial life online. Your easybank account will be a one-stop-shop for spending, saving,
          budgeting, investing, and much more.
        </p>
        <Button text="Request Invite" />
      </Left>
      <Right>
        <img
          src="./images/image-mockups.png"
          alt="Phone mockups
        "
        />
      </Right>
    </Container>
  );
};

const Container = styled.div`
  padding: 80px 0% 0 10%;
  display: flex;
  align-items: center;
  background-color: #fff;
  background-image: url("./images/bg-intro-desktop.svg");
  background-size: 70%;
  background-repeat: no-repeat;
  background-position: 150% 50%;
  ${tablet({
    flexDirection: "column-reverse",
    paddingRight: "10%",
    backgroundSize: "120%",
    backgroundPosition: " 50% -20%",
  })}
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 100px 20px;
  ${tablet({
    padding: "0px 0 50px 0",
    alignItems: "center",
  })}
  h1, p {
    width: 60%;
    margin: 30px 0;
    ${laptop({
      width: "70%",
    })}
    ${laptopSmall({
      width: "90%",
    })}
    ${tablet({
      width: "100%",
      textAlign: "center",
    })}
  }
  h1 {
    font-weight: 400;

    ${tablet({
      fontSize: "36px",
    })}
  }
  p {
    color: gray;
  }
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  img {
    width: 700px;
    margin-top: -30%;
    margin-right: -10%;
    position: absolute;

    ${laptop({
      marginTop: "-40%",
      width: "700px",
    })}
    ${laptopSmall({
      marginTop: "-50%",
      marginRight: "-20%",
      width: "500px",
    })}
    ${tablet({
      position: "static",
      margin: "-130px 0 0 0",
      padding: 0,
      width: "100%",
    })}
  }
`;

const Button = styled(GradientButton)``;
