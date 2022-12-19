import React, {useState, useEffect} from "react";
import User from "./user";
import Pagination from "./pagination";
import {paginate} from '../utils/paginate';

const Users = ({ users, ...rest }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const count = users.length;
    const pageSize = 4;

    const handlePageChange = (pageIndex) => {
        setCurrentPage(pageIndex);
    }

    const userCrop = paginate(users, pageSize, currentPage);

    return (
        <>
            {count > 0 && (
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Имя</th>
                            <th scope="col">Качества</th>
                            <th scope="col">Провфессия</th>
                            <th scope="col">Встретился, раз</th>
                            <th scope="col">Оценка</th>
                            <th scope="col">Избранное</th>
                            <th />
                        </tr>
                    </thead>
                    <tbody>
                        {userCrop.map((user) => (
                            <User key={user._id} {...rest} {...user} />
                        ))}
                    </tbody>
                </table>
            )}
            <Pagination 
                itemsCount={count} 
                pageSize={pageSize}
                currentPage={currentPage}
                onPageChange={handlePageChange} 
            />
        </>
    );
};

export default Users;
