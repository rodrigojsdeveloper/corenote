import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  max-width: 1300px;

  display: flex;
  flex-direction: column;

  margin: 0 auto 30.06px auto;

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
    grid-template-columns: repeat(auto-fill, minmax(390px, 1fr));
    gap: 35px;

    @media (max-width: 840px) {
      grid-template-columns: repeat(auto-fill, minmax(0, 390px));

      justify-content: center;
    }
  }
`;

export { Container };
