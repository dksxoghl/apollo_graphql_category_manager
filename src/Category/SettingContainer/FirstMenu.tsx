import React, { useState } from 'react';
import FirstItem from './FirstItem';
import { Line } from './styles';

function FirstMenu({ parentList, subMenu, onAdd, onRemove, onHide, orderChange, addSub, changeRight, current, setCurrent }) {
    const [a, setA] = useState();

    // let menu;
    // subMenu !== null ?

    // let menu = subMenu.map(item => {
    //     return (<div key={item.id}>--<FirstItem item={item} onAdd={onAdd} menu={null} /></div>)
    // })

    //  :  menu = null


    // let menu;
    // if (a !== undefined) {
    //     menu = a.map((subItem) => {
    //         return <div key={subItem.id}>--<FirstItem item={subItem} onAdd={onAdd} menu={subItem} /></div>
    //     })
    // }

    return (
        subMenu.map(item => {
            if (item.status === "show") {
                let imgStatus='0';                      
                subMenu.map(list=>{
                    if(list.parent_id===item.id) imgStatus='+';         //자식이 하나라도 있으면 +이미지  없으면 0이미지
                });
                // if (subMenu.length > 1) {

                //     console.log(subMenu,typeof item,parentList.length)
                //     if (Array.isArray(item)) {
                //         setA(item);
                //         // item.map((subItem)=>{
                //         //   return <div key={subItem.id}>--<FirstItem item={subItem} onAdd={onAdd} menu={subItem} /></div>
                //         // })
                //     }
                //         console.log(a,menu);
                //     return <div key={item.id}><FirstItem item={item} onAdd={onAdd} menu={menu} /></div>
                // }
                return <div key={item.id}><Line/><FirstItem item={item}
                    onAdd={onAdd} onRemove={onRemove} onHide={onHide} orderChange={orderChange}
                    addSub={addSub} subMenu={subMenu} changeRight={changeRight} current={current} setCurrent={setCurrent} imgStatus={imgStatus}/></div>
            }
        }
        )
        // parentList.map((item => {
        //     if (subMenu.length>1) {
        //         console.log(subMenu)

        //         if(subMenu[0].parent_id === item.id)
        //         return <div key={item.id}><FirstItem item={item} onAdd={onAdd} menu={null} /></div>
        //     }
        //     return <div key={item.id}><FirstItem item={item} onAdd={onAdd} menu={null} /></div>
        // }
        // )
        // )
    )

}

export default FirstMenu;