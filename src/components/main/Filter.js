import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterBy, getTypes } from '../../actions';

export const Filter = () => {
  
  const dispatch = useDispatch();
  const types = useSelector((state) => state.types);
  
  useEffect(() =>{
    if (types.length === 0) dispatch(getTypes());
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  
  const handleChange = (e) => {
    dispatch(filterBy(e.target.value));
  };

  return (
    <select onChange={handleChange}>
      <option value="default">Filtrar por</option>
      <option value="existente">Existente</option>
      <option value="creado">Creado</option>
      {
        types && types.map(type => <option value={type} key={type}>{type}</option>)
      }
    </select>
  );
};