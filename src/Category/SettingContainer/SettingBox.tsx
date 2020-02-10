import React, { useState, useEffect } from 'react';
import FirstMenu from './FirstMenu';
import { CBox } from './styles';
import {
    Container,
    TitleBox,
    ContentBox,
    Title,
    UnderLine,
    AdminAddFormBox,
    AdminTableBox,
    ButtonSpan,
    ButtonBox
} from "../styles";
import { MoveDown } from './MoveDown';
import NewOrder from './NewOrder';

function SettingBox({ categories, onSave }) {
    const [selectID, setSelectID] = useState("");
    const [deleteId, setDeleteId] = useState([""]);
    const [insertId, setInsertId] = useState([""]);
    let parentList = categories.filter(list => list.parent_id === null);
    const [subMenu, setSubMenu] = useState({
        // category: parentList
        category: categories
    });

    // const addChild=(id)=>{
    //     // if(id!==index) return m.nodes[index];
    //     let parentList = categories.filter(list => list.parent_id === id);
    //     // return  initializedСopy(parentList);    
    //     const nodesCopy = [{}];
    //     for (let i = 0; i < parentList.length; i++) {
    //         nodesCopy[i] = { 
    //                          id: parentList[i].id,
    //                          name: parentList[i].name,
    //                          parent_id: parentList[i].parent_id,
    //                          child: addChild(selectID),
    //                  };
    //       }
    //     return nodesCopy;
    // }
    // const initializedСopy=(parentList)=>{
    //     console.log(parentList)
    //     const nodesCopy = [{}];
    //     let child;
    //     for (let i = 0; i < parentList.length; i++) {
    //         // if(parentList[i].id===selectID){
    //             if(selectID!=="") child=addChild(selectID);
    //         // }
    //         nodesCopy[i] = { 
    //                          id: parentList[i].id,
    //                          name: parentList[i].name,
    //                          parent_id: parentList[i].parent_id,
    //                          child: child,
    //                  };
    //                  child=[{}];      
    //       }
    //     return nodesCopy;
    // }
    // const [m, setM] = useState({
    //     nodes: initializedСopy(parentList),
    // });
    const updateName = (item, value) => {
        console.log(item, value);
        setSubMenu({
            category: subMenu.category.map(list => {
                if (list.id === item.id) {
                    console.log(true);
                    return ({ ...list, name: value })
                }
                return list;
            })
        })
    }
    const orderChange = (item, type) => {
        if ((item.order === 1 && type) || item.order === subMenu.category.length && !type) return alert('최상위, 최하위입니다.');
        if (type && subMenu.category[item.order - 2].id === item.parent_id) {       //위로갈때 
            return alert('같은 그룹끼리만 이동가능');
        }
        if (!type && subMenu.category[item.order].id.length < item.id.length) { //아래로갈때
            return alert('같은 그룹끼리만 이동가능');
        }
        let child = subMenu.category.filter(list => {
            let len = item.id.length;
            if (list.id.slice(0, len) === item.id) return list;
        });
        let below;
        if (!type) {
            below = subMenu.category.slice((item.order - 1) + child.length, (item.order - 1) + child.length + 1);
            if (!type && below[0].id.length < item.id.length) {             // 아래로갈때 다른 대 중분류일시 수정불가
                return alert('같은 그룹끼리만 이동가능');
            }
        } else {
            let parentList = subMenu.category.filter(list => list.parent_id === item.parent_id);
            console.log(parentList, item);
            let findIndex = parentList.indexOf(item);
            console.log(findIndex);
            below = [parentList[findIndex - 1]];
            // let arr=item.id.split(':');                         
            // let findId= parseInt(arr[arr.length-1].slice(1,arr[arr.length-1].length))-1;  
            // let find= 'a'+findId;
            // let id='';
            // for (let index = 0; index < arr.length-1; index++) {
            //     id += (arr[index]+':');
            // } 
            // id+=find;
            // console.log(id);
            // // let findId= parseInt(item.id);
            // below = subMenu.category.filter(list => list.id === id);
            console.log(below);
        }
        let behind = subMenu.category.filter(list => {
            let len = below[0].id.length;
            if (list.id.slice(0, len) === below[0].id) return list;
        });
        console.log(child);
        // let parentList = subMenu.category.filter(list => list.parent_id === item.id);
        setSubMenu({ category: MoveDown(subMenu.category, item, type, child, behind) })
    }
    const onAdd = (id) => {
        console.log(id);
        // const sub= subMenu.category
        // parentList.map((item)=>{
        // subMenu.category.concat(item);
        setSubMenu({
            category: subMenu.category.map(list => {
                if (list.parent_id === id) {
                    console.log(true);
                    return ({ ...list, status: 'show' });
                }
                return list;
            })
        })

        // })
        // setSelectID(id);
        // menu.push( <FirstMenu parentList={parentList} onAdd={onAdd} />)
        // m.push(<div>aa</div>);
        //    setM()
    }
    const onHide = (id) => {
        console.log(id);
        setSubMenu({
            category: subMenu.category.map(list => {
                let pId;
                if (list.parent_id)
                    pId = list.parent_id.slice(0, id.length);
                if (id === pId) {
                    console.log(false);
                    return ({ ...list, status: 'hide' });
                }
                return list;
            })
        })
        // subMenu.category.map((item) => {
        //     // if(id===item.id) return;
        //     if (id === item.id.slice(0,id.length)){ //선택된아이디랑 현재 상태에있는 목록아디 및 하위목록들 비교
        //         console.log(item.id.slice(0,id.length))
        //      setSubMenu({ category: subMenu.category.filter(i=>i.id.slice(0,id.length)!==id) });
        //     }
        // })
    }

    const onRemove = (id) => {
        console.log(id);
        if (window.confirm('하위목록 다삭제됨')) {
            subMenu.category.map((item) => {
                if (id === item.id.slice(0, id.length)) { //선택된아이디랑 현재 상태에있는 목록아디 및 하위목록들 비교
                    console.log(item.id.slice(0, id.length))
                    let childDelete = subMenu.category.filter(i => i.id.slice(0, id.length) !== id);
                    setSubMenu({ category: NewOrder(childDelete) });                                     //order재정렬
                }
            })
            setDeleteId(deleteId.concat(id));
        } else {
        }
    }
    const addSub = (id) => {
        let parentList = subMenu.category.filter(list => list.parent_id === id);  //하위항목들구하고
        let newId = '';
        if (parentList.length > 0) {
            let arr = parentList[parentList.length - 1].id.split(':');                  //:하위항목 마지막꺼 구분자로 자르고
            let selectArr = arr[arr.length - 1].slice(1, arr[arr.length - 1].length);        //아이디의 마지막꺼 문자도자르고
            let endId = 'a' + (parseInt(selectArr) + 1);
            for (let index = 0; index < arr.length - 1; index++) {
                newId += arr[index] + ':';
            }
            newId += endId;
        }
        else {
            newId = id + ':a0';
            parentList = subMenu.category.filter(list => list.id === id);
        }
        console.log(parentList);

        let parent = {
            id: newId,
            name: "수정요망",
            parent_id: id,
            status: "show",
            order: parentList[parentList.length - 1].order + 1,
            __typename: "categories2"

        }
        let num = parentList[parentList.length - 1].order;
        let addArr = subMenu.category.map(item => {                 //집어넣는 위치 이후에있는 순서값들 1씩증가
            if (item.order < parent.order) { return item; }
            else { return { ...item, order: (item.order + 1) }; }
        });

        // setSubMenu({
        //     category: subMenu.category.map(item=>{
        //         if(item.order<parent.order) { return item;}
        //         else {return {...item, order: (item.order+1)};}
        //     })
        // });
        setSubMenu({ category: [...addArr.slice(0, num), parent, ...addArr.slice(num, subMenu.category.length)] }); //객체를 배열 원하는위치안에 삽입
        setInsertId(insertId.concat(newId));

    }
    //전체객체관리 
    useEffect(() => {
        let parentList = subMenu.category.filter(list => list.parent_id === null);

        // if (parentList.length > 1) {
        //     let b = true;     //이미 추가된 목록이라면 추가불가
        //     subMenu.category.map((item) => {
        //         if (item.parent_id === selectID) b = false;
        //     })

        //     if (b) (
        //         setSubMenu({ category: subMenu.category.concat(parentList) })
        //     )
        // }
        // //  setSubMenu(old=>[...old,parentList]); 
        console.log(subMenu, parentList, '~~~~~');
    }, [selectID, addSub])

    // let menu=[<div></div>];





    // for (const [key, value] of parentList.entries()) {
    //     menu.push( <FirstMenu parentList={parentList} onAdd={onAdd} />)
    //   }
    // menu.push( <FirstMenu parentList={parentList} onAdd={onAdd} />)
    // m.push( <FirstMenu parentList={parentList} onAdd={onAdd} />)
    // let addChild =()=>{return <div>aa</div>}


    // const menu = () => {
    //     for (let index = 0; index < array.length; index++) {
    //         const element = array[index];
    //        return( <FirstMenu categories={categories} onAdd={onAdd} />)
    //     }
    // }
    const handleClick = () => {
        onSave(subMenu.category, deleteId, insertId);
        setDeleteId([""]);
        setInsertId([""]);
    }
    const addParent = () => {
        const parentList = subMenu.category.filter(list => list.parent_id === null);
        let a = parentList[parentList.length - 1].id.split('')
        let id = a[0] + (parseInt(a[1]) + 1);
        let parent = {
            id: id,
            name: "수정요망",
            parent_id: null,
            status: "show",
            order: subMenu.category.length + 1,
            __typename: "categories2"

        }
        setSubMenu({ category: subMenu.category.concat(parent) });
        setInsertId(insertId.concat(id));
    }

    let menu = <FirstMenu parentList={parentList} subMenu={subMenu.category} onAdd={onAdd} onRemove={onRemove} onHide={onHide} orderChange={orderChange} updateName={updateName}
        addSub={addSub}
    />;
    return (
        <CBox>
            {/* <FirstMenu parentList={m.nodes} onAdd={onAdd} /> */}
            {/* {menu&&menu} */}
            {/* {m} */}
            {menu}
            {/* {addChild} */}
            <ButtonSpan>
                <button onClick={addParent}>
                    대분류추가
                  </button>
            </ButtonSpan>
            <ButtonSpan>
                <button onClick={handleClick}>
                    저장
                  </button>
            </ButtonSpan>
        </CBox>
    );
}
export default SettingBox;