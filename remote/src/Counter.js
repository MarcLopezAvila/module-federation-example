import { useState } from 'react';
import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: red;
`;

const Counter = ({ text }) => {
  const [count, setCount] = useState(0);

  return (
    <Wrapper>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me!!!!
      </button>
      <span>{text}</span>
    </Wrapper>
  );
}
export default Counter;
