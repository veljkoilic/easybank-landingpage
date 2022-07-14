import styled from "styled-components";
import { tablet } from "../responsive";

export const LatestArticles = () => {
  const articles = [
    {
      id: 1,
      img: "./images/image-currency.jpg",
      author: "Claire Robinson",
      title: "Receive money in any currency with no fees",
      text: "The world is getting smaller and we're becoming more mobile. So why should you be forced to only receive money in a single...",
    },
    {
      id: 2,
      img: "./images/image-restaurant.jpg",
      author: "Wilson Hutton",
      title: "Treat yourself without worrying about money",
      text: "Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. This means you...",
    },
    {
      id: 3,
      img: "./images/image-plane.jpg",
      author: "Wilson Hutton",
      title: "Take your Easybank card wherever you go",
      text: "We want you to enjoy your travels. This is why we don't charge any fees on purchases while you're abroad. We'll even show you...",
    },
    {
      id: 4,
      img: "./images/image-confetti.jpg",
      author: "Claier Robinson",
      title: "Our invite-only Beta Accounts are now live!",
      text: "After a lot of hard work by the whole team, we're excited to launch our closed beta. It's easy to requestan invite through the site...",
    },
  ];
  return (
    <Container>
      <h3 className="latest">Latest Articles</h3>
      <Articles>
        {articles.map((article) => {
          return (
            <Article key={article.id}>
              <img src={article.img} alt={article.title} />
              <div className="bottom">
                <span>By {article.author}</span>
                <h3>{article.title}</h3>
                <p>{article.text}</p>
              </div>
            </Article>
          );
        })}
      </Articles>
    </Container>
  );
};

const Container = styled.div`
  background-color: var(--very-light-gray);
  padding: 50px 10% 100px 10%;
  width: 100%;
  box-sizing: border-box;
  h3 {
    font-size: 32px;
    font-weight: 400;
    &.latest {
      ${tablet({
        textAlign: "center",
      })}
    }
  }
`;
const Articles = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
`;
const Article = styled.div`
  width: 100%;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  box-sizing: content-box;

  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }
  .bottom {
    padding: 25px;
  }
  span {
    color: gray;
    padding: 10px 0;
    font-size: 12px;
  }
  h3 {
    margin: 10px 0;
    font-size: 18px;
  }
  p {
    font-size: 14px;
  }
`;
