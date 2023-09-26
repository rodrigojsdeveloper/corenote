import { useState, useEffect, useRef, useContext } from "react";
import { NoteContext } from "../../contexts/note.context";
import star_yellow from "../../assets/star_yellow.svg";
import { INoteProps } from "../../interfaces";
import { useForm } from "react-hook-form";
import star from "../../assets/star.svg";
import { Container } from "./style";

const CreateNote = () => {
  const { handleCreateNote } = useContext(NoteContext);

  const [isFavorite, setIsFavorite] = useState<boolean>(false);

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

  const { register, handleSubmit, setValue, reset } = useForm();

  const onSubmitFunction = (data: Partial<INoteProps>) => {
    handleCreateNote(isFavorite, data);
    reset();
    setShowMore(false);
    setIsFavorite(false);
  };

  return (
    <Container
      onSubmit={handleSubmit(onSubmitFunction)}
      currentHeight={showMore ? "open" : "closed"}
    >
      <div className="header">
        <input placeholder="Título" {...register("title")} />

        {isFavorite ? (
          <img
            src={star_yellow}
            alt="Estrela Amarela"
            onClick={() => setIsFavorite(false)}
          />
        ) : (
          <img src={star} alt="Estrela" onClick={() => setIsFavorite(true)} />
        )}
      </div>

      <div className="divCreateNote">
        <textarea
          ref={textareaRef}
          placeholder="Criar nota..."
          onClick={handleTextareaClick}
          onChange={(e) => {
            setValue("description", e.target.value);
          }}
        />

        {showMore ? <button type="submit">Criar</button> : null}
      </div>
    </Container>
  );
};

export default CreateNote;
