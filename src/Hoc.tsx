import React, { Component } from 'react'

const initialState = {
    name: 'HOC',
    message: 'Higer Order Component!!'
}

type State = Readonly< typeof initialState>;

const messageHoc = (WrappedComponent: any) => {
    class Hoc extends Component<{}, State> {
        readonly state : State = initialState;
        render() {
            return (
                <WrappedComponent name={this.state.name} message={this.state.message} />
            )
        }
    }
    return Hoc;
}


export default messageHoc;