import { Audio, Series, staticFile, AbsoluteFill, Img, Easing, useCurrentFrame, useVideoConfig, spring, interpolate, Sequence } from 'remotion'; 
import styled from 'styled-components';
import { transform } from 'typescript';
import Pic1	from'../../assets/scale-Spring.png'
import Pic2 from'../../assets/spring().png'
import { ABSO_FILL } from '../Styled-Components/AbsoluteFill';
import { LINK } from '../Styled-Components/Link';
import { TEXT } from '../Styled-Components/Text';
import { TEXT2 } from '../Styled-Components/Text2';
import { TEXT3 } from '../Styled-Components/Text3';
import { TEXT_B } from '../Styled-Components/TextBlue';
import { TITLE_B } from '../Styled-Components/TitleBlue';
import { Translate } from '../Translate()/Translate';



//___________Styled Components______________




//___________Container is the primary component, 
const Container = styled(ABSO_FILL)`
transform: translate(0px,-100px);
`   


//___________Title_________________

const Title = styled(TITLE_B)`

`;

const Text = styled(TEXT)`

		`;

const TextTwo = styled(Text)`
	

`;

const Text2 = styled(TEXT2)`

transform: translateY(30px);
margin-left: 20px;
	`;

const Text3 = styled(TEXT3)`

`;

const Spring = styled(TEXT2)`

`;


const TextBlue = styled(TEXT_B)`

`;
 const Link =styled(LINK)`
 margin-left: 0px;
 font-size: 30px;
`    
//______________Exports______________________

export const AnimaProps3: React.FC = () => {

	const config = useVideoConfig();
	const frame = useCurrentFrame();
	const fps = 30; 
		const FadeInText = interpolate(frame, [250, 280],[0,1],
				{extrapolateLeft: 'clamp', extrapolateRight:'clamp'})

		const Fadeout = interpolate(frame, [320, 360],[1,0 ],
				{extrapolateLeft: 'clamp', extrapolateRight:'clamp'})

				const Fadein2 = interpolate(frame, [360, 390],[0,1 ],
					{extrapolateLeft: 'clamp', extrapolateRight:'clamp'})

					const Fadeout2 = interpolate(frame, [510, 570],[1,0 ],
						{extrapolateLeft: 'clamp', extrapolateRight:'clamp'})

					const Fadein3 = interpolate(frame, [600, 670],[0,1 ],
						{extrapolateLeft: 'clamp', extrapolateRight:'clamp'})

				const FadeInPic = interpolate(frame, [600, 670],[0,1 ],
					{extrapolateLeft: 'clamp', extrapolateRight:'clamp'})


const Spring1 = spring({
	fps,
	from: 0,
	to: 1,
	frame: frame - 200,
})



	return (

		
		<Container>
		
			<br />
		
			<Title style={{
			
				transform: `translateY(725px) translateX(10px)` 
				}}>spring( ) function</Title>

			<Text style={{
				 
				transform: `translate(-100px, 680px)` 
				}}>
			<br/>
			<Text2 
			style={{ 
							opacity:Fadeout,
							transform: `translateY(60px)` 	}}>
			<TextBlue>	spring( ) functions</TextBlue>  are similar to 
			<TextBlue> interpolate( ) functions</TextBlue>
			<br /> except they seem to make motion more natural.
			<br />The default spring configuration leads to a little bit of overshoot, 
			<br/>meaning the text in this case, 
			
			
				<Spring style={{transform: `scale(${Spring1})`}}>

				will bounce a little bit
				</Spring>
						<Text3 style={{ opacity: FadeInText, transform: `translate(-20px, 20px)`	}}>
									<br/>
										See the reference page on 
									<br/>
								<Link>	<a
				href="https://https://www.remotion.dev//"
				target="_blank"
				style={{
					textDecoration: 'none',
					
				}}
			>Remotion.dev 
						</a>	 </Link>
										
							</Text3>
			<br/><TextBlue></TextBlue>
			<br/><TextBlue></TextBlue>
			<br /> 
			<br/>
			</Text2>
			<br/></Text>
		





{/*_____________________ _Second Text-Layer________________________*/}


<Text style= {{opacity:  Fadeout2,
transform: `translateY(-120px)translateX(-180px)`}}>
				<Text2 style= {{opacity: Fadein2,}}>
				<Img src={Pic2} style={{
		 transform:`translate(680px,250px)	scale(1.2)`,
											}}/>

<br/>
spring() has the following parameters: 
<br/>
<br/>
<TextBlue>- frame </TextBlue>
<TextBlue>- from</TextBlue>
<TextBlue>- to </TextBlue>
<TextBlue>- fps</TextBlue>
<TextBlue>-  config </TextBlue>
<br/>
config is optional object that allows you to customize <br/>
the physical properties of the animation.

</Text2>
 
</Text>



{/*______________ Third Text Layer _____________*/}

			<Text style={{
				opacity: Fadein3,
				transform: `translateY(-460px)translateX(-10px)`}}>
			The following example will showcase the difference between the two functions. 
			<br/>
			<br/> 
			we will use the CSS function 
			<br/> 
			<TextBlue>scale()</TextBlue> 
			<br/> 
			with the value <TextBlue>
			 0.4 to 0.1  </TextBlue>
			<br/> 
			the difference in result will become obvious 
			<br/> 
		 <br/>
		 <br/><br/><br/>		
				</Text>

				{/* <Img src={Pic1} style={{ 	opacity:FadeInPic		}}/> */}
				<Img src={Pic1} style={{ 
					transform:`translate(140px,-800px)	scale(1.2)`,
					opacity:FadeInPic							}}/>
				
		</Container>
	);
};
