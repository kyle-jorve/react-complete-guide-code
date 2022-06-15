import { Fragment, useEffect } from "react";
import { useHistory } from "react-router-dom";
import QuoteForm from '../components/quotes/QuoteForm';
import useHttp from '../hooks/use-http';
import { addQuote } from '../lib/api';

function AddQuote() {
    const history = useHistory();
    const { sendRequest, status } = useHttp(addQuote);

    useEffect(() => {
        if (status === 'completed') {
            history.push('/quotes');
        }
    }, [status, history]);

    function addQuoteHandler(data) {
        sendRequest(data);
    }

    return (
        <Fragment>
            <h1>New Quote</h1>
            <QuoteForm isLoading={status === 'pending'} onAddQuote={addQuoteHandler} />
        </Fragment>
    )
}

export default AddQuote;