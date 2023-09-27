import { IColor } from "../../interfaces";
import { Container } from "./style";

const colorOptions1 = [
  "#BAE2FF",
  "#B9FFDD",
  "#FFE8AC",
  "#FFCAB9",
  "#F99494",
  "#9DD6FF",
];

const colorOptions2 = [
  "#ECA1FF",
  "#DAFF8B",
  "#FFA285",
  "#CDCDCD",
  "#979797",
  "#A99A7C",
];

const Color = ({ updateColor, setModal }: IColor) => {
  const handleColorClick = (color: string) => {
    updateColor(color);
    setModal(false);
  };

  return (
    <Container>
      <div>
        {colorOptions1.map((color, index) => (
          <p
            key={index}
            style={{ backgroundColor: color }}
            onClick={() => handleColorClick(color)}
          ></p>
        ))}
      </div>

      <div>
        {colorOptions2.map((color, index) => (
          <p
            key={index}
            style={{ backgroundColor: color }}
            onClick={() => handleColorClick(color)}
          ></p>
        ))}
      </div>
    </Container>
  );
};

export default Color;
