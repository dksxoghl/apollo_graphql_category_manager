import styled,{css} from "styled-components";
import asd from '../img/triangle-copy.png';
interface IProps {
  checked?: boolean;
}
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
// height: 27px; /* 높이 초기화 */
//  line-height: normal; /* line-height 초기화 */
//  margin:1px;
// width:400px;
export const Input = styled.input`
display: inline-block;
width: 392px; /* 원하는 너비 설정 */ 
height: 32px; /* 높이값 초기화 */
position: absolute;
top:1.5px;
 line-height : normal; /* line-height 초기화 */ 
  font-family: inherit; /* 폰트 상속 */ border: 1px solid #dddddd; 
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
// const checkedStyles = css`
// box-shadow: 0 4px 6px blue, 0 1px 3px blue;
// background-color: white;
// border-radius: 10px;
// padding: 20px;
// background-image:url('../img/checkFalse.png')
// `
// const uncheckedStyles = css`
// background: red;
// `

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