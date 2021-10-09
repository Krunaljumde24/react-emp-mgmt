import React, { Component } from 'react';

class AddEmployee extends Component {
    render() {
        return (
            <div className="addEmp">
                <form action="/addEmployee" method="post">
                    <label htmlFor="name" className="form-label">First Name</label>
                    <input name="fName" id="fName" className="form-control" type="text" />
                    <label htmlFor="lName">Last Name</label>
                    <input name="lName" id="lName" className="form-control" type="text" />
                    <label htmlFor="emailId">Email Id</label>
                    <input name="emailId" id="emailId" className="form-control" type="text" /> <br/>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}

export default AddEmployee;