import "./ExpenseFilter.css";

function ExpenseFilter(data) {
    let years = [2022, 2021, 2020, 2019];

    function yearChangeHandler(event) {
        data.onYearChange(event.target.value);
    }

    return (
        <div className="expenses-filter">
            <div className="expenses-filter__control">
                <label>Filter by year</label>
                <select onChange={yearChangeHandler} defaultValue={data.defaultYear}>
                    {
                        years.map(y => {
                            return <option key={y} value={y}>{y}</option>
                        })
                    }
                </select>
            </div>
        </div>
    );
}

export default ExpenseFilter;
