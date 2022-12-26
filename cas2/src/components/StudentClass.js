import React from 'react';

export class StudentClass extends React.Component {
    render() {
        console.log(this.props)
        return (
            <div id='student-class'>
                <div id="student">
                    <p>Br. Na Index: {this.props.student.index} </p>
                    <p>Ime: {this.props.student.name} </p>
                    <p>Fakultet: {this.props.student.college}</p>
                </div>
            </div>
        )
    }
}