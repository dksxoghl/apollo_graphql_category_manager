import styled, { css } from "styled-components";
// palevioletred
// display: flex;
interface IProps {
  active?: boolean;
}
// margin: 3%;
// height: 400px;
export const CBox = styled.div`
  justify-content: center;
  height: 400px;
  overflow:scroll;
  flex: 1;
  ::-webkit-scrollbar {
    width: 8px;
  }
  /* Track */
::-webkit-scrollbar-track {
  background: #eeee; 
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: #eeee; 
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555; 
}
`;
// border-radius: 3px;
//   border: 1px solid;

// display: inline-block; 
export const Box = styled.div`
border: 1px solid #dddddd; 
border-top:0px;
border-left:0px;
border-right:0px;
height: 35px;
`;
// ${({ active }) => active && `
//   opacity:0.3;
//   `}
export const InBox = styled.div`
display: inline-block; 
margin:4px;
text-align: left;
width:130px;
`;
export const Line = styled.span`
position: absolute;
top:0px;
left:0px;
width: 380px;
  height: 1px;
  border: solid 0.1px #dddddd;
`
// background-color: ${props => {
//   if (props) return '#249D3D';
//   else return '#7B838B';
// }};

export const ParentAddSpan = styled.span`
  position: absolute;
  top:380px;
  .ant-btn-primary {
    background-color: #3a485c;
    border-color: #3a485c;
    width: 378px;
  height: 38px;
  font-family: NanumBarunGothic;
  font-size: 13px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.19px;
  color: #ffffff;
  }
  width:150%;
`;

export const InLine = styled.span<IProps>`
opacity:${props => props.active ? 1.0 : 0.3};
`;
// background-color: ${props => {
//   if (props) return '#249D3D';
//   else return '#7B838B';
// }};




export const SaveSpan = styled.span`
position: absolute;
left:810px;
top:450px;
.ant-btn-primary {
    background-color: #3a485c;
    border-color: #3a485c;
    width: 130px;
  height: 40px;
  font-family: NanumBarunGothic;
  font-size: 13px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.19px;
  color: #ffffff;
  }
  width:150%;
  
`;
export const UpSpan = styled.span`
position: absolute;
top:425px;
left:5px;
    width: 50px;
  height: 40px;
  :hover{
    cursor: pointer;
  }
  }
`;
export const DownSpan = styled.span`
position: absolute;
top:425px;
left:40px;
    width: 50px;
  height: 40px;
  :hover{
    cursor: pointer;
  }
  }
`;
export const DeleteSpan = styled.span`
position: absolute;
top:425px;
left:300px;
width: 74px;
height: 26px;
border-radius: 3px;
background-color: #65727f;
text-align: center;
font-family: NanumBarunGothic;
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  color: #ffffff;
  padding:2 px;
margin-left: auto;
margin-right: auto;
margin-bottom:5px;
padding-top:5px;
:hover{
  cursor: pointer;
}
  }
`;
export const SubAddSpan = styled.span`
width: 88px;
height: 26px;
border-radius: 3px;
border: solid 1px #3a485c;
background-color: #ffffff;
padding-top:5px;
padding-bottom:5px;
padding-left:10px;
padding-right:10px;
margin:4px;
:hover{
  cursor: pointer;
}


font-family: NanumBarunGothic;
  font-size: 12px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.17px;
  font-color: #3a485c;
  }
`;
// font-weight: bold;
export const NameSpan = styled.span`
font-family: NanumBarunGothic;
  font-size: 13px;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.19px;
  color: #000000;
`;
export const ButtonSpan = styled.span`
object-fit: contain;
left:1%;
margin:10px;
`;
export const OnlyCurrent = styled.span`
opacity: 0.1
`;

export const ButtonLine = styled.span`
position: absolute;
top:420px;
left:30px;
width: 1px;
  height: 35px;
  border: solid 1px #dddddd;
`
export const ButtonLine2 = styled.span`
position: absolute;
top:420px;
left:68px;
width: 1px;
  height: 35px;
  border: solid 1px #dddddd;
`