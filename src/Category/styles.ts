import styled from "styled-components";

export const Container = styled.div`
  width: 90%;

  padding: 1rem;
`;

export const TitleBox = styled.div`
  width: 100%;

  justify-content: center;
`;

export const Title = styled.div`
  width: 100%;
  height: 30px;
  font-family: NanumBarunGothic;
  font-size: 16px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.23px;
  color: #333333;
  display: flex;
  align-items: center;
`;
export const UnderLine = styled.hr`
  width: 100%;

  border: solid 0.5px #3a485c;
`;
export const ContentBox = styled.div`
  width: 90%;
  height: 100%;
  margin: 3%;
  display: flex;
  justify-content: center;
  background-color: white;
  flex: 1;
`;

export const AdminTableBox = styled.div`
  justify-content: center;
  align-items: center;
`;
export const AdminAddFormBox = styled.div`
  justify-content: center;
  align-items: center;
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
