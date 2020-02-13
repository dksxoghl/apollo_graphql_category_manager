import React from 'react';
import {

    RightBoxTitle, Line,Input,InputCheck
} from "./styles";
import { useState } from 'react';
import { useEffect } from 'react';
function SettingRightBox({ item,changeActive }) {
    const [name, setName] = useState("");
    const [check, setCheck] = useState(false);
    useEffect(() => {
        if (item.id === undefined) {
            setName("");
            setCheck(false);
            console.log(item, '아이템초기화')
        } else {
            setName(item.name);
            setCheck(item.active);
        }
    }, [item])
    const handleChange = () => {
        setCheck(!check);
        changeActive(!check,item.id);
    }
    return (
        <div>
        <Line />
        <RightBoxTitle>카테고리명</RightBoxTitle>
        <Input type="text" placeholder="입력 후 Enter키 입력하시오. " value={name}></Input>
        <Line />
        <RightBoxTitle>활성화 상태</RightBoxTitle>
        <span>
        <InputCheck type="checkbox" checked={check} onChange={handleChange} id='aaa'/>
        <label htmlFor='aaa'>활성화</label></span>
                        <InputCheck type="checkbox" checked={!check} onChange={handleChange} />비활성화
                        <Line />
    </div>
    );
}

export default SettingRightBox;