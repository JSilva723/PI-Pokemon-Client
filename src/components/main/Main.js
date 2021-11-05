import { Cards } from './Cards';
import { Header } from './Header';
import s from './main.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getPokes } from '../../actions';
import { useEffect } from 'react';

export const Main = () => {

  const pokes = useSelector((state) => state.pokes);
  const filterBy = useSelector((state) => state.filterBy);
  const orderBy = useSelector((state) => state.oderBy);
  const discpatch = useDispatch();
  let start = 1;
  let end = 9;

  useEffect(() => {
    discpatch(getPokes(start, end));
  }, []);

  const handlePrev = () => {
    if (start > 1) {
      if (start !== 10 && end !== 40) {
        start = start - 13;
        end = end - 13;
      } else if (start === 10) {
        start = 1;
        end = end - 13;
      } else if (end === 40) {
        start = start - 13;
        end = 35;
      }
    }
    discpatch(getPokes(start, end));
  };

  const handleNext = () => {
    if (end < 40) {
      if (start !== 1 && end !== 35) {
        start = start + 13;
        end = end + 13;
      } else if (end === 35) {
        start = start + 13;
        end = 40;
      } else if (start === 1) {
        start = 10;
        end = end + 13;
      }
    }
    discpatch(getPokes(start, end));
  };
  console.log(pokes);
  return (
    <>
      <Header />
      <main className={s.container}>
        <h1>Items</h1>
        {<button onClick={handlePrev}>prev</button>}
        {<button onClick={handleNext}>next</button>}
        <Cards items={pokes} filter={filterBy} order={orderBy}/>
      </main>
    </>
  );
};