import React, { useEffect } from 'react';
import {Route, Routes, useNavigate} from 'react-router-dom';

import Students from './pages/students/Students.jsx';

const AllRoutes = () => {

    return (
        <div>
            <Routes>
                <Route exact path="/" element={<Students />} />
            </Routes>
        </div>
    )
}

export default AllRoutes;