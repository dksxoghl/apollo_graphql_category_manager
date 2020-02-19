import React, { useState, useCallback } from 'react';
import { Box,InBox,UpSpan,DownSpan,DeleteSpan,SubAddSpan,NameSpan,ButtonSpan, ButtonLine, ButtonLine2,InLine } from './styles'
import plusImg from '../img/plus2.png';
import end from '../img/end2.png';
import minusImg from '../img/minus2.png';
import triangle from '../img/triangle.png';
import downTriangle from '../img/triangle-copy.png';


function FirstItem({ item, onAdd, onHide, onRemove, orderChange, addSub, subMenu ,changeRight,current,setCurrent,imgStatus}) {
  // const [input, setInput] = useState(false);
  // const [value, setValue] = useState('');
  const [clicked,setClicked] = useState(imgStatus==='+'? true:false);             // 이미지 결정 state
  console.log(current);
  const handleClick = () => {
    setClicked(false);
    onAdd(item.id);
  }
  const handleHide = () => {
    setClicked(true);
    onHide(item.id);
  }
  const handleRemove = () => {
    onRemove(item.id);
  }
  const handleUp = () => {
    orderChange(item, true);
  }
  const handleDown = () => {
    orderChange(item, false);
  }
  // const handleUpdate = () => {
  //   setInput(true);
  // }
  // const deny_char = /^[ㄱ-ㅎ|가-힣|a-z|A-Z|0-9|\*]{1,10}$/;
  // const appKeyPress = (e) => {
  //   if (e.key === 'Enter') {
  //     if (value === "") return alert('1자이상 입력하시오');
  //     if (!deny_char.test(value)) {
  //       return alert('10자 내, 또는 영문자와 한글,숫자만을 입력하세요');
  //     }
  //     let parentList = subMenu.filter(list => list.parent_id === item.parent_id);
  //     let check = false;
  //     parentList.map(item => {
  //       if (item.name === value) check = true;
  //     });
  //     if (check) return alert('같은 depth에 중복된이름이 있습니다');
  //     setInput(false);
  //     updateName(item, value);
  //   }
  // }
  // const handleChange = useCallback((e) => {
  //   setValue(e.target.value);
  // }, [appKeyPress]);

  const handleAddSub = () => {
    addSub(item.id);
  }
  const boxClick=()=>{
    setCurrent(item.id);
    changeRight(item,subMenu.find(list=>list.id===item.parent_id));         //해당 클릭아이템의 부모아이템찾기(부모활성화 여부 판단)
  }
  let minus = '';
  //  item.id.length > 6? '----' : 
  //  item.id.length>4 ? '--' :null  ;
  let split = item.id.split(':');
  for (let index = 0; index < split.length - 1; index++) {
    minus += '\u00A0\u00A0\u00A0\u00A0\u00A0';
  }
 
  return (
    <Box onClick={boxClick} style={{
      backgroundColor: item.id === current ? '#eeeeee' : 'white'
    }}>
      {minus}
      <InLine active={item.active} >
      {clicked ?
        <ButtonSpan onClick={handleClick}><img src={plusImg} height='15' /></ButtonSpan> :
        imgStatus === '0' ?
          <ButtonSpan><img src={end} height='15' /></ButtonSpan> :
          !clicked ?
            <ButtonSpan onClick={handleHide}><img src={minusImg} height='15' /></ButtonSpan> : null
      }
       <InBox ><NameSpan>{item.name}</NameSpan></InBox>
       </InLine>
      {/* {input ? <input placeholder="한글영문숫자만, 10자내외" type="text" onKeyPress={appKeyPress} onChange={handleChange} /> : */}
      {/* } */}
      {item.id === current ?
        <span>
          <UpSpan onClick={handleUp}><img src={triangle} height='11' /></UpSpan>
          <ButtonLine/>
          <DownSpan onClick={handleDown}><img src={downTriangle} height='11' /></DownSpan>
          <ButtonLine2/>
          <DeleteSpan onClick={handleRemove}>선택삭제</DeleteSpan>
          <SubAddSpan onClick={handleAddSub}>하위분류 추가</SubAddSpan>
        </span> : null
      }
    </Box>

  );

}

export default FirstItem;

//내일업다운수정