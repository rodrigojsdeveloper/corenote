import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  max-width: 1300px;

  display: flex;
  flex-direction: column;

  margin: 0 auto;

  & > h2 {
    font-weight: 400;
    font-size: 12px;
    line-height: 14.52px;
    color: var(--gray-900);

    margin: 0 0 6.89px 20px;
  }

  & > menu {
    width: 100%;

    display: grid;
    grid-template-columns: repeat(3, minmax(0px, 390px));
    grid-gap: 34.61px;

    margin: 0 auto;

    @media (max-width: 768px) {
      grid-template-columns: repeat(2, minmax(0px, 390px));
      grid-gap: 25px;
    }

    @media (max-width: 500px) {
      grid-template-columns: repeat(1, minmax(0px, 390px));
    }
  }
`;

export { Container };
