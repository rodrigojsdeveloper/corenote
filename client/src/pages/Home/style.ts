import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  max-width: 1440px;
  height: 100vh;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin: 0 auto;

  & > .home-header {
    width: 100%;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    padding: 15px;

    & > .home-container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: start;

      .home-content {
        width: 100%;
        max-width: 500px;
        height: 100px;

        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

        border-radius: 3px;
        border: 1.5px solid var(--gray-200);

        padding: 20px;
        margin: 20px 0;

        & > figure {
          width: 50px;
          height: 50px;

          display: flex;
          justify-content: center;
          align-items: center;

          padding: 10px;

          border-radius: 3px;
          background-color: var(--hover-svg);
        }

        & > .home-text {
          font-weight: 600;
          font-size: 12px;
          line-height: 17px;

          padding-left: 15px;
          color: grey;
        }
      }
    }

    .home-button {
      width: 180px;
      height: 45px;

      display: flex;
      justify-content: center;
      align-items: center;

      border-radius: 3px;
      border: 2px solid #ffa000;
      background-color: var(--transparent);

      font-weight: 600;
      transition: 0.5s;

      color: #ffa000;

      &:hover {
        background-color: rgba(255, 160, 0, 0.1);
      }
    }

    & > img {
      height: 700px;
    }
  }

  @media (max-width: 1200px) {
    .home-header {
      justify-content: flex-start;

      & > img {
        display: none;
      }
    }
  }
`;

export { Container };
