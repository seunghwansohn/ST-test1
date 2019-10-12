import React, { Component } from 'react';
import Customer from './components/Customer'
import './App.css';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { withStyles } from '@material-ui/core/styles';

const styles = (theme => ({
  root: {
  width: "100%",
  marginTop: theme.spacing(3),
  overflowX: 'auto'
  },
  table: {
  minWidth: 200
  },
  }));
  
  class App extends Component {
  
  state = {
    customers: ''
  }
  
  componentDidMount() {
  this.callApi()
    .then(res => this.setState({customers: res}))
    .catch(err => console.log(err));
  }
  
  callApi = async () => {
    const response = await fetch('/api/customers');
    const body = await response.json();
    return body;
  }

  render() {
    const { classes } = this.props;
    return (
      // <Paper className={classes.root}>
      //   <Table className={classes.table}>
      <div><Table>
          <TableHead>
            <TableRow>
              <TableCell align="right">번호</TableCell>
              <TableCell align="right">이미지</TableCell>
              <TableCell align="right">이름</TableCell>
              <TableCell align="right">생년월일</TableCell>
              <TableCell align="right">성별</TableCell>
              <TableCell align="right">직업</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          {this.state.customers ? this.state.customers.map(c => {
            return <Customer key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job} />
          }) : ''}
          </TableBody>
        </Table>
        </div>
      // </Paper>



    );
  }
}

export default withStyles(styles)(App);
  
  