import { Link } from 'react-router-dom';
import s from './card.module.css';

export const Card = ({img, name, type}) => {
  
  return (
    <div className={s.container}>
      <h3>
        <Link to={`/detail/${name}`} className={s.link}>
          {name}
        </Link>
      </h3>
      <img src={img} alt={name}/>
      <p>{JSON.stringify(type)}</p>
    </div>
  );
};