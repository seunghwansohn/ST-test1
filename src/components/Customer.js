import React from 'react';

class Customer extends React.Component {
    render() {
        return (
            <div>
                <p>{this.props.id}</p>
                <p>{this.props.image}</p>
                <h2>{this.props.name}</h2>
                <p>{this.props.birthday}</p>
                <p>남자</p>
                <p>대학생</p>
            </div>
        )
    }
}

export default Customer;
