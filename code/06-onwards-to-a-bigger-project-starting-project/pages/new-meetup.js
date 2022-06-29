import Head from 'next/head';
import { useRouter } from 'next/router';
import { Fragment } from 'react';
import NewMeetupForm from '../components/meetups/NewMeetupForm';

function NewMeetupPage() {
    const router = useRouter();

    function addMeetupHandler(data) {
        fetch('/api/new-meetup', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => {
                if (!res.ok) {
                    throw new Error(`${res.status} ${res.statusText}`);
                }

                return res.json();
            })
            .then(data => {
                console.log(data);

                router.push('/');
            })
            .catch(err => console.log(err));
    }

    return (
        <Fragment>
            <Head>
                <title>Add a New Meetup</title>
                <meta name="description" content="Add meetups. But maybe not. No one will come, I guarantee it." />
            </Head>
            <NewMeetupForm onAddMeetup={addMeetupHandler} />
        </Fragment>
    )
}

export default NewMeetupPage;