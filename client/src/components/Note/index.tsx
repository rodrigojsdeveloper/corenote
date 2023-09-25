import star from "../../assets/star.svg";
import { Container } from "./style";
import x from "../../assets/x.svg";
import { useState } from "react";
import Color from "../Color";

const Note = () => {
  const [modal, setModal] = useState<boolean>(false);

  const [color, setColor] = useState<string>("");

  return (
    <Container color={color}>
      <div className="headerNote">
        <h2>titulo</h2>

        <img src={star} alt="Estrela" />
      </div>

      <div className="containerNote">
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of
          the printing and typesetting industry. Lorem Ipsum has been the
          industry's standard dummy text ever since the 1500s, when an unknown
          printer took a galley of type and scrambled it to make a type specimen
          book. It has survived not only five centuries, but also the leap into
          electronic typesetting, remaining essentially unchanged. It was
          popularised in the 1960s with the release of Letraset sheets
          containing Lorem Ipsum passages, and more recently with desktop
          publishing software like Aldus PageMaker including versions of Lorem
          Ipsum. Lorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s, when an unknown printer took a galley
          of type and scrambled it to make a type specimen book. It has survived
          not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in
          the 1960s with the release of Letraset sheets containing Lorem Ipsum
          passages, and more recently with desktop publishing software like
          Aldus PageMaker including versions of Lorem Ipsum.
        </p>

        <div className="contentNote">
          <div className="divIcons">
            <div className="divSvg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
              >
                <path
                  d="M10.5498 6.16667L11.4376 7.05444L2.86203 15.6111H1.99314V14.7422L10.5498 6.16667ZM13.9498 0.5C13.7137 0.5 13.4681 0.594444 13.2887 0.773889L11.5604 2.50222L15.102 6.04389L16.8304 4.31556C17.1987 3.94722 17.1987 3.33333 16.8304 2.98389L14.6204 0.773889C14.4315 0.585 14.1954 0.5 13.9498 0.5ZM10.5498 3.51278L0.104248 13.9583V17.5H3.64591L14.0915 7.05444L10.5498 3.51278Z"
                  fill="#51646E"
                />
              </svg>
            </div>

            <div className="divSvg" onClick={() => setModal(true)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="19"
                height="18"
                viewBox="0 0 19 18"
                fill="none"
              >
                <path
                  d="M16.1011 11.5468C16.1011 11.5468 14.1011 13.7168 14.1011 15.0468C14.1011 15.5772 14.3118 16.086 14.6869 16.461C15.062 16.8361 15.5707 17.0468 16.1011 17.0468C16.6316 17.0468 17.1403 16.8361 17.5153 16.461C17.8904 16.086 18.1011 15.5772 18.1011 15.0468C18.1011 13.7168 16.1011 11.5468 16.1011 11.5468ZM2.31113 10.0468L7.10113 5.25681L11.8911 10.0468M13.6611 8.98681L4.72113 0.046814L3.31113 1.45681L5.69113 3.83681L0.541133 8.98681C-0.0488672 9.54681 -0.0488672 10.5168 0.541133 11.1068L6.04113 16.6068C6.33113 16.8968 6.72113 17.0468 7.10113 17.0468C7.48113 17.0468 7.87113 16.8968 8.16113 16.6068L13.6611 11.1068C14.2511 10.5168 14.2511 9.54681 13.6611 8.98681Z"
                  fill="#51646E"
                />
                <path
                  d="M7.17009 15.0439L2.34009 10H11.9075L7.17009 15.0439Z"
                  fill="#FFA000"
                />
              </svg>
            </div>

            {modal ? <Color setColor={setColor} setModal={setModal} /> : null}
          </div>

          <img src={x} alt="Fechar" />
        </div>
      </div>
    </Container>
  );
};

export default Note;
