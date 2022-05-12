import styled from 'styled-components';
import { Audio, Series, staticFile, AbsoluteFill, Img, Easing, useCurrentFrame, useVideoConfig, spring, interpolate, Sequence } from 'remotion'; 
import Lgo from '../../assets/logotitle.png'
import { ABSO_FILL } from '../Styled-Components/AbsoluteFill';
import { TEXT } from '../Styled-Components/Text';
import { TEXT2 } from '../Styled-Components/Text2';
import { TEXT_B } from '../Styled-Components/TextBlue';




//_______Styled-Components____________

const Container = styled(ABSO_FILL)`

`;

const Text = styled(TEXT)`

margin: 40px;
margin-left: 80px;
transform: translateY(-10px);
`;

const Text2 = styled(TEXT2)`

margin-bottom: 5px;

`;

const TextBlue = styled(TEXT_B)`
	
`;


export const ShowcaseAssets: React.FC = () => {

const frame = useCurrentFrame();
const Fadeout = interpolate(frame, [150, 170],[ 1,0 ],
		{extrapolateLeft: 'clamp', extrapolateRight:'clamp'})
		const FadeIn = interpolate(frame, [170, 230],[ 0,1 ],
			{extrapolateLeft: 'clamp', extrapolateRight:'clamp'})	









	return (
		<Container>
	
			<br />
			<br />
			<Img src={Lgo} style={{ transform: `translate(0px,150px) scale(0.5`}}/>
			
					<Text style={{ 
												opacity: Fadeout,
												transform:`translateX(-0px)translateY(-220px)` 
												}}>
						In Remotion we create Videos programmatically using
        <br/>
			  <br/>
		  	<Text2> 
        
        <TextBlue style={{ 
												opacity: Fadeout,
												transform:`translateX(180px)translateY(0px)` 
												}}>
													HTML 
       CSS &
       JavaScript</TextBlue>	
      <br/>  </Text2>
	
		</Text> 

{/*___________________Second Text-Layer____________________*/}

 
		<Text style={{ 
									opacity: FadeIn,
									transform:`translateX(50px)translateY(-500px)` 
		}}>
						To do this we can use a variety of assets:
        <br/>
			  <br/>
		  	<Text2> 
        
        <TextBlue style={{ 
									opacity: FadeIn,
									transform:`translateX(0px)translateY(000px)` 
		}}>
			Images (.png, .svg, .jpg, .jpeg, .webp, .gif, .bmp) </TextBlue>
      <br/><TextBlue style={{ 
									opacity: FadeIn,
									transform:`translateX(0px)translateY(000px)` 
		}}> Audio    (.mp3, .wav, .aac)</TextBlue>
      <br/> <TextBlue style={{ 
									opacity: FadeIn,
									transform:`translateX(0px)translateY(000px)` 
		}}> Videos  (.webm, .mov, .mp4)</TextBlue>
      <br/>  </Text2>
		
		</Text> 

		</Container>




	);
};
