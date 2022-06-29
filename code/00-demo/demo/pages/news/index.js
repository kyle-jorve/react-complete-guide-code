import { Fragment } from "react";
import Link from 'next/Link';

function NewsPage() {
    return (
        <Fragment>
            <h1>News Page, Betch</h1>

            <ul>
                <li>
                    <Link href="/news/youre-dumb">You're dumb</Link>
                </li>
                <li>
                    <Link href="/news/youre-stupid">You're stupid</Link>
                </li>
                <li>
                    <Link href="/news/nobody-likes-you">Nobody likes you</Link>
                </li>
            </ul>
        </Fragment>
    )
}

export default NewsPage;