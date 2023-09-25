import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  max-width: 574.61px;
  height: 46.46px;

  position: absolute;
  bottom: -40px;
  left: 40px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: 4.88px 9.54px;

  border-radius: 9px;
  border: 1px solid var(--gray-200);
  background-color: var(--color-white);
  box-shadow: 1px 1px 3px 0px var(--color-black);

  & > p {
    width: 25px;
    height: 25px;

    cursor: pointer;
    border-radius: 50%;

    margin-right: 5px;
  }
`;

export { Container };
