import styled from "styled-components";

const Container = styled.header`
  width: 100%;
  height: 57px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: var(--color-white);
  box-shadow: 0px 1px 7px 0px var(--gray-700);

  padding: 10px 25.58px;

  & > .container {
    width: 100%;
    max-width: 1417.11px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    margin: 0 auto;

    .content {
      width: 100%;
      max-width: 685.48px;

      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;

      .logo {
        width: 100%;
        max-width: 127.62px;

        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

        & > h1 {
          font-weight: 400;
          font-size: 14px;
          line-height: 16.94px;

          color: var(--gray-400);
        }
      }
    }
  }
`;

export { Container };
