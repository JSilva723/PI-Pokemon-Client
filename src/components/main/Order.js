import { useDispatch } from "react-redux";
import { orderBy } from "../../actions";

export const Order = () => {
  
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(orderBy((e.target.value)));
  };
  
  return (
    <select onChange={handleChange}>
      <option value="default">Ordenar por</option>
      <option value="ascendente_attack">Ascendente Fuerza</option>
      <option value="descendente_attack">Descendente Fuerza</option>
      <option value="ascendente_name">Ascendente Albaetico</option>
      <option value="descendente_name">Ascendente Albaetico</option>
    </select>
  );
};