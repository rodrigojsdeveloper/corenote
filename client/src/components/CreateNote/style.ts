import { ICreateNoteStyle } from "../../interfaces";
import styled, { css } from "styled-components";

const Container = styled.form<ICreateNoteStyle>`
  width: 100%;
  max-width: 530.52px;

  border: 1px solid var(--gray-200);
  border-radius: var(--border-radius);
  background-color: var(--color-white);
  box-shadow: 1px 1px 3px 0px var(--color-black);

  margin: 24.82px auto 39.27px auto;

  ${({ currentHeight }) => {
    switch (currentHeight) {
      case "closed":
        return css`
          height: 103.36px;
        `;

      case "open":
        return css`
          height: 148px;

          .divCreateNote {
            height: 103px;

            textarea {
              height: 75px;
            }
          }
        `;

      default:
        return false;
    }
  }}

  .header {
    width: 100%;
    height: 40px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    border-bottom: 1px solid var(--gray-200);

    padding: 13px 21px;

    & > input {
      width: 100%;

      font-weight: 700;
      font-size: 14.2px;
      line-height: 17.19px;

      margin-right: 21px;
      background-color: var(--transparent);

      &::placeholder {
        color: var(--gray-600);
      }

      &:focus::placeholder {
        color: var(--transparent);
      }
    }

    & > img {
      cursor: pointer;
    }
  }

  .divCreateNote {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;

    padding: 13px 21px;

    textarea {
      width: 100%;
      max-width: 437px;

      font-weight: 400;
      font-size: 13px;
      line-height: 15.73px;

      &::placeholder {
        color: var(--gray-300);
      }

      &:focus::placeholder {
        color: var(--transparent);
      }
    }

    button {
      width: 50px;
      height: 30px;

      border: 2px solid var(--gray-200);
      border-radius: var(--border-radius);
      background-color: var(--transparent);

      font-weight: 400;
      font-size: 12px;
      line-height: 14px;
      color: var(--gray-300);

      &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
      }
    }
  }
`;

export { Container };
