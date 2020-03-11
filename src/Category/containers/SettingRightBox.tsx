import React, { useCallback } from 'react';
import {
    RightBoxTitle, Line, Input, Span
} from "./styles";
import { useState } from 'react';
import { useEffect } from 'react';
import checkFalse from '../img/checkFalse.png';
import checkTrue from '../img/checkTrue.png';

function SettingRightBox({  item, changeActive, changeName, checkParentItem }) {
    const [check, setCheck] = useState(false);
    const [value, setValue] = useState('');

    useEffect(() => {
        if (item.id === undefined) {
            setValue("");
            setCheck(false);
            // console.log(item, '아이템초기화')
        } else {
            setValue(item.name);
            setCheck(item.active);
        }
    }, [item])

    const deny_char = /^[ㄱ-ㅎ|가-힣|a-z|A-Z|0-9|/_\*]{1,10}$/;
    const appKeyPress = (e) => {
        if (e.key === 'Enter') {
            if (value === "") return alert('1자이상 입력하시오');
            if (!deny_char.test(value)) {
                return alert('한글/영어/숫자 최대 10자까지 입력 가능합니다.');
            }
            //  let parentList = subMenu.filter(list => list.parent_id === item.parent_id);
            //  let check = false;
            //  parentList.map(item => {
            //    if (item.name === value) check = true;
            //  });
            //  if (check) return alert('같은 depth에 중복된이름이 있습니다');
            changeName(value, item.id, item.parent_id);
        }
    }
    const handleChangeName = useCallback((e) => {
        setValue(e.target.value);
    }, [appKeyPress]);


    const handleChange = () => {
        if (checkParentItem === undefined) {
            setCheck(!check);
            changeActive(!check, item.id);
        }
        else if (checkParentItem.active === false) return alert('상위 항목 먼저 활성화가 필요합니다.');
        setCheck(!check);
        changeActive(!check, item.id);
    }
    return (
        <div>
            <Line />
            <RightBoxTitle>카테고리명</RightBoxTitle>
            <Input type="text" placeholder="입력 후 Enter를 눌러주세요" value={value}
                onKeyPress={appKeyPress} onChange={handleChangeName}></Input>
            <Line />
            <RightBoxTitle>활성화 상태</RightBoxTitle>
            {check ?
                <Span>&nbsp;
                <img src={checkTrue} height='12' onClick={handleChange} /> 활성화
                    &nbsp;&nbsp;&nbsp;
                    <img src={checkFalse} height='12' onClick={handleChange} /> 비활성화
                    </Span>
                :
                <Span>&nbsp;
                <img src={checkFalse} height='12' onClick={handleChange} /> 활성화
                    &nbsp;&nbsp;&nbsp;
                    <img src={checkTrue} height='12' onClick={handleChange} /> 비활성화
                    </Span>
            }
            <Line />
        </div>
    );
}

export default SettingRightBox;