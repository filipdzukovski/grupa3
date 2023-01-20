import React from 'react';

export class DomasnaClass extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            age: 0,
            showTable: true
        }
    }

    handleInputChange = (event) => {
        console.log(event)
        this.setState({
            [event.target.name]: event.target.value
                //firstName: event.target.value
                //lastName: event.target.value
                //email: event.target.value
        })
    }

    render() {
        return (
            <div>
                <input
                    type="text"
                    placeholder='Enter First Name'
                    value={this.state.firstName}
                    name={"firstName"}
                    onChange={this.handleInputChange}
                />
                <br />
                <br />
                <input
                    type="text"
                    placeholder='Enter Last Name'
                    value={this.state.lastName}
                    name={"lastName"}
                    onChange={this.handleInputChange}
                />
                <br />
                <br />
                <input
                    type="email"
                    placeholder="Enter Email"
                    value={this.state.email}
                    name={"email"}
                    onChange={this.handleInputChange}
                />
                <br />
                <br />
                <input
                    type="password"
                    placeholder='Enter Password'
                    value={this.state.password}
                    name={"password"}
                    onChange={this.handleInputChange}
                />
                <br />
                <br />
                <input
                    type="number"
                    placeholder='Enter Number'
                    min={0}
                    value={this.state.age}
                    name={"age"}
                    onChange={this.handleInputChange}
                />

                <br />
                <br />

                <button onClick={() => { this.setState({showTable: !this.state.showTable}) }}>{this.state.showTable === true ? 'Hide Results' : 'Show Results'}</button>

                <br />
                <br />
                {this.state.showTable && <table border="1">
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Password</th>
                            <th>Age</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{this.state.firstName}</td>
                            <td>{this.state.lastName}</td>
                            <td>{this.state.email}</td>
                            <td>{this.state.password}</td>
                            <td>{this.state.age}</td>
                        </tr>
                    </tbody>
                </table>}
            </div>
        )
    }
}