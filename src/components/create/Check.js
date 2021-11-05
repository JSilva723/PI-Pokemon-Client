import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTypes } from '../../actions';

export const Check = ({ handleSelect }) => {
  
  const dispatch = useDispatch();
  const types = useSelector((state) => state.types);

  useEffect(() => {
    if (types.length === 0) dispatch(getTypes());
  },[]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div>
      {
        types && types.map(type => {
          return (
            <div key={type}>
              <label>{type}</label>
              <input name={type}
                type="checkbox"
                value={type}
                onChange={handleSelect}
              />
            </div>
          );
        })
      }
    </div>
  );
};
