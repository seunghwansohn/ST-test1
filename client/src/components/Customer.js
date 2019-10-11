import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';


class Customer extends React.Component {
    render() {
        return (
            <div>
                {/* <CustomerProfile id = {this.props.id} image={this.props.image} name={this.props.name}/>
                <CustomerInfo birthday = {this.props.birthday} gender={this.props.gender} job={this.props.job}/> */}

                <TableRow>
                    <TableCell>{this.props.id}</TableCell>
                    <TableCell><img src={this.props.image} alt="profile"/></TableCell>
                    <TableCell> {this.props.name}</TableCell>
                    <TableCell> {this.props.birthday}</TableCell>
                    <TableCell> {this.props.gender}</TableCell>
                    <TableCell> {this.props.job}</TableCell>

                </TableRow>
            </div>
        )
    }
}

class CustomerProfile extends React.Component {
    render() {
        return (
            <div>
                <p>{this.props.id}</p>
                <img src={this.props.image} alt="profile"/>
                <p>{this.props.name}</p>
            </div>
        )
    }
}

class CustomerInfo extends React.Component {
    render() {
        return (
            <div>
                <p>{this.props.birthday}</p>
                <p>{this.props.gender}</p>
                <p>{this.props.job}</p>
            </div>

        )
    }
}

export default Customer;
