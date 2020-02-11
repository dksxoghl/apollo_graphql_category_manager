import React from 'react';
import {

    ButtonSpan,
} from "../styles";
function SettingRightBox({item}) {
    return (
        <div>
            <table summary="">
                <tbody>
                    <tr>
                        <th scope="row">분류명</th>
                        <td>
                            <input type="text" value={item.name}></input>
                        </td>
                    </tr>
                    <tr >
                        <th scope="row">활성화 상태</th>
                        <td>
                            <input type="checkbox" /> 활성화
                            <input type="checkbox" />비활성화
                          </td>
                    </tr>
                </tbody>
            </table>
            <button>
                저장
                  </button>
        </div>
    );
}

export default SettingRightBox;