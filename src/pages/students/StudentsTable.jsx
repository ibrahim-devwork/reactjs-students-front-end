import React, {useEffect, memo, useState} from 'react';
import LineOfStudentsTable from './LineOfStudentsTable.jsx';
import StudentsPagination from './StudentsPagination';
// import UpdateUser from '../forms/UpdateUser';
import axiosInstance from "../../tools/axiosInstance.js";

const UsersTable = ({ filter, setFilter }) => {
    const [studentsData, setStudentsData] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [userUpdate, setUserUpdate] = useState({});

    const getAllStudents = async () => {
        try {
            setIsLoading(true);
            const res  = await axiosInstance.post("/students-all", filter);
            console.log(res?.data[0])
            setStudentsData(res?.data[0]);
            setIsLoading(false);
        } catch(error) {
            setIsLoading(false);
            console.log(error)
        }
    }

    useEffect(() => {
        getAllStudents();
    }, [filter]);

    return (
        <div>
            {isLoading? (
                <div className="spinner-border text-primary spinner-loading" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            ) : (
                <div>
                    {studentsData && (
                        <div>
                            <table id="project-table" className="table table-bordered table-striped">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Username</th>
                                        <th>Email</th>
                                        <th>Role</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {studentsData?.students?.map((student, index) => (
                                        <LineOfStudentsTable 
                                        key={index} 
                                        student={student} 
                                        filter={filter}
                                        setFilter={setFilter}
                                        // userUpdate={userUpdate} 
                                        // setUserUpdate={setUserUpdate}
                                        />
                                    ))}
                                </tbody>
                                <tfoot>
                                    <tr>
                                        <th>ID</th>
                                        <th>Full name</th>
                                        <th>Age</th>
                                        <th>Email</th>
                                        <th>Actions</th>
                                    </tr>
                                </tfoot>
                            </table>
                            <br />
                            <StudentsPagination
                                className='pagination'
                                pageSize={studentsData?.totalPage}
                                filter={filter}
                                setFilter={setFilter}
                            /> 
                                                           
                        </div>
                    )}
                </div>
            )}
            
        </div>
    )
}

export default memo(UsersTable);