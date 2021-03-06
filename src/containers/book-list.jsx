import React, {Component} from 'react';
import {connect} from 'react-redux';
// import {bindActionCreators} from 'redux';
import {selectBook} from '../actions';

class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li key={book.id} className="list-group-item">
          <a href='#' onClick={() => this.props.selectBook(book)}>
            {book.title}
          </a>
        </li>
      );
    });
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  return {books: state.books};
}

// function mapDispatchToProps(dispatch) { return bindActionCreators({ selectBook }, dispatch); }

export default connect(mapStateToProps, {selectBook})(BookList);
