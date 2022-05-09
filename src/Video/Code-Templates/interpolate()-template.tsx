import { interpolate, useCurrentFrame } from "remotion";
 
const frame = useCurrentFrame(); 
const opacity = interpolate(frame, [0, 20], [0, 1],
                    {extrapolateRight:'clamp'});