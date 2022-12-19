import PropTypes from 'prop-types';
import _ from 'lodash';

const Pagination = ({itemsCount, pageSize, currentPage, onPageChange}) => {
    const pageCount = Math.ceil(itemsCount/pageSize);
    if(pageCount === 1) return null;
    const arr = _.range(1, pageCount + 1);
    console.log('',typeof itemsCount);
    const items = arr.map(item => <li className={"page-item " + (item === currentPage ? "active" : "")} key={'page_' + item} onClick={() => onPageChange(item)}><div className="page-link">{item}</div></li>);
    
    return(
        <nav aria-label="Page navigation example">
            <ul className="pagination">
                {items}
            </ul>
        </nav>
    )
}

Pagination.propTypes = {
    itemsCount: PropTypes.number.isRequired,
    pageSize: PropTypes.number.isRequired,
    currentPage: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired,
}

export default Pagination;

