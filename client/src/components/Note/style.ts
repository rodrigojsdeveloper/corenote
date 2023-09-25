import styled, { css } from "styled-components";

interface IColorStyle {
  color: string;
}

const Container = styled.div<IColorStyle>`
  width: 100%;
  max-width: 390px;
  height: 437.59px;

  border-radius: 25px;
  background-color: var(--color-white);
  box-shadow: 2px 2px 3px 0px var(--color-black);

  ${({ color }) => {
    switch (color) {
      case "#BAE2FF":
        return css`
          background-color: #bae2ff;
        `;

      case "#B9FFDD":
        return css`
          background-color: #b9ffdd;
        `;

      case "#FFE8AC":
        return css`
          background-color: #ffe8ac;
        `;

      case "#FFCAB9":
        return css`
          background-color: #ffcab9;
        `;

      case "#F99494":
        return css`
          background-color: #f99494;
        `;

      case "#9DD6FF":
        return css`
          background-color: #9dd6ff;
        `;

      case "#ECA1FF":
        return css`
          background-color: #eca1ff;
        `;

      case "#DAFF8B":
        return css`
          background-color: #daff8b;
        `;

      case "#FFA285":
        return css`
          background-color: #ffa285;
        `;

      case "#CDCDCD":
        return css`
          background-color: #cdcdcd;
        `;

      case "#979797":
        return css`
          background-color: #979797;
        `;

      case "#A99A7C":
        return css`
          background-color: #a99a7c;
        `;

      default:
        return "";
    }
  }}

  .headerNote {
    width: 100%;
    height: 47px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    padding: 15px 23px;
    border-bottom: 1px solid var(--color-white);

    & > h3 {
      font-weight: 700;
      font-size: 14.2px;
      line-height: 17.19px;

      color: var(--gray-800);
    }
  }

  .containerNote {
    padding: 10px 23px;

    position: relative;

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

      padding-top: 5px;

      .divIcons {
        width: 100%;
        max-width: 65px;

        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

        & > .divSvg {
          width: 30px;
          height: 30px;

          display: flex;
          justify-content: center;
          align-items: center;

          cursor: pointer;
          border-radius: 50%;

          &:hover {
            background-color: var(--hover-svg);
          }
        }
      }
    }
  }
`;

export { Container };
