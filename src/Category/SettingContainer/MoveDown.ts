export const MoveDown = (contents, value, type) => {
    console.log(contents,'순서~~~~~~~~~~~',value,type)
    const index = contents.indexOf(value);
    let newPos = type? index - 1 : index + 1

    if (index === -1) 
         throw new Error("Element not found in  content");
    
    const newContents = JSON.parse(JSON.stringify(contents));
    if (newPos >= contents.length)
        newPos = contents.length;
    newContents.splice(index, 1);
    newContents.splice(newPos, 0, value);
    return newContents;
};