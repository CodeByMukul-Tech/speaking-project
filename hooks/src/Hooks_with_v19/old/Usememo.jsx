import React, { useState, useMemo, Fragment } from 'react';

const Attendence_of_students = () => {
    const [students, setstudents] = useState([]);
    const [information, setinformation] = useState({ name: '', rollno: '', attendence: '', Image: '' });

    const studentList = useMemo(() => {
        return students.map((student, index) => (
            <tr key={index}>
                <td>{student.name}</td>
                <td>{student.rollno}</td>
                <td>{student.attendence}</td>
                <td><img src={student.Image} alt={student.name} width="50" height="50" /></td>
            </tr>
        ));
    }, [students]);

    return (
        <Fragment>
            <div>
                <div className='input-value'>
                    <label htmlFor="">Student Name: </label>
                    <input type='text' placeholder='Enter Name' value={information.name} onChange={(e) => setinformation({ ...information, name: e.target.value })} />
                    <label htmlFor="">Student Roll no: </label>
                    <input type='text' placeholder='Enter Rollno' value={information.rollno} onChange={(e) => setinformation({ ...information, rollno: e.target.value })} />
                    <label htmlFor="">Student attendence: </label>
                    <input type='text' placeholder='Enter Attendence' value={information.attendence} onChange={(e) => setinformation({ ...information, attendence: e.target.value })} />
                    <label htmlFor="">Student Image: </label>
                    <input type='text' placeholder='Enter Image' value={information.Image} onChange={(e) => setinformation({ ...information, Image: e.target.value })} />
                    <button onClick={() => setstudents([...students, information])}>Submit</button>
                </div>
                <div className='output-value'>
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Roll No</th>
                                <th>Attendence</th>
                                <th>Image</th>
                            </tr>
                        </thead>
                        <tbody>
                            {studentList}
                        </tbody>
                    </table>
                </div>
            </div>
        </Fragment>
    );
}

export default Attendence_of_students;
