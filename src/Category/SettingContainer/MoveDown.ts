import NewOrder from "./NewOrder";

export const MoveDown = (contents, value, type,child,behind) => {
    console.log(contents,'순서~~~~~~~~~~~',value,type,child.length,behind.length)
    const index = contents.indexOf(value);
    let newPos = type? index - behind.length : index + behind.length
    // contents.filter(list => list.parent_id === item.id);
    // if (index === -1) 
    //      throw new Error("Element not found in  content");
    
    const newContents = JSON.parse(JSON.stringify(contents));
    if (newPos >= contents.length)
        newPos = contents.length;
    newContents.splice(index, child.length);
    for (let index = 0; index < child.length; index++) {
        newContents.splice(newPos+index, 0, child[index]);
    }
    // const newOrder=newContents.map((item,index) => {                 //집어넣는 위치 이후에있는 순서값들 1씩증가
    //     return { ...item, order: (index + 1) }; 
    // });
    const newOrder= NewOrder(newContents);
    return newOrder;
};