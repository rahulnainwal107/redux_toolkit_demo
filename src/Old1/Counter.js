import React from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from './actions';

function Counter({ count, increment, decrement }) {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Counter: {count}</h1>
      <button onClick={increment} style={{ marginRight: '10px' }}>
        Increment
      </button>
      <button onClick={decrement}>
        Decrement
      </button>
    </div>
  );
}

// map state to props
const mapStateToProps = (state) => ({
  count: state.count,
});

// map dispatch to props
const mapDispatchToProps = {
  increment,
  decrement,
};

// connect and export
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
