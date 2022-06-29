import Head from 'next/head';
import { MongoClient, ObjectId } from "mongodb";
import MeetupDetail from "../components/meetups/MeetupDetail";
import { Fragment } from 'react';

function MeetupDetailPage(props) {
    return (
        <Fragment>
            <Head>
                <title>{props.meetupData.title}</title>
                <meta name="description" content={props.meetupData.description} />
            </Head>
            <MeetupDetail
                image={props.meetupData.image}
                title={props.meetupData.title}
                address={props.meetupData.address}
                description={props.meetupData.description}
            />
        </Fragment>
    )
}

export async function getStaticPaths() {
    const client = await MongoClient.connect('mongodb+srv://kyle_jorve:lJCXevTg52Sg@cluster0.zky7u.mongodb.net/meetups?retryWrites=true&w=majority');
    const db = client.db();
    const meetupsCollection = db.collection('meetups');
    const meetups = await meetupsCollection.find({}, {
        _id: 1
    }).toArray();

    client.close();

    return {
        fallback: false,
        paths: meetups.map(meetup => ({
            params: {
                meetupID: meetup._id.toString()
            }
        }))
    }
}

export async function getStaticProps(context) {
    const meetupID = context.params.meetupID;
    const client = await MongoClient.connect('mongodb+srv://kyle_jorve:lJCXevTg52Sg@cluster0.zky7u.mongodb.net/meetups?retryWrites=true&w=majority');
    const db = client.db();
    const meetupsCollection = db.collection('meetups');
    const meetup = await meetupsCollection.findOne({
        _id: ObjectId(meetupID)
    });
    
    client.close();

    return {
        props: {
            meetupData: {
                id: meetup._id.toString(),
                title: meetup.title,
                address: meetup.address,
                image: meetup.image,
                description: meetup.description
            }
        }
    }
}

export default MeetupDetailPage;