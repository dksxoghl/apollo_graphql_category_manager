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
export const Box = styled.div<IProps>`
border: 1px solid #dddddd; 
opacity:${props => props.active ? 1.0 : 0.4};
`;
// ${({ active }) => active && `
//   opacity:0.3;
//   `}
export const InBox = styled.div`
display: inline-block; 
margin:2px;
text-align: center;
width:120px;
`;

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

// export const ParentAddButtonBox = styled.div`
// text-align: center;
//   position: absolute;
//   right: 0;
//   bottom: 0;
//   display: flex;
//   padding-bottom: 10px;

// `;
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
  }
`;
export const DownSpan = styled.span`
position: absolute;
top:425px;
left:40px;
    width: 50px;
  height: 40px;
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
padding:3px;
font-family: NanumBarunGothic;
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.17px;
  color: #ffffff;
  }
`;
export const SubAddSpan = styled.span`
width: 88px;
height: 26px;
border-radius: 3px;
border: solid 1px #3a485c;
background-color: #ffffff;

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
export const NameSpan = styled.span`
font-family: NanumBarunGothic;
  font-size: 13px;
  font-weight: bold;
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
