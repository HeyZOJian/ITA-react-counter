import {decrease, increase, multiply} from "../actions";
import Counter from "../components/Counter";
import {connect} from 'react-redux';

const mapStateToProps = (state, props) => {
    return {
        value: state[props.index]
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onIncrement: (index) => dispatch(increase(index)),
        onDecrement: (index) => dispatch(decrease(index)),
        onMultiply: (index,multiplier) => dispatch(multiply(index, multiplier)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);