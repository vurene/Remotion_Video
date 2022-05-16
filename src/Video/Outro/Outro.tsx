import { Audio, Series, staticFile, AbsoluteFill, Img, Easing, 
	useCurrentFrame, useVideoConfig, spring, interpolate, Sequence } from 'remotion'; 
import styled from 'styled-components';
import { ABSO_FILL } from '../Styled-Components/AbsoluteFill';
import { TEXT } from '../Styled-Components/Text';
import { TEXT2 } from '../Styled-Components/Text2';
import { LINK } from '../Styled-Components/Link';


//___________Styled Components______________



// Absolute-Fill 
const Container = styled(ABSO_FILL)`

`;

const Text = styled(TEXT)`
margin:40px;
`;

const Text2 = styled(TEXT2)`
margin-right: 35px;
transform: translate(50px,30px);
margin-left: 20px;
`;

const Link = styled(LINK)`
font-size: 40px;
`;


//______________Exports______________________



export const Outro: React.FC = () => {

return (


<Container>

<Text style={{transform: `translateY(20px)`}}>

For a more in-depth explanation 
<br/>
<Text2>about Remotion visit </Text2>

<br/>
<br/>


<Link style={{transform:`translate(0px,0px)`}}>
      <a
				href="https://https://remotion.dev"
				target="_blank"
				style={{
					textDecoration: 'none',
				}}
			>
    Remotion.dev
      </a>
      </Link>

</Text>


		</Container>
	);
};
