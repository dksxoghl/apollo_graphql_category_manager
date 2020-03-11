import React from 'react';
import FirstItem from './Item';
import { Line } from './styles';

function FirstMenu({ subMenu, ...args }) {

    return (
        subMenu.map(item => {
            if (item.status === "show") {
                let imgStatus = '0';
                subMenu.map(list => {
                    if (list.parent_id === item.id) imgStatus = '+';         //자식이 하나라도 있으면 +이미지  없으면 0이미지
                });
                return <div key={item.id}><Line /><FirstItem item={item}
                imgStatus={imgStatus} subMenu={subMenu} {...args}/></div>
            }
        }
        )
    )
}
export default FirstMenu;