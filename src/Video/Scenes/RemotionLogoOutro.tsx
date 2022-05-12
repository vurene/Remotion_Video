import React from "react";
import { Audio, Series, staticFile, AbsoluteFill, Img, Easing, useCurrentFrame, useVideoConfig, spring, interpolate, Sequence } from 'remotion'; 
import styled from "styled-components";
// Picture Import
import  Logo  from "../../assets/logotitle.png";



//_______Styled-Components____________


const Text = styled.span`
/* height: 3100px; */
color: white; 
font-family: Arial, Helvetica, sans-serif;
  font-size: 70px;
  font-weight: 700;
  line-height: 1;
  white-space: pre;
  z-index: 3;
  transform: translateY(-550px);
`


const Container = styled.div`
transform:scale(0.2); 
  
`;



export const RemotionLogoOutro: React.FC = () => {

  const { fps } = useVideoConfig();
  const frame = useCurrentFrame();


  const enterLogo = spring({ 
    fps,
    frame: frame,
    from: 0,
    to: 2,
    config: {
      damping: 200,
    },
  });

  return (
    <AbsoluteFill
      style={{
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#15181d",
        backdropFilter: "blur(" + 20 * enterLogo + "px)",
      }}
    >
<Container>/



      <Img
        style={{
          height: 1500,
          transform: `scale(${enterLogo})`,
        }}
        src={Logo}
      />

</Container>


    </AbsoluteFill>
  );
};
