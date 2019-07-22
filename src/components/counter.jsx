import React from "react";
import { connect } from "../redux";
import { increase, decrease } from "../actions/conterActions";

const Counter = props => (
  <div>
    <button onClick={props.decrease}>-</button>
    <span>{props.count}</span>
    <button onClick={props.increase}>+</button>
  </div>
);

const mapStateToProps = state => ({
  count: state.counter.value
});
const mapDispatchToProps = dispatch => ({
  increase: () => dispatch(increase()),
  decrease: () => dispatch(decrease())
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
