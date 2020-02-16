import React, { useCallback } from 'react';
import {

    RightBoxTitle, Line, Input, Span
} from "./styles";
import { useState } from 'react';
import { useEffect } from 'react';
import checkFalse from '../img/checkFalse.png';
import checkTrue from '../img/checkTrue.png';

function SettingRightBox({ item, changeActive,changeName }) {
    const [name, setName] = useState("");
    const [check, setCheck] = useState(false);
    const [value, setValue] = useState('');

    useEffect(() => {
        if (item.id === undefined) {
            setValue("");
            setCheck(false);
            console.log(item, '아이템초기화')
        } else {
            setValue(item.name);
            setCheck(item.active);
        }
    }, [item])

    const deny_char = /^[ㄱ-ㅎ|가-힣|a-z|A-Z|0-9|\*]{1,10}$/;
     const appKeyPress = (e) => {
       if (e.key === 'Enter') {
         if (value === "") return alert('1자이상 입력하시오');
         if (!deny_char.test(value)) {
           return alert('10자 내, 또는 영문자와 한글,숫자만을 입력하세요');
         }
        //  let parentList = subMenu.filter(list => list.parent_id === item.parent_id);
        //  let check = false;
        //  parentList.map(item => {
        //    if (item.name === value) check = true;
        //  });
        //  if (check) return alert('같은 depth에 중복된이름이 있습니다');
        changeName(value, item.id,item.parent_id);
       }
     }
     const handleChangeName = useCallback((e) => {
       setValue(e.target.value);
     }, [appKeyPress]);
   
   
    const handleChange = () => {
        setCheck(!check);
        changeActive(!check, item.id);
    }
    return (
        <div>
            <Line />
            <RightBoxTitle>카테고리명</RightBoxTitle>
            <Input type="text" placeholder="입력 후 Enter키 입력하시오. " value={value}
             onKeyPress={appKeyPress} onChange={handleChangeName}></Input>
            <Line />
            <RightBoxTitle>활성화 상태</RightBoxTitle>
            {/* <span>
                <InputCheck type="checkbox" checked={check} onChange={handleChange} id='aaa' />
                <label htmlFor='aaa'>활성화</label></span>
            <InputCheck type="checkbox" checked={!check} onChange={handleChange} />비활성화 */}

            {check ?
                <Span>&nbsp;
                    <img src={checkTrue} height='10' onClick={handleChange} /> 활성화
                    &nbsp;&nbsp;&nbsp;
                        <img src={checkFalse} height='10' onClick={handleChange} /> 비활성화
                        </Span>
                :
                <Span>&nbsp;
                    <img src={checkFalse} height='10' onClick={handleChange} /> 활성화
                    &nbsp;&nbsp;&nbsp;
                        <img src={checkTrue} height='10' onClick={handleChange} /> 비활성화
                        </Span>
            }
            <Line />
        </div>
    );
}

export default SettingRightBox;