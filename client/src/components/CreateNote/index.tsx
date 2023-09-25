import { useState, useEffect, useRef } from "react";
import star from "../../assets/star.svg";
import { Container } from "./style";

const CreateNote = () => {
  const [showMore, setShowMore] = useState<boolean>(false);

  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  const handleTextareaClick = () => {
    if (textareaRef.current && !showMore) {
      setShowMore(true);
    }
  };

  useEffect(() => {
    const handleDocumentClick = (e: MouseEvent) => {
      if (
        textareaRef.current &&
        !textareaRef.current.contains(e.target as Node) &&
        textareaRef.current.value.trim() === ""
      ) {
        setShowMore(false);
      }
    };

    document.addEventListener("click", handleDocumentClick);

    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);

  return (
    <Container currentHeight={showMore ? "open" : "closed"}>
      <div className="header">
        <input placeholder="Título" />
        <img src={star} alt="Estrela" />
      </div>

      <div className="divCreateNote">
        <textarea
          ref={textareaRef}
          placeholder="Criar nota..."
          onClick={handleTextareaClick}
        />

        {showMore ? <button>Criar</button> : null}
      </div>
    </Container>
  );
};

export default CreateNote;
