import { Card } from './Card';
import { filterItems } from '../../utils';

export const Cards = ({ items, filter, order }) => {
  
  let parseItems = filterItems(items, filter);
  
  
  
  return (
    <>
      {
        parseItems
          ? parseItems.map(poke => <Card key={poke.name} name={poke.name} img={poke.img} type={poke.type} />)
          : <p>Cargando...</p>
      }
    </>
  );
};