import Link from 'next/link';
import { useCount, useDispatchCount } from '../state/counter';

const CustomPage = () => {
  const count = useCount();
  const dispatch = useDispatchCount();

  const handleIncrease = () => {
    dispatch({
      type: 'INCREASE',
    });
  };

  const handleIncrease15 = () => {
    dispatch({
      type: 'INCREASE_BY',
      payload: 15,
    });
  };

  return (
    <>
      <div>
        <Link href="/">
          <a>Home</a>
        </Link>
      </div>
      <h1>Title</h1>
      <p>Counter: {count}</p>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleIncrease15}>Increase By 15</button>
    </>
  );
};

export default CustomPage;
