import React from 'react';
import FirstItem from './FirstItem';
import { Line } from './styles';

function FirstMenu({ subMenu, onAdd, onRemove, onHide, orderChange, addSub, changeRight, current, setCurrent }) {
 
    return (
        subMenu.map(item => {
            if (item.status === "show") {
                let imgStatus='0';                      
                subMenu.map(list=>{
                    if(list.parent_id===item.id) imgStatus='+';         //자식이 하나라도 있으면 +이미지  없으면 0이미지
                });
            
                return <div key={item.id}><Line/><FirstItem item={item}
                    onAdd={onAdd} onRemove={onRemove} onHide={onHide} orderChange={orderChange}
                    addSub={addSub} subMenu={subMenu} changeRight={changeRight} current={current} setCurrent={setCurrent} imgStatus={imgStatus}/></div>
            }
        }
        )
      
    )

}

export default FirstMenu;