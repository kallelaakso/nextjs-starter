import { useCount, useDispatchCount } from '../state/counter';
import styled from 'styled-components';

const Title = styled.h1`
  color: red;
  font-size: 50px;
`;

const IndexPage = () => {
  const state = useCount();
  const dispatch = useDispatchCount();

  const handleIncrease = () => {
    alert('Increased');
    dispatch({
      type: 'INCREASE',
    });
  };

  const handleDecrease = () => {
    dispatch({
      type: 'DECREASE',
    });
  };

  return (
    <>
      <Title>HOME</Title>
      <p>Counter: {state.counter}</p>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>
    </>
  );
};

export default IndexPage;
