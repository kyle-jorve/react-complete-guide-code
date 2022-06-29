import { useRouter } from 'next/router';

function NewsDetail() {
    const router = useRouter();
    const newsID = router.query.newsID;

    return (
        <h1>
            Gimme the Deets<br/>
            <small>about {newsID}</small>
        </h1>
    )
}

export default NewsDetail;