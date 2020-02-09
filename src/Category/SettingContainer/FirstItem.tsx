import React, { useState, useCallback } from 'react';
import { useQuery, useLazyQuery } from '@apollo/react-hooks';
import { GET_SUBCATEGORY } from '../../graphql/graphql';
import FirstMenu from './FirstMenu';
import { Box } from './styles'
function FirstItem({ item, onAdd, onHide, onRemove, orderChange, updateName, addSub }) {
  const [input, setInput] = useState(false);
  const [value, setValue] = useState('');
  const handleClick = () => {
    onAdd(item.id);
  }
  const handleHide = () => {
    onHide(item.id);
  }
  const handleRemove = () => {
    onRemove(item.id);
  }
  const handleUp = () => {
    orderChange(item, true);
  }
  const handleDown = () => {
    orderChange(item, false);
  }
  const handleUpdate = () => {
    setInput(true);
  }
  const appKeyPress = (e) => {
    if (e.key === 'Enter') {
      setInput(false);
      updateName(item, value);
    }
  }
  const handleChange = useCallback((e) => {
    setValue(e.target.value);
  }, [appKeyPress]);

  const handleAddSub = () => {
    addSub(item.id);
  }
  let minus = '';
  //  item.id.length > 6? '----' : 
  //  item.id.length>4 ? '--' :null  ;
  let split = item.id.split(':');
  for (let index = 0; index < split.length-1; index++) {
    minus += '--';
  }

  return (
    <Box>
      {minus}
      <button onClick={handleDown}>▼</button>
      <button onClick={handleUp}>▲</button>
      <button onClick={handleClick}>+</button>
      <button onClick={handleHide}>-</button>
      {input ? <input placeholder="제목수정" type="text" onKeyPress={appKeyPress} onChange={handleChange} /> :
        <Box onClick={handleUpdate}>{item.name}</Box>
      }
      <button onClick={handleRemove}>삭제</button>
      <button onClick={handleAddSub}>추가</button>
      {/* {menu} */}
      {/* {sub} */}
    </Box>

  );

}
export default FirstItem;