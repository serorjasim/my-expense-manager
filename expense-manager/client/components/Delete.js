import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Delete extends React.Component {

  constructor() {
    super();
    this.state = { id: '' };
    this.onClick = this.onClick.bind(this);
    this.delete = this.delete.bind(this);
  }

  componentDidMount() {
    this.setState({
      id: this.props.expense._id
    })
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      id: nextProps.expense._id,
      month: nextProps.expense.month,
      year: nextProps.expense.year
    })
  }

  onClick(e) {
    this.delete(this);
  }

  delete(e) {
    axios.get('/delete?id=' + e.state.id)
      .then(function (response) {

      });
  }

  render() {
    return (
      <Button bsStyle="danger" bsSize="small" onClick={this.onClick}>
        <Link to={{ pathname: '/', search: '' }} style={{ textDecoration: 'none' }}>
          <span className="glyphicon glyphicon-remove"></span>
        </Link>
      </Button>
    )
  }
}
export default Delete;