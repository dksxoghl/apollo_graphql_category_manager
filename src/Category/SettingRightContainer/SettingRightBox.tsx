import React from 'react';
import {

    RightBoxTitle, Line, Input, Span
} from "./styles";
import { useState } from 'react';
import { useEffect } from 'react';
import checkFalse from '../img/checkFalse.png';
import checkTrue from '../img/checkTrue.png';

function SettingRightBox({ item, changeActive }) {
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
        changeActive(!check, item.id);
    }
    return (
        <div>
            <Line />
            <RightBoxTitle>카테고리명</RightBoxTitle>
            <Input type="text" placeholder="입력 후 Enter키 입력하시오. " value={name}></Input>
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