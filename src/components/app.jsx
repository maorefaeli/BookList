import React, {Component} from 'react';
import BookList from '../containers/book-list';
import BookDetail from '../containers/book-detail';

export default class App extends Component {
  render() {
    return (
      <div>
        <BookList/>
        <BookDetail/>
      </div>
    );
  }
}
App.propTypes = {
  name: React.PropTypes.string
};
App.defaultProps = {
  name: ''
};

// import React from 'react';
//
// function App({name}) {     return (         <div>React simple starter {name}</div>     ); }
// App.propTypes = {     name: React.PropTypes.string.isRequired };
//
// export default App;
