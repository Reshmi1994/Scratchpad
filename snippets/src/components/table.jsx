import React from 'react';

function Table(props) {
    // console.log(props.data)

    const [page, setPage] = React.useState(1);
    const [pageLimit, setPageLimit] = React.useState(10);
    const [lastPage, setLastPage] = React.useState(1);

    const changePageLimit = (e) => {
        // console.log(e.target.value)
        setPageLimit(parseInt(e.target.value));
        findLastPage()
        setPage(1);
    }
    const onEdit = (eachRow) => {
        // alert('onEdit' + eachRow._id);
        props.onEdit(eachRow)
    }
    const onDelete = (eachRow) => {
        // alert('onDelete' + eachRow._id);
        props.onDelete(eachRow)
    }

    // for heading row
    const generateHead = (oneobject) => {
        // console.log(oneobject)
        let heading = Object.keys(oneobject);
        // console.log(heading)
        return heading.map(eachHead => (<th key={eachHead}>{eachHead}</th>))

    }
    //   for entire table body
    const generateTbody = (data) => {
        return data.map(eachRow => (<tr key={eachRow._id}>
            {generateTd(eachRow)}
            <td><button onClick={() => onEdit(eachRow)}><i class="fa-solid fa-pen"></i></button>
                <button onClick={() => onDelete(eachRow)}><i class="fa-solid fa-eraser"></i></button></td>
        </tr>))
    }
    // for single row(loop keeps running)
    const generateTd = (oneobject) => {
        // console.log(oneobject)
        let heading = Object.keys(oneobject);
        // console.log(heading)
        return heading.map(eachHead => (<td key={eachHead}>{oneobject[eachHead]}</td>))
    }

    const displayPage = () => {
        let start = (page - 1) * pageLimit;
        let end = start + pageLimit;
        return generateTbody(props.data.slice(start, end))
    }

    const findLastPage = () => {
        let lastPage = Math.ceil(props.data.length / pageLimit);
        setLastPage(lastPage)
    }

    const generateButtons = () => {
        let buttonList = [];
        let start = page - 2 > 0 ? page - 2 : 1;
        let end = page + 2 > lastPage ? lastPage : page + 2;
        for (let i = start; i <= end; i++) {
            buttonList.push(i);
        }
        console.log(buttonList);

        // return buttonList.map(e => <p> {e} buttons</p>)

        return buttonList.map(e => <button style={{ backgroundColor: page === e ? 'green' : '' }} onClick={() => setPage(e)}>{e}</button>)
    }

    React.useEffect(() => {
        findLastPage();
    }, [pageLimit])

    return (
        <React.Fragment>
            <div class="page-number">
                <button disabled={page === 1} onClick={() => setPage(1)}>&lt;&lt;</button>
                <button disabled={page === 1} onClick={() => setPage(page - 1)}>&lt;</button>
                {generateButtons()}
                {/* <button onClick={() => setPage(1)}>1</button>
                <button onClick={() => setPage(2)}>2</button>
                <button onClick={() => setPage(3)}>3</button>
                <button onClick={() => setPage(4)}>4</button>
                <button onClick={() => setPage(5)}>5</button> */}
                <button disabled={page === lastPage} onClick={() => setPage(page + 1)}>&gt;</button>
                <button disabled={page === lastPage} onClick={() => setPage(lastPage)}>&gt;&gt;</button>
                <select value={pageLimit} onChange={(e) => changePageLimit(e)} name="pages" id="pages">
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="15">15</option>
                    <option value="20">20</option>
                </select>
                <span>{page}</span>
            </div>

            <table>
                <thead>
                    <tr>
                        {generateHead(props.data[0])}
                    </tr>
                </thead>
                <tbody>
                    {displayPage()}
                </tbody>
            </table>
        </React.Fragment>

    );
}

export default Table;