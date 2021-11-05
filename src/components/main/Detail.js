import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const Detail = () => {

  const { name } = useParams();
  const pokes = useSelector((state) => state.items);
  const poke = pokes.find(poke => poke.name === name);

  return (
    <>{
      poke && <div>
        <h3>{poke.name}</h3>
        <img src={poke.img} alt={poke.name}/>
        <p>{poke.hp}</p>
        <p>{poke.attack}</p>
        <p>{poke.defense}</p>
        <p>{poke.speed}</p>
        <p>{poke.height}</p>
        <p>{poke.weight}</p>
        {
          poke.type.map((type, idx) => <p key={idx}>{type}</p>)
        }
      </div>
    }</>
  );
};
