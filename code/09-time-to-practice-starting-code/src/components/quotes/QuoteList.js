import { Fragment } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import QuoteItem from './QuoteItem';
import classes from './QuoteList.module.css';

function sortQuotes(quotes, asc) {
  return quotes.sort((a, b) => {
    if (asc) {
      return a.id > b.id ? 1 : -1;
    }
    else {
      return a.id < b.id ? 1 : -1;
    }
  });
}

const QuoteList = (props) => {
  const history = useHistory();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const sortAsc = searchParams.get('sort') === 'asc';
  const sortedQuotes = sortQuotes(props.quotes, sortAsc);

  function changeSortHandler() {
    history.replace({
      pathname: location.pathname,
      search: `?sort=${sortAsc ? 'desc' : 'asc'}`
    });
  }

  return (
    <Fragment>
      <div className={`${classes.sorting} title-row`}>
        <h1>All Quotes</h1>
        <button onClick={changeSortHandler}>Sort ({sortAsc ? 'Desc' : 'Asc'})</button>
      </div>
      <ul className={classes.list}>
        {sortedQuotes.map((quote) => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default QuoteList;
