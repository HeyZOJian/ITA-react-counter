import React, {Component} from 'react';

class Counter extends Component {

    constructor(props) {
        super(props);
        this.inputText = React.createRef();
    }

    multiple = () => {
        const multiplier = this.inputText.current.value
        const onMultiply = this.props.onMultiply;
        onMultiply(this.props.index, multiplier)
    }

    render() {
        const {value, onIncrement, onDecrement,onIncrementAsync, index} = this.props;

        return (
            <p>
                Clicked: {value} times
                {' '}
                <button onClick={()=>onIncrement(index)}>
                    +
                </button>
                <button onClick={()=>onDecrement(index)}>
                    -
                </button>
                <input type="text" defaultValue={0} ref={this.inputText}/>
                <button onClick={this.multiple}>
                    *
                </button>

                <button onClick={()=>onIncrementAsync(index)}>
                    Increment Async
                </button>
            </p>
        );
    }
}

export default Counter;
