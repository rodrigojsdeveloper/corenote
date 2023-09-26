import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;

  padding: 130px 15px 15px 15px;

  & > .not-found-container {
    width: 100%;
    max-width: 800px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    & > .not-found-content {
      & > .not-found-title {
        padding: 30px 0;
      }
      & > .not-found-info {
        color: var(--gray-500);
        padding-top: 8px;
      }
    }
  }
`;

export { Container };
