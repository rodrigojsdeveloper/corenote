import { IColor } from "../../interfaces";
import { Container } from "./style";

const Color = ({ updateColor, setModal }: IColor) => {
  return (
    <Container>
      <div>
        <p
          style={{ backgroundColor: "#BAE2FF" }}
          onClick={() => {
            updateColor("#BAE2FF");
            setModal(false);
          }}
        ></p>
        <p
          style={{ backgroundColor: "#B9FFDD" }}
          onClick={() => {
            updateColor("#B9FFDD");
            setModal(false);
          }}
        ></p>
        <p
          style={{ backgroundColor: "#FFE8AC" }}
          onClick={() => {
            updateColor("#FFE8AC");
            setModal(false);
          }}
        ></p>

        <p
          style={{ backgroundColor: "#FFCAB9" }}
          onClick={() => {
            updateColor("#FFCAB9");
            setModal(false);
          }}
        ></p>
        <p
          style={{ backgroundColor: "#F99494" }}
          onClick={() => {
            updateColor("#F99494");
            setModal(false);
          }}
        ></p>
        <p
          style={{ backgroundColor: "#9DD6FF" }}
          onClick={() => {
            updateColor("#9DD6FF");
            setModal(false);
          }}
        ></p>
      </div>

      <div>
        <p
          style={{ backgroundColor: "#ECA1FF" }}
          onClick={() => {
            updateColor("#ECA1FF");
            setModal(false);
          }}
        ></p>
        <p
          style={{ backgroundColor: "#DAFF8B" }}
          onClick={() => {
            updateColor("#DAFF8B");
            setModal(false);
          }}
        ></p>
        <p
          style={{ backgroundColor: "#FFA285" }}
          onClick={() => {
            updateColor("#FFA285");
            setModal(false);
          }}
        ></p>

        <p
          style={{ backgroundColor: "#CDCDCD" }}
          onClick={() => {
            updateColor("#CDCDCD");
            setModal(false);
          }}
        ></p>
        <p
          style={{ backgroundColor: "#979797" }}
          onClick={() => {
            updateColor("#979797");
            setModal(false);
          }}
        ></p>
        <p
          style={{ backgroundColor: "#A99A7C" }}
          onClick={() => {
            updateColor("#A99A7C");
            setModal(false);
          }}
        ></p>
      </div>
    </Container>
  );
};

export default Color;
