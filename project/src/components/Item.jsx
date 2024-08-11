import { motion } from "framer-motion";
import React, { useState } from "react";
import styled from "styled-components";

const Item = () => {
  // 원 클릭 여부 state
  const [isClick, setIsClick] = useState(null);

  return (
    // 아이템
    <Container>
      {/** 
       * 아이템 우측 하단 원
       * 클릭 시 isClick 상태가 변경된다.
       * animate는 isClick이 true일 경우 애니메이션 객체를 전달하도록 설정되어 클릭 시 아래 애니메이션이 진행된다.
      */}
      <Circle
        onClick={() => setIsClick(true)}
        animate={isClick && { 
            width: "100dvw",
             height: "100dvh",
              top: "0px",
               left: "0px",
                borderRadius:["100%", "20px", "0px"] // 키프레임
            }}
        transition={{ 
            duration: 0.8,
             ease: "easeInOut",
             times: [0, 0.2,  1],  // 각 keyframe의 타이밍

            }}
      >
        {/**
         * 페이지 전환 후 보여줄 컨텐츠
         * 위와 마찬가지로 isClick이 true로 변경되면 애니메이션(컨텐츠가 서서히 나타남)이 진행된다.
         */}
        <InnerContent
          initial={{ opacity: 0, fontSize:"60px" }}
          animate={isClick && { opacity: 1, fontSize:"100px" }}
          transition={{ duration: 0.32, ease: "easeInOut", delay:0.48 }}
        >
          Hello World!
        </InnerContent>
      </Circle>
    </Container>
  );
};

// 아이템 컨테이너
const Container = styled.div`
  width: 200px;
  height: 50px;
  background-color: black;
  border-radius: 20px;
  position: relative;
`;

// 원
const Circle = styled(motion.div)`
  width: 30px;
  height: 30px;
  border-radius: 100%;
  background-color: #ebc60e;
  position: absolute;
  bottom: -15px;
  right: -15px;
`;

// 원 내부 컨텐츠(페이지 전환 후 보여줄 컨텐츠)
const InnerContent = styled(motion.div)`
  font-weight:bold;
  color:white;
  width:100%;
  height:100%;
  display:flex;
  justify-content:center;
  align-items:center;
`;
export default Item;
