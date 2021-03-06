import { AbsoluteFill, useCurrentFrame, useVideoConfig, spring, interpolate, Sequence, Easing } from 'remotion'; 
 import styled from 'styled-components';
 import { RectBorder } from '../helpers/RectangleSolidBorder';


//___________Styled_Components___________


 const SubRect = styled(RectBorder)`
   height:450px;
 `
const SubRect1 = styled(RectBorder)`
height:450px;
`
const SubRect2 = styled(RectBorder)`
   height:450px;
   /* background:#fffff0; */
 `
const SubRect3 = styled(RectBorder)`
height:450px;
/* background:#fffff0; */

`
const SubRect4 = styled(RectBorder)`
   height:450px;
   /* background:#ffffff; */

 `;


 export const RectStarSpring: React.FC <{}> = ({}) => {
//getting config for Spring function
  const config = useVideoConfig();
   // import frame from useCurrentFrame() 
  const frame = useCurrentFrame();

 


// Spring function for animating scale of Rectangles
  const Scaler = spring({
    frame: frame - 130,
    from: 0.4,
    to: 0.1,
    fps: config.fps,
    config: {
      stiffness: 100,
      mass: 2
    },
  });


 // Interpoalte function for animating rotation of rectangle
  const RotatorSub  = interpolate(frame, [20,80],[0,45], {extrapolateRight:'clamp',extrapolateLeft: 'clamp', easing: Easing.ease})
  const RotatorSub1 = interpolate(frame, [20,80],[0,60], {extrapolateRight:'clamp',extrapolateLeft: 'clamp'})
  const RotatorSub2 = interpolate(frame, [20,80],[0,75], {extrapolateRight:'clamp',extrapolateLeft: 'clamp'})
  const RotatorSub3 = interpolate(frame, [20,80],[0,15], {extrapolateRight:'clamp',extrapolateLeft: 'clamp'})
  const RotatorSub4 = interpolate(frame, [20,80],[0,90], {extrapolateRight:'clamp',extrapolateLeft: 'clamp'})
  const RotatorSub5 = interpolate(frame, [20,80],[0,30], {extrapolateRight:'clamp',extrapolateLeft: 'clamp'})



return (
<AbsoluteFill
style={{
backgroundColor: 'transparent',
justifyContent: 'center', alignItems: 'center', 
transform: `translateX(00px)translateY(100px)`
}}>



<SubRect  style={{transform: `rotate(${RotatorSub}deg)scale(${Scaler})`}} />
<SubRect1 style={{transform:`rotate(${RotatorSub1}deg)scale(${Scaler})`}}  />
<SubRect2 style={{transform:`rotate(${RotatorSub2}deg)scale(${Scaler})`}} />
<SubRect3 style={{transform:`rotate(${RotatorSub3}deg)scale(${Scaler})`}} />
<SubRect4 style={{transform:`rotate(${RotatorSub4}deg)scale(${Scaler})`}} />
<SubRect style={{transform:` rotate(${RotatorSub5}deg)scale(${Scaler}) `}} />
</AbsoluteFill>
)}