import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import actions from './redux/actions';

class Home extends PureComponent {

    componentDidMount() {
        this.props.getText("My name is Sameer Thite");
    }

    render() {
        return (
            <div>
                Home{" "}
                { this.props.text }
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        text: state.home.text
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getText: (value) => dispatch(actions.getText(value)),
        setText: (value) => dispatch(actions.setText(value)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
