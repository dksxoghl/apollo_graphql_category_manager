import styled from "styled-components";
// interface IProps {
//   checked?: boolean;
// }
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

export const RightBoxTitle = styled.div`
width: 150px;
  height: 24px;
  padding:6px;
  background-color: #edf7fa;
  font-family: NanumBarunGothic;
  font-size: 13px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  font-weight:  bold;
  line-height: normal;
  letter-spacing: -0.19px;
  color: #000000;
  display: inline-block; 
`;

export const Line = styled.div`
width: 555px;
height: 0.5px;
border: solid 0.5px #dddddd;
`;

export const Input = styled.input`
display: inline-block;
width: 392px; /* 원하는 너비 설정 */ 
height: 32px; /* 높이값 초기화 */
position: absolute;
top:1.5px;
margin-left:5px;
 line-height : normal; /* line-height 초기화 */ 
  font-family: inherit; /* 폰트 상속 */ border: 1px solid #dddddd; 
  border:0px;
  border-radius:5; /* iSO 둥근모서리 제거 */
   outline-style: none;
   /* 포커스시 발생하는 효과 제거를 원한다면 */ 
   -webkit-appearance: none; /* 브라우저별 기본 스타일링 제거 */
    -moz-appearance: none;
     appearance: none;
     ::placeholder {
      opacity: 0.5;
    }
`;


export const Span = styled.span`
font-family: NanumBarunGothic;
  font-size: 13px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  color: #333333;
  letter-spacing: -0.19px;
`


// export const InputCheck = styled.input.attrs({ type: 'checkbox' })`
// display: inline-block;
//  &:checked {
//   background-image:url('../img/checkFalse.png')
//   }
//   &:not(:checked) {
//    ${uncheckedStyles}
//   }
// `;
  //  &:checked {
  //   background: 'salmon'
  // }
  // &:not(:checked) {
  //   background: url('../img/checkFalse.png')
  // }

  export const Container = styled.div`
  width: 100%;
  background-color: #F7F5F4;
  padding: 1rem;
`;

export const TitleBox = styled.div`
  width: 100%;

  justify-content: center;
`;

export const Title = styled.div`
width: 100%
height: 30px;
  font-family: NanumBarunGothic;
  font-size: 16px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.23px;
  color: #333333;
`;
export const UnderLine = styled.hr`
  width: 100%;
  border: solid 0.5px #3a485c;
`;

export const ContentBox = styled.div`
width: 944px;
  height: 496px;
  background-color: #FFFfff;
  position:absolute;
`;
export const SubTitleBox = styled.div`
height: 37.5px;
`;

export const SubTitle = styled.div`
  position:absolute;
  font-family: NanumBarunGothic;
  font-size: 120%;
  margin: 10px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.2px;
  color: #000000;
`;

// justify-content: center;
// align-items: center;
// display: inline-block; 
export const AdminTableBox = styled.div`
width: 380.5px;
left: 0%;
position:absolute;
`;
// export const VLine = styled.div`
// width: 1px;
// position:absolute;
// left: 40%;
//   height: 495px;
//   border: solid 1px #dddddd;
//   display: inline-block; 
// `
export const AdminAddFormBox = styled.div`
width: 566.5px;
left: 40.5%;
position:absolute;
  justify-content: center;
  align-items: center;
  display: inline-block; 
`;

//height: max-content;
export const ButtonSpan = styled.span`
  margin: 1%;
  .ant-btn-primary {
    background-color: #3a485c;
    border-color: #3a485c;
  }
`;
export const ButtonBox = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  display: flex;
  padding-bottom: 10px;
`;
