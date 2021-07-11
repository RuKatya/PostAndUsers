// import { useRouter } from 'next/router';

import MainLayout from "../../components/mainLayout"

export default function User({ user }) {
    // const {query} = useRouter();

    return (
        <MainLayout title={user.name}>
            <div>
                <h1>{user.name}</h1>
                <div> <label>Username: </label>{user.username}</div>
                <div><label>E-mail: </label>{user.email}</div>
                <div> <label>Phone number: </label>{user.phone}</div>
                <div> <label>Web-site: </label>{user.website}</div>
                <div>
                    <div> <label>Steet: </label>{user.address.street}</div>
                    <div> <label>Suite: </label>{user.address.suite}</div>
                    <div> <label>City: </label>{user.address.city}</div>
                    <div> <label>Zip code: </label>{user.address.zipcode}</div>
                    <div><label>Geo </label>
                        <div>{user.address.geo.lat}, {user.address.geo.lng}</div>
                        {/* <div>{user.address.geo.lng}</div> */}
                    </div>
                </div>
                <div>
                    <div><label>Company name: </label>{user.company.name}</div>
                    <div><label>Catch phrase: </label>{user.company.catchPhrase}</div>
                </div>

            </div>
        </MainLayout>
    )
}

export async function getServerSideProps({ params }) {
    console.log({ params })
    const resUser = await fetch(`http://jsonplaceholder.typicode.com/users/${params.user}`)
    const user = await resUser.json()

    return {
        props: { user }
    }
}