import styled from "styled-components";
interface IProps {
  active ?: boolean;
}
// palevioletred
// display: flex;
export const CBox = styled.div`
  width: 450px;
  height: 400px;
  margin: 3%;
  
  justify-content: center;
  background-color: ;
  flex: 1;
`;
// border-radius: 3px;
//   border: 1px solid;

export const Box = styled.div<IProps>`
border: 1px solid #90d5eb; 
display: inline-block; 
margin:2px; 
opacity:${props=>props.active? 1.0: 0.3};
`;
// ${({ active }) => active && `
//   opacity:0.3;
//   `}
export const InBox = styled.div`
display: inline-block; 
margin:2px;
text-align: center;
width:160px;
`;

  // background-color: ${props => {
  //   if (props) return '#249D3D';
  //   else return '#7B838B';
  // }};