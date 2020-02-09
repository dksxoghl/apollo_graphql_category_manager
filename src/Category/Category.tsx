import React, { useState } from 'react';
import {
  Container,
  TitleBox,
  ContentBox,
  Title,
  UnderLine,
  AdminAddFormBox,
  AdminTableBox,
  ButtonSpan,
  ButtonBox
} from "./styles";
// import { Button, Icon, Row, Col } from "antd";
// import SettingContainer from 'pages/CategoryManager/SettingListContainer/SettingContainer';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { GET_CATEGORY, DELETE_CATEGORY } from '../graphql/graphql';
import SettingBox from './SettingContainer/SettingBox';


interface IProps {
  submenu: string;
  selectedMenuId: string[];
}

const Category = () => {
  // const { submenu, selectedMenuId } = props;

  const { loading, error, data } = useQuery(GET_CATEGORY);
  // const [checkId, setCheckId] = useState([""]);
  // const [toggleTask] = useMutation(TOGGLE_TASK_MUTATION);
  const [save] = useMutation(DELETE_CATEGORY);
  const onSave= (id)=>{
    console.log(id);
    id.map(id=>  save({ variables: { id: id } }));
    alert('저장완료');
  }
  
  if (loading) return <p>'Loading...'</p>;
  if (error) return <p>`Error! ${error.message}`</p>;
  else {
    const categories = data.categories2;
    // const onChange = (e) => {
    //   // console.log(`checked = ${e.target.checked}`,e,e.target,e.target.onFocus);
    //   console.log('ccclick', e);
    //   setCheckId(oldArray => [...oldArray, e.key]);
    // }
    // console.log(checkId);
    
    return (
      <>
        <Container>
          <TitleBox>
            <Title>카테고리 관리(develop)</Title>
            <UnderLine />
          </TitleBox>
          <ContentBox>
              <AdminTableBox>
                {/* <AdminTable /> */}
                  {/* <SettingContainer categories={categories} onChange={onChange} /> */}
                  <SettingBox categories={categories} onSave={onSave}/>
                <ButtonBox>
                  {/* <ButtonSpan>
                    <Button type="primary" htmlType="submit">
                      대분류추가
                  </Button>
                  </ButtonSpan> */}
                  {/* <ButtonSpan>
                    <Button type="primary" htmlType="submit">
                      수정
                  </Button>
                  </ButtonSpan>

                  <ButtonSpan>
                    <Button type="primary" htmlType="submit">
                      삭제
                  </Button>
                  </ButtonSpan> */}
                </ButtonBox>
              </AdminTableBox>
              <AdminAddFormBox>
                {/* <AdminAddForm /> */}
                {/* <ButtonBox>
                  <ButtonSpan>
                    <Button type="primary" htmlType="submit" onClick={onSave}>
                      저장
                  </Button>
                  </ButtonSpan>
                </ButtonBox> */}
              </AdminAddFormBox>
          </ContentBox>
        </Container>
      </>
    );
  }
}

  export default Category;