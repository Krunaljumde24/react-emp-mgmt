import React, { Component } from 'react';

class ListEmployee extends Component {
    constructor(props){
        super(props)
        this.state = {
            employee: [{
                "id":"001",
                "firstName":"krunal",
                "lastName":"jumde",
                "emailId":"krunaljumde24@gmail.com"
            }]
        }
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Employee List</h2>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Employee First Name</th>
                                <th>Employee Second Name</th>
                                <th>Employee Email Id</th>
                                <th>Actions </th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                this.state.employee.map(
                                    emp =>{
                                        <tr key= {emp.id}>
                                            <td>{emp.firstName}</td>
                                            <td>{emp.lastName}</td>
                                            <td>{emp.emailId}</td>
                                        </tr>
                                    }
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default ListEmployee;