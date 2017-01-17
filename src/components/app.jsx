import React from 'react';

function App({name}) {
    return (
        <div>React simple starter {name}</div>
    );
}
App.propTypes = {
    name: React.PropTypes.string.isRequired
};

export default App;

// import React, {Component} from 'react';
//
// export default class App extends Component {
//     render() {
//         return (
//             <div>React simple starter {this.props.name}</div>
//         );
//     }
// }
// App.propTypes = {
//     name: React.PropTypes.string
// };
// App.defaultProps = {
//     name: ''
// };;
