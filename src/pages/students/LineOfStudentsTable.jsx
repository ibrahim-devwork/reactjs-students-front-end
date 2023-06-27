
import React, {memo, useEffect, useState} from "react";
import Swal from "sweetalert2";
import axiosInstance from "../../tools/axiosInstance.js";

const LineOfStudentsTable = ({student, filter, setFilter}) => {
    const [isDeleted, setIsDeleted] = useState(false);

    const deleteStudents = async () => {
        try {
            setIsDeleted(false);
            const res = await axiosInstance.delete("/students-delete/" + student.id);
            setIsDeleted(true);
        } catch(error) {
            setIsDeleted(false);
            console.log(error);
        }
    }
    
    const handleDelete = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                deleteStudents();
            }
          })
    }

    useEffect(() => {
        if(isDeleted) {
            setFilter({
                ...filter,
                search: '',
                page: filter?.page,
                pageSize: filter?.pageSize,
            });
            Swal.fire(
                'Deleted!',
                'Your student has been deleted.',
                'success'
            );
        } 
    }, [isDeleted])

    return (
        <tr>
            <td>{student?.id}</td>
            <td>{student?.firstName} {student?.lastName} </td>
            <td>{student.age} </td>
            <td>{student?.email}</td>
            <td>
                <button type="button" className="btn btn-success" data-toggle="modal" data-target="#modal-update-user">
                    Update
                </button>
                <span> </span>
                <span> </span>
                <button onClick={handleDelete} type="button" className="btn btn-danger">
                    Delete
                </button>
            </td>
        </tr>
    );
}

export default memo(LineOfStudentsTable);