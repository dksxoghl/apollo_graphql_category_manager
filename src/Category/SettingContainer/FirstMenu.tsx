import React, { useState } from 'react';
import FirstItem from './FirstItem';

function FirstMenu({ parentList, subMenu, onAdd, onRemove, onHide, orderChange, updateName, addSub}) {
    const [a, setA] = useState();
    console.log(subMenu, parentList, '~~~~~');

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


    // const onAdd = (id) => {
    //     console.log(id);

    //     const { loading, error, data } = useQuery(GET_SUBCATEGORY);
    //     if (loading) return <p>'Loading...'</p>;
    //     if (error) return <p>`Error! ${error.message}`</p>;
    //     else {
    //         const sub = data.categories;
    //         const menu = <FirstMenu parentList={sub} subMenu={sub} onAdd={onAdd} />;
    //         return (
    //           {menu}
    //         );
    //     }
    // }

    //setstate tsx물보기
    return (
        subMenu.map(item => {
            if (item.status === "show")
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
                return <div key={item.id}><FirstItem item={item} onAdd={onAdd} onRemove={onRemove} onHide={onHide} orderChange={orderChange} updateName={updateName} addSub={addSub} /></div>
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