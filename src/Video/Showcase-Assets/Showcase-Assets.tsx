import styled from 'styled-components';
// import {Triangle} from './Logo/Triangle';

import { Audio, 
	Series, 
	staticFile, 
	AbsoluteFill, 
	Img, Easing, 
	useCurrentFrame, 
	useVideoConfig, 
	spring, 
	interpolate, 
	Sequence } from 'remotion'; 

import Lgo from '../../assets/logotitle.png'





const Container = styled.div`
	justify-content: center;
	align-items: center;
	display: flex;
	flex-direction: column;
	height: 100px;
`;

const Title = styled.div`
	font-weight: 7800;
	font-family: Arial, Helvetica, sans-serif;
	font-size: 70px;

	margin-bottom: 5px;
	color: whitesmoke;
	transform: translateY(-30px)translateX(0px);
	background: linear-gradient(to right, #4290f5, #42e9f5);

-webkit-background-clip: text;
-moz-background-clip: text;
background-clip: text;
-webkit-text-fill-color: transparent;
-moz-text-fill-color: transparent;
-text-fill-color: transparent;
`;

const Text = styled.div`
	font-weight: 7800;
	font-family: Arial, Helvetica, sans-serif;
	font-size: 30px;
	margin: 40px;
	margin-left: 80px;
	color: whitesmoke;
	transform: translateY(-10px);

		`

const Text2 = styled.div`
font-weight: 7800;
font-family: Arial, Helvetica, sans-serif;
font-size: 30px;
margin-bottom: 5px;
color: whitesmoke;
	
	
	`

const TextBlue = styled.div`
font-weight: 7800;
font-family: Arial, Helvetica, sans-serif;
font-size: 30px;
margin-bottom: 5px;
color:#4290f5;
	
	
	`;


export const ShowcaseAssets: React.FC = () => {
const config = useVideoConfig();
const frame = useCurrentFrame();


	const Fadeout = interpolate(frame, [150, 170],[ 1,0 ],
		{extrapolateLeft: 'clamp', extrapolateRight:'clamp'})
		const FadeIn = interpolate(frame, [170, 230],[ 0,1 ],
			{extrapolateLeft: 'clamp', extrapolateRight:'clamp'})	

	return (
		<Container>
			<div style={{ transform: `rotate(3600deg)`}}>
				{/* <Triangle opacity={1} scale={1} size={150} /> */}
			</div>
			<br />
			<br />
			<Img src={Lgo} style={{ transform: `translate(0px,150px) scale(0.5`}}/>
			{/* <Title  style={{ transform: `translateX(0px)translateY(140px)`}}>Remotion</Title> */}
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
												transform:`translateX(210px)translateY(0px)` 
												}}>
													HTML, 
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
