import { sculptureList } from "./data.js";
import { Gallery } from "./Gallery.jsx";

const App = () => {
  let index = 0;

  function handleClick() {
    index = index + 1;
  }

  return (
    <>
      <Gallery onClick={handleClick} sculpture={sculptureList[index]} />
    </>
  );
};
