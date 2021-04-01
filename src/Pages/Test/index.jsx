import Button from "../../Components/Button";
import { useState } from "react";

// import { Frame, AnimatePresence } from "framer";
import Card from "../../Components/Card";

const Test = () => {
  const [show, setShow] = useState(true);
  return (
    <div>
      <button onClick={() => setShow(!show)}>Esconder/Mostrar</button>
      <br />
      <br />
      {/* <AnimatePresence>
        {show && (
          <Frame
          // radius={10}
          // x={10}
          // y={50}
          // z={500}
          // rotate={90}
          // scale={1.2}
          // skew={3}
          // shadow="10px 5px 5px black"
          // background={{ alpha: 15, angle: 50, start: "#09F", end: "#F09" }}
          // // center
          // size={500}
          // animate={{ scale: 0.5 }}
          // transition={{ ease: "easeOut" }}
          // // style={{ width: "200px", height: "200px", background: "red" }}
          ></Frame>
        )}
      </AnimatePresence> */}
      <br />
      <br />
      <Button />
      <Card />
    </div>
  );
};

export default Test;
