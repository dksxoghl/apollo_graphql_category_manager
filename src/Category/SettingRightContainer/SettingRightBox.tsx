import React from 'react';
import {

    ButtonSpan,
} from "../styles";
import { useState } from 'react';
import { useEffect } from 'react';
function SettingRightBox({item}) {
    const [name,setName] = useState("");
    const [check,setCheck] = useState(false);
    useEffect(()=>{
        setName(item.name);
        setCheck(item.active);
    },[item])
    const handleChange=()=>{
        setCheck(!check);
    }
    return (
        <div>
            <table summary="">
                <tbody>
                    <tr>
                        <th scope="row">분류명</th>
                        <td>
                            <input type="text" value={name}></input>
                        </td>
                    </tr>
                    <tr >
                        <th scope="row">활성화 상태</th>
                        <td>
                            <input type="checkbox" checked={check} onChange={handleChange}/> 활성화
                            <input type="checkbox"  checked={!check} onChange={handleChange}/>비활성화
                          </td>
                    </tr>
                </tbody>
            </table>
            <ButtonSpan>
                <button className="ant-btn-primary">
                저장
                  </button>
                  </ButtonSpan> 
        </div>
    );
}

export default SettingRightBox;