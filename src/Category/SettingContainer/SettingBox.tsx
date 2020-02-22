import React, { useState, useEffect } from 'react';
import FirstMenu from './FirstMenu';
import { CBox } from './styles';
import { ParentAddSpan, SaveSpan } from './styles';
import { MoveDown } from './MoveDown';
import NewOrder from './NewOrder';

function SettingBox({ categories, onSave, changeRight, active, handleName }) {
    console.log(categories)
    // const [selectID, setSelectID] = useState("");
    const [deleteId, setDeleteId] = useState([""]);
    const [insertId, setInsertId] = useState([""]);
    const [subMenu, setSubMenu] = useState({
        // category: parentList
        category: categories
    });
    const [current, setCurrent] = useState("");


    useEffect(() => {
        if (handleName.id === undefined) { return; }
        let parentList = subMenu.category.filter(list => list.parent_id === handleName.parent_id);
        let check = false;
        parentList.map(item => {
            if (item.name === handleName.name) check = true;
        });
        if (check) return alert('같은 depth에 중복된이름이 있습니다');
        setSubMenu({
            category: subMenu.category.map(list => {
                if (handleName.id.length === 0) return list;
                if (list.id === handleName.id) {
                    return ({ ...list, name: handleName.name });
                }
                return list;
            })
        })
        console.log('이름변경')
    }, [handleName]);
    useEffect(() => {
        if (active.id === undefined) return;
        let aId= active.id+':';
        setSubMenu({
            category: subMenu.category.map(list => {
                if (active.id.length === 0) return list;
                if (list.id.slice(0, active.id.length+1) === aId) {                       
                    return ({ ...list, active: active.active });
                }
                if (list.id === active.id) {                         
                    return ({ ...list, active: active.active });
                }
                return list;
            })
        })
      
        console.log('활성화변경');
    }, [active]);


    // const updateName = (item, value) => {
    //     console.log(item, value);
    //     setSubMenu({
    //         category: subMenu.category.map(list => {
    //             if (list.id === item.id) {
    //                 console.log(true);
    //                 return ({ ...list, name: value })
    //             }
    //             return list;
    //         })
    //     })
    // }
    const orderChange = (item, type) => {           //순서바꾸기
        if ((item.order === 1 && type) || item.order === subMenu.category.length && !type) return;
        if (type && subMenu.category[item.order - 2].id === item.parent_id) {       //위로갈때 
            return alert('같은 그룹 내에서만 이동이 가능합니다.');
        }

        if (!type) { //아래로갈때
            let x, y;
            x = subMenu.category[item.order].id.split(':');
            y = item.id.split(':');
            if (x.length < y.length)
                return alert('같은 그룹 내에서만 이동이 가능합니다.');
        }
        // if (!type && subMenu.category[item.order].id.length < item.id.length) { //아래로갈때
        //     return alert('같은 그룹끼리만 이동가능');
        // }
        let child = subMenu.category.filter(list => {
            let len = item.id.length;
            if (list.id === item.id) return list;
            if (list.id.slice(0, len + 1) === (item.id + ':')) return list;
        });

        let below;

        if (!type) {                                        // 아래로갈때 다른 대 중분류일시 수정불가
            below = subMenu.category.slice((item.order - 1) + child.length, (item.order - 1) + child.length + 1);
            console.log(below);
            if (below.length < 1) return;
            let x, y;
            x = below[0].id.split(':');
            y = item.id.split(':');
            if (x.length < y.length)
                return alert('같은 그룹 내에서만 이동이 가능합니다.');
            // else if (!type && below[0].id.length < item.id.length) {
            //     return alert('같은 그룹d끼리만 이동가능');
            // }
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
        let c = below[0].id.split(":");
        console.log(c);
        let behind = subMenu.category.filter(list => {              //자신포함하위항목들 아이디로 찾기
            let findArray = list.id.split(":");
            let findId = '';
            for (let index = 0; index < c.length; index++) {
                findId += findArray[index] + ':';
            }
            findId = findId.substring(0, findId.length - 1);
            console.log(findId);
            if (findId === below[0].id) return list;
            // let findId = list.id.split(":");
            // if(findId[0]=== below[0].id) return list;

            // let len = below[0].id.length;
            // if (list.id.slice(0, len) === below[0].id) return list;
        });
        console.log(child, 'child', behind);
        setSubMenu({ category: MoveDown(subMenu.category, item, type, child, behind) })
    }
    const onAdd = (id) => {     //보여주기  (+)버튼
        console.log(id);
        setSubMenu({
            category: subMenu.category.map(list => {
                if (list.parent_id === id) {
                    console.log(true);
                    return ({ ...list, status: 'show' });
                }
                return list;
            })
        })
    }
    const onHide = (id) => {            //숨기기    (-)버튼
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
    }

    const onRemove = (id) => {
        console.log(id);
        if (window.confirm('하위목록 다삭제됨')) {
            let dId = id + ':';
            let childDelete = subMenu.category;
            childDelete = childDelete.filter(i => i.id.slice(0, id.length + 1) !== dId);       //선택된아이디랑 현재 상태에있는 목록아디 및 하위목록들 비교  
            childDelete = childDelete.filter(i => i.id !== id);
            setSubMenu({ category: NewOrder(childDelete) });                                     //order재정렬
            // subMenu.category.map((item) => {
            //     if (id === item.id.slice(0, id.length)) { //선택된아이디랑 현재 상태에있는 목록아디 및 하위목록들 비교
            //         console.log(item.id.slice(0, id.length))
            //         let childDelete = subMenu.category.filter(i => i.id.slice(0, id.length) !== id);
            //         setSubMenu({ category: NewOrder(childDelete) });                                     //order재정렬
            //     }
            // })
            setDeleteId(deleteId.concat(id));
            setInsertId(insertId.filter(insertId => insertId.slice(0, id.length) !== id))
        } else {
        }
    }
    const addSub = (id) => {                //하위목록추가,
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
            parentList = parentList.concat(subMenu.category.filter(list => list.parent_id === parentList[parentList.length - 1].id));   //하위목록 추가시 제일아래목록에 추가 child있을시 고려.
        }
        else {
            newId = id + ':a0';
            parentList = subMenu.category.filter(list => list.id === id);
        }
        console.log(parentList);
        let name =
            newId.split(':').length === 2 ? '중_' : '소_';
        let parent = {
            id: newId,
            name: name,
            parent_id: id,
            status: "show",
            order: parentList[parentList.length - 1].order + 1,
            active: subMenu.category[parentList[parentList.length - 1].order - 1].active,               //바로 위항목의 활성화상태로 생성
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
  
    const handleClick = () => {             //저장이벤트, 카테고리와 눌럿던 삭제,추가버튼아이디들 담아서보냄
        onSave(subMenu.category, deleteId, insertId);
        setDeleteId([""]);
        setInsertId([""]);
    }
    const addParent = () => {               //대분류 추가
        // const parentList = subMenu.category.filter(list => list.parent_id === null);
        // let a = parentList[parentList.length - 1].id.split('a');
        // let id = 'a' + (parseInt(a[1]) + 1);
        const parentList = subMenu.category.filter(list => list.parent_id === null);
        console.log(parentList)
        let big = 0;
        parentList.map((item) => {
            if (parseInt(item.id.split('a')[1]) > big) big = parseInt(item.id.split('a')[1]);
        })
        console.log(big)
        // let a = big.split('a');      
        // let id = 'a' + (parseInt(a[1]) + 1);
        let id = 'a' + (big + 1);
        let parent = {
            id: id,
            name: "대_",
            parent_id: null,
            status: "show",
            order: subMenu.category.length + 1,
            active: true,
            __typename: "categories2"

        }
        setSubMenu({ category: subMenu.category.concat(parent) });
        setInsertId(insertId.concat(id));

    }

    let menu = <FirstMenu  subMenu={subMenu.category} onAdd={onAdd} onRemove={onRemove} onHide={onHide} orderChange={orderChange}
        addSub={addSub} changeRight={changeRight} current={current} setCurrent={setCurrent}
    />;
    return (
        <div>
            <CBox>

                {/* <FirstMenu parentList={m.nodes} onAdd={onAdd} /> */}
                {/* {menu&&menu} */}
                {/* {m} */}
                {menu}
                {/* {addChild} */}
            </CBox>

            <ParentAddSpan>
                <button className='ant-btn-primary' onClick={addParent}>
                    +대분류 추가하기
              </button>
            </ParentAddSpan>
            <SaveSpan>
                <button className='ant-btn-primary' onClick={handleClick}>
                    저장
              </button>
            </SaveSpan>
        </div>
    );
}
export default SettingBox;