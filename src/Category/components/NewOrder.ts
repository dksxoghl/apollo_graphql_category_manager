import React from 'react';

const NewOrder=(newContents)=> {
    console.log(newContents);
  return newContents.map((item,index) => {                 //집어넣는 위치 이후에있는 순서값들 1씩증가
        return { ...item, order: (index + 1) }; 
    });
}
// const newOrder=newContents.map((item,index) => {               
//     return { ...item, order: (index + 1) }; 
// });
export default NewOrder;