import React, { useEffect } from "react";
import { Link, Route, useParams, useLocation, useRouteMatch } from "react-router-dom";
import Comments from '../components/comments/Comments';
import HighlightedQuote from '../components/quotes/HighlightedQuote';
import LoadingSpinner from "../components/UI/LoadingSpinner";
import useHttp from "../hooks/use-http";
import { getSingleQuote } from '../lib/api';

function QuoteDetail() {
    const params = useParams();
    const location = useLocation();
    const match = useRouteMatch();
    const { sendRequest, status, data: quote, error } = useHttp(getSingleQuote, true);
    const commentsPath = `${match.url}/comments`;
    const commentsShown = commentsPath === location.pathname;
    const buttonText = commentsShown ? 'Hide Comments' : 'Load Comments';
    const buttonURL = commentsShown ? match.url : commentsPath;

    useEffect(() => {
        sendRequest(params.quoteID);
    }, [sendRequest, params.quoteID]);

    if (status === 'pending') {
        return (
            <div className='centered'>
                <LoadingSpinner />
            </div>
        )
    }

    if (error) {
        return <p className='centered'>{error}</p>
    }

    if (!quote?.text) {
        return (
            <p>No quote found 🙁</p>
        )
    }

    return (
        <React.Fragment>
            <HighlightedQuote text={quote.text} author={quote.author} />

            <div className="centered">
                <Link className="btn--flat" to={buttonURL}>{buttonText}</Link>
            </div>

            <Route path={commentsPath}>
                <Comments/>
            </Route>
        </React.Fragment>
    )
}

export default QuoteDetail;