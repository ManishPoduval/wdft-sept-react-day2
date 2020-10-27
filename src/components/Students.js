import React, { Component } from 'react'
import StudentDetail from './StudentDetail'


class Students extends Component {

    state = {
        students: [
            {id: 1, name: 'Rafa', city:'Madrid'},
            {id: 2, name: 'Britta', city:'Berlin'},
            {id: 3, name: 'Lanette', city:'Amsterdam'},
            {id: 4, name: 'Joel', city:'Hamburg'},
            {id: 5, name: 'Marta', city:'Sevilla'},
            {id: 6, name: 'Joel', city:'Hamburg'},
            {id: 7, name: 'Gonzalo', city:'Valencia'},
            {id: 8, name: 'Alvaro', city:'Bilbao'},
            {id: 9, name: 'Gunner', city:'London'},
            {id: 10, name: 'Jorge', city:'Barcelona'},
            ]
    }

    handleSort = () => {
        // deep cloning
        let cloneStudents = JSON.parse(JSON.stringify(this.state.students))
        cloneStudents.sort((a,b) => {
            if (a.name > b.name) {
                return 1
            }
            else if (a.name < b.name) {
                return -1
            }
            else {
                return 0
            }
        })

        this.setState({
            students: cloneStudents
        })

    }

    handleDelete = (someId) => {
        //delete the element here
        console.log('Delete called', someId)
        let filteredStudents = this.state.students.filter((student) => {
            return student.id !== someId
        })
        console.log(filteredStudents)
        this.setState({
            students: filteredStudents
        })
    }

    render() {

        return (
            <div>
                <button onClick={this.handleSort} >Sort</button>
                {
                    this.state.students.map((student, i) => {
                        // student =   {id: 1, name: 'Rafa', city:'Madrid'}
                        return <StudentDetail 
                            key={student.id} 
                            detail={student} 
                            deleteHandler={this.handleDelete}
                        />

                    })
                }
            </div>
        )
    }
}

export default Students