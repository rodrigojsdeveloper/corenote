import { Container } from "./style";

interface IColor {
  setColor: React.Dispatch<React.SetStateAction<string>>;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const Color = ({ setColor, setModal }: IColor) => {
  return (
    <Container>
      <p
        style={{ backgroundColor: "#BAE2FF" }}
        onClick={() => {
          setColor("#BAE2FF");
          setModal(false);
        }}
      ></p>
      <p
        style={{ backgroundColor: "#B9FFDD" }}
        onClick={() => {
          setColor("#B9FFDD");
          setModal(false);
        }}
      ></p>
      <p
        style={{ backgroundColor: "#FFE8AC" }}
        onClick={() => {
          setColor("#FFE8AC");
          setModal(false);
        }}
      ></p>

      <p
        style={{ backgroundColor: "#FFCAB9" }}
        onClick={() => {
          setColor("#FFCAB9");
          setModal(false);
        }}
      ></p>
      <p
        style={{ backgroundColor: "#F99494" }}
        onClick={() => {
          setColor("#F99494");
          setModal(false);
        }}
      ></p>
      <p
        style={{ backgroundColor: "#9DD6FF" }}
        onClick={() => {
          setColor("#9DD6FF");
          setModal(false);
        }}
      ></p>

      <p
        style={{ backgroundColor: "#ECA1FF" }}
        onClick={() => {
          setColor("#ECA1FF");
          setModal(false);
        }}
      ></p>
      <p
        style={{ backgroundColor: "#DAFF8B" }}
        onClick={() => {
          setColor("#DAFF8B");
          setModal(false);
        }}
      ></p>
      <p
        style={{ backgroundColor: "#FFA285" }}
        onClick={() => {
          setColor("#FFA285");
          setModal(false);
        }}
      ></p>

      <p
        style={{ backgroundColor: "#CDCDCD" }}
        onClick={() => {
          setColor("#CDCDCD");
          setModal(false);
        }}
      ></p>
      <p
        style={{ backgroundColor: "#979797" }}
        onClick={() => {
          setColor("#979797");
          setModal(false);
        }}
      ></p>
      <p
        style={{ backgroundColor: "#A99A7C" }}
        onClick={() => {
          setColor("#A99A7C");
          setModal(false);
        }}
      ></p>
    </Container>
  );
};

export default Color;
