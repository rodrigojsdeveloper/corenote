import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  max-width: 390px;
  height: 437.59px;

  border-radius: 25px;
  box-shadow: 2px 2px 3px 0px var(--color-black);

  .headerNote {
    width: 100%;
    height: 47px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    padding: 15px 23px;
    border-bottom: 1px solid var(--color-white);

    & > h2 {
      font-weight: 700;
      font-size: 14.2px;
      line-height: 17.19px;

      color: var(--gray-800);
    }
  }

  .containerNote {
    padding: 10px 23px;

    & > p {
      height: 340px;

      font-weight: 400;
      font-size: 13px;
      line-height: 15.73px;
      color: var(--gray-800);

      overflow-y: auto;
    }

    .contentNote {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;

      padding-top: 10px;

      .divIcons {
        width: 100%;
        max-width: 50px;

        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
      }
    }
  }
`;

export { Container };
