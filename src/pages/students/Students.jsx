import React, { useState } from 'react';
import StudentsTable from './StudentsTable.jsx';
import './Students.css';
import StudentFilter from './StudentFilter.jsx';

const Students = () => {
    const [filter, setFilter] = useState({
        page : 1,
        pageSize : 5,
        search : ""
    });

    return (
        <div>
            <section className="content-header mt-1">
                <div className="container">
                    <div className="row mb-2">
                        <div className="col-sm-6">
                            <h1>List of students</h1>
                        </div>
                        <div className="col-sm-6">
                            
                        </div>
                    </div>
                </div>
            </section>

            <section className="content">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <div className="card">
                                <div className="card-header">
                                    <StudentFilter  filter={filter} setFilter={setFilter} />
                                </div>
                                <div className="card-body">
                                    <StudentsTable  filter={filter} setFilter={setFilter} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    </div>
    )
}

export default Students;