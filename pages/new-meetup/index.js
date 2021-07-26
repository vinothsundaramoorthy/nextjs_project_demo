//Our-domain.com/new-meetup
import { Fragment } from 'react';
import { useRouter } from 'next/router';
import  Head  from 'next/head';
import NewMeetupForm from '../../components/meetups/NewMeetupForm';

function NewMeetUpPage() {
    const router = useRouter();
    async function addMeetupHandler (meetupData) {
        const response = await fetch('/api/new-meetup', {
            method: 'POST',
            body: JSON.stringify(meetupData),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await response.json();
        console.log(data);
        router.push('/');
    };
    return (
        <Fragment>
            <Head>
                <title>New Js Meetup Form</title>
                <meta name="description" content="Add a new meetups" />
            </Head>
            <NewMeetupForm onAddMeetup={addMeetupHandler}/>
        </Fragment>
    )
};

export default NewMeetUpPage;