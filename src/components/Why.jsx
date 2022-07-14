import styled from "styled-components";
import { laptop, tablet } from "../responsive";

export const Why = () => {
  const info = [
    {
      id: 1,
      icon: "./images/icon-online.svg",
      title: "Online Banking",
      text: "Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.",
    },
    {
      id: 2,
      icon: "./images/icon-budgeting.svg",
      title: "Simple Budgeting",
      text: "See exactly where your money goes each month. Receive notifications when you're close yo hitting your limits.",
    },
    {
      id: 3,
      icon: "./images/icon-onboarding.svg",
      title: "Fast Onboarding",
      text: "We don't do breaches. Open your account in minutes online and start taking control of your finances right away.",
    },
    {
      id: 4,
      icon: "./images/icon-api.svg",
      title: "Open API",
      text: "Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier",
    },
  ];
  return (
    <Container>
      <Top>
        <h2>Why Choose Easybank?</h2>
        <p>We leverage Open Banking to turn your bank account into your financial hub.</p>
        <p>Control your finances like never before.</p>
      </Top>
      <Bottom>
        {info.map((e) => {
          return (
            <InfoCard key={e.title}>
              <img src={e.icon} alt={e.title} />
              <h3>{e.title}</h3>
              <p>{e.text}</p>
            </InfoCard>
          );
        })}
      </Bottom>
    </Container>
  );
};

const Container = styled.div`
  padding: 140px 10% 70px 10%;
  ${tablet({
    paddingTop: '70px'
  })}
`;
const Top = styled.div`
  h2 {
    font-weight: 400;
    font-size: 34px;
  }
  p {
    margin: 8px 0;
  }
  ${tablet({
    textAlign:" center"

  })}
`;
const Bottom = styled.div`
  margin-top: 100px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  ${laptop({
    gridTemplateColumns: "repeat(2, 1fr)",
  })}
  ${tablet({
    gridTemplateColumns: "1fr",
  })}
  gap: 30px;
`;
const InfoCard = styled.div`
  max-width: 360px;
  margin: 0 auto;
  ${tablet({
    display: "flex",
    jusifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  })}
  h3 {
    font-weight: 400;
    margin: 30px 0;
  }
  h3,
  p {
    ${tablet({
      textAlign: "center",
    })}
  }
`;
