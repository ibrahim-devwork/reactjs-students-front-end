import React, {memo} from 'react';
import ReactPaginate from "react-paginate";

const StudentsPagination = ({pageSize, filter, setFilter }) => {

    const handlePageClick = (event) => {
        let nbPage = event.selected + 1;
        setFilter({ ...filter, page: nbPage });
    };

    return (
        <div>
            <ReactPaginate
                previousLabel={"previous"}
                nextLabel={"next"}
                breakLabel={"..."}
                pageCount={pageSize}
                marginPagesDisplayed={2}
                pageRangeDisplayed={3}
                onPageChange={handlePageClick}
                containerClassName={"pagination"}
                pageClassName={"page-item"}
                pageLinkClassName={"page-link"}
                previousClassName={"page-item"}
                previousLinkClassName={"page-link"}
                nextClassName={"page-item"}
                nextLinkClassName={"page-link"}
                breakClassName={"page-item"}
                breakLinkClassName={"page-link"}
                activeClassName={"active"}
                forcePage={filter?.page - 1}
            />
        </div>
    )
}

export default memo(StudentsPagination);