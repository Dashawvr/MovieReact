import React, {Component} from 'react';

const {Provider, Consumer: AuthConsumer} = React.createContext({
    isAuthorized: true
})

class AuthProvider extends Component {
    state = {isAuthorized: false};

    authorize = () => {
        this.setState({isAuthorized: true})
    }

    render() {
        const {isAuthorized} = this.state;
        return (
            <Provider value={{isAuthorized, authorize: this.authorize }}>
                {this.props.children}
            </Provider>
        );
    }
}

export function WithAuth() {
    return class AuthHOC extends Component{

    }
}

export { AuthProvider };
