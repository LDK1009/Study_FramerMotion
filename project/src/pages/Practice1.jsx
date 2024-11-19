import React, { useState } from "react";
import Input from "../components/practice1/Input";
import styled from "styled-components";
import { motion } from "motion/react";

const Practice1 = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [z, setZ] = useState(0);
  const [scale, setScale] = useState(1);
  const [scaleX, setScaleX] = useState(1);
  const [scaleY, setScaleY] = useState(1);
  const [rotate, setRotate] = useState(0);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [rotateZ, setRotateZ] = useState(0);
  const [skew, setSkew] = useState(0);
  const [skewX, setSkewX] = useState(0);
  const [skewY, setSkewY] = useState(0);
  const [transformPerspective, setTransformPerspective] = useState(0);

  return (
    <>
      <Container>
        <MotionBox animate={{ x, y, z, scale, scaleX, scaleY, rotate, rotateX, rotateY, rotateZ, skew, skewX, skewY, transformPerspective}} transition={{ type: "spring" }} />
        <div>
          <Input type={"range"} label={"x"} value={x} onChange={setX} min={-200} max={200} />
          <Input type={"range"} label={"y"} value={y} onChange={setY} min={-200} max={200} />
          <Input type={"range"} label={"z"} value={z} onChange={setZ} min={-200} max={200} />
          <Input type={"number"} label={"scale"} value={scale} onChange={setScale} min={-200} max={200} />
          <Input type={"number"} label={"scaleX"} value={scaleX} onChange={setScaleX} min={-200} max={200} />
          <Input type={"number"} label={"scaleY"} value={scaleY} onChange={setScaleY} min={-200} max={200} />
          <Input type={"range"} label={"rotate"} value={rotate} onChange={setRotate} min={-200} max={200} />
          <Input type={"range"} label={"rotateX"} value={rotateX} onChange={setRotateX} min={-200} max={200} />
          <Input type={"range"} label={"rotateY"} value={rotateY} onChange={setRotateY} min={-200} max={200} />
          <Input type={"range"} label={"rotateZ"} value={rotateZ} onChange={setRotateZ} min={-200} max={200} />
          <Input type={"range"} label={"skew"} value={skew} onChange={setSkew} min={-200} max={200} />
          <Input type={"range"} label={"skewX"} value={skewX} onChange={setSkewX} min={-200} max={200} />
          <Input type={"range"} label={"skewY"} value={skewY} onChange={setSkewY} min={-200} max={200} />
          <Input
            type={"range"}
            label={"transformPerspective"}
            value={transformPerspective}
            onChange={setTransformPerspective}
            min={-200}
            max={200}
          />
        </div>
      </Container>
    </>
  );
};

export default Practice1;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: space-evenly;
  align-items:center;
`;

const MotionBox = styled(motion.div)`
  width: 200px;
  height: 200px;
  border-radius: 15px;
  background-color: blue;
`;
