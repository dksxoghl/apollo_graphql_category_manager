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
import { GET_CATEGORY, DELETE_CATEGORY, UPDATE_CATEGORY,INSERT_CATEGORY } from '../graphql/graphql';
import SettingBox from './SettingContainer/SettingBox';
import SettingRightBox from './SettingRightContainer/SettingRightBox';


interface IProps {
  submenu: string;
  selectedMenuId: string[];
}

const Category = () => {
  // const { submenu, selectedMenuId } = props;
  const [checkItem, setCheckItem] = useState({});
  const [checkParentItem, setCheckParentItem] = useState({});
  
  const [active, setActive] = useState({
    id:"", active:false
  });
  const [handleName, setHandleName] = useState({
    id:"", name:"",parent_id:""
  });
 
  const { loading, error, data } = useQuery(GET_CATEGORY);
  // const [checkId, setCheckId] = useState([""]);
  // const [toggleTask] = useMutation(TOGGLE_TASK_MUTATION);
  const [save] = useMutation(UPDATE_CATEGORY);
  const [erase] = useMutation(DELETE_CATEGORY);
  const [insert] = useMutation(INSERT_CATEGORY);

  if (loading) return <p>'Loading...'</p>;
  if (error) return <p>`Error! ${error.message}`</p>;
  const categories = data.categories;
  // const onChange = (e) => {
  //   // console.log(`checked = ${e.target.checked}`,e,e.target,e.target.onFocus);
  //   console.log('ccclick', e);
  //   setCheckId(oldArray => [...oldArray, e.key]);
  // }
  // console.log(checkId);
  const onSave = (changedList, deleteId,insertId) => {
    console.log(changedList, deleteId,insertId);
    let newInsertId=insertId.slice(1,insertId.length);
    console.log(newInsertId);
    let insertList=newInsertId.map(id=>{
     return changedList.filter(item=>item.id===id);
    })
    console.log(insertList);
    insertList.map(list => insert({ variables: { id: list[0].id, name: list[0].name, parent_id: list[0].parent_id, order: list[0].order, status: list[0].status,active:list[0].active } }))
    deleteId.map(id => erase({ variables: { id: id } }));
    // if (deleteId.length === 1 && changedList.length === categories.length) {
    changedList.map(list => {
      save({ variables: { id: list.id, name: list.name, parent_id: list.parent_id, order: list.order, status: list.status ,active:list.active} })
    });
    // } else if (changedList.length > data.categories2.length) {

    // } else {
    //   changedList.map(list => {
    //     save({ variables: { id: list.id, name: list.name, parent_id: list.parent_id, order: list.order } })
    //   });
    // }
    // id.map(id=>  save({ variables: { id: id } }));
    alert('저장이 완료 되었습니다.');
  }
  
  const changeRight=(item,parentItem)=>{
    setCheckItem(item);
    setCheckParentItem(parentItem);
  }
  const changeActive=(active,id)=>{
    console.log(active)
    setActive({active:active,id});
  };
  const changeName=(name,id,parent_id)=>{
    setHandleName({
      id,name,parent_id
    })
  };
  return (
    <>
      <Container>
        <TitleBox>
          <Title>카테고리 관리</Title>
          <UnderLine />
        </TitleBox>
        <ContentBox>
          <AdminTableBox>
            {/* <AdminTable /> */}
            {/* <SettingContainer categories={categories} onChange={onChange} /> */}
            <SettingBox categories={categories} onSave={onSave} changeRight={changeRight} active={active} handleName={handleName}/>
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
          <SettingRightBox item={checkItem} changeActive={changeActive} changeName={changeName} checkParentItem={checkParentItem}/>
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

export default Category;