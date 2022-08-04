import { useEffect, useState } from "react";

const PaginatedTable = ({thead, tbody, className}) => {

    const [visibleRows, setVisibleRows] = useState([]);
    
    const [page, setPage] = useState({current: 0, items: 10, max: Math.round(tbody.length/10)});

    useEffect(() => {
        const max = Math.round(tbody.length/page.items);
        setPage({...page, current:0, max: max});
    }, [tbody]);

    useEffect(() => {
        const start = page.current * page.items;
        const end = start + page.items;
        const currentRows = tbody.slice(start, end);
        setVisibleRows(currentRows);
    }, [page]);

    const onPreviousClicked = (e) => {
        if(page.current > 0) {
            const newPage = page.current - 1;
            setPage({...page, current: newPage});
        }
    }

    const onNextClicked = (e) => {
        if(page.current <  page.max) {
            const newPage = page.current + 1;
            setPage({...page, current: newPage});
        }
    }

    const onItemCountChanged = (e) => {
        const newItemCount = parseInt(e.target.value);
        const maxPages = Math.round(tbody.length / newItemCount);
        setPage({items: newItemCount, current: 0, max: maxPages});
    }

    return (
        <>
        <select onChange={onItemCountChanged} value={page.items}>
            <option>10</option>
            <option>15</option>
            <option>20</option>
        </select>
        <table className={className}>
            <thead>
                {thead}
            </thead>
            <tbody>
                {visibleRows}
            </tbody>
        </table>
        <button disabled={page.current === 0} onClick={onPreviousClicked}>previous</button>
        {page.current + 1} / {page.max}
        <button disabled={page.current === page.max} onClick={onNextClicked}>next</button>
        </>
    );

}

export default PaginatedTable;