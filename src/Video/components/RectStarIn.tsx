import { Audio, Series, staticFile, AbsoluteFill, Img, Easing, useCurrentFrame, useVideoConfig, spring, interpolate, Sequence } from 'remotion';  


 import styled from 'styled-components';
 import { RectBorder } from './RectangleSolidBorder';


 //  https://youtu.be/UyZFNSEMmT8?t=134


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


 export const RectStarIn: React.FC <{}> = ({}) => {

  const config = useVideoConfig();
  const frame = useCurrentFrame();
  const duration = 60;

  // const som = frame % duration;
  // console.log(som)

  const RotatorSub  = interpolate(frame, [0,60],[0,45], {extrapolateRight:'clamp',extrapolateLeft: 'clamp', easing: Easing.ease})
  const RotatorSub1 = interpolate(frame, [0,60],[0,60], {extrapolateRight:'clamp',extrapolateLeft: 'clamp',})
  const RotatorSub2 = interpolate(frame, [0,60],[0,75], {extrapolateRight:'clamp',extrapolateLeft: 'clamp',})
  const RotatorSub3 = interpolate(frame, [0,60],[0,15], {extrapolateRight:'clamp',extrapolateLeft: 'clamp',})
  const RotatorSub4 = interpolate(frame, [0,60],[0,90], {extrapolateRight:'clamp',extrapolateLeft: 'clamp',})
  const RotatorSub5 = interpolate(frame, [0,60],[0,30], {extrapolateRight:'clamp',extrapolateLeft: 'clamp',})
  const Scaler = interpolate(frame, [130, 150],[0.4, 0.1], {extrapolateRight:'clamp',extrapolateLeft: 'clamp',})




return (
<AbsoluteFill
style={{
backgroundColor: 'transparent',
justifyContent: 'center', alignItems: 'center', 
transform: `translateX(00px)translateY(120px)`
}}>




<SubRect  style={{transform:`rotate(${RotatorSub}deg) scale(${Scaler})`}} />
<SubRect1 style={{transform:`rotate(${RotatorSub1}deg)scale(${Scaler})`}}  />
<SubRect2 style={{transform:`rotate(${RotatorSub2}deg)scale(${Scaler})`}} />
<SubRect3 style={{transform:`rotate(${RotatorSub3}deg)scale(${Scaler})`}} />
<SubRect4 style={{transform:`rotate(${RotatorSub4}deg)scale(${Scaler})`}} />
<SubRect  style={{transform:`rotate(${RotatorSub5}deg)scale(${Scaler})`}} />


</AbsoluteFill>
)}