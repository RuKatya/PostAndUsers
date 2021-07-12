// import { useRouter } from 'next/router';

import { useState } from "react"
import MainLayout from "../../components/mainLayout"

export default function User({ user }) {
    const [showCountry, setShowCountry] = useState(false)
    const [showGeo, setShowGeo] = useState(false)
    const [flag, setFlag] = useState(false)

    function hendleShowCountry() {
        setShowCountry(!showCountry)
        setFlag(true)
        console.log(showCountry)
        console.log(flag)
    }

    function hendleCloseCountry() {
        setFlag(false)
    }
    function hendleShowGeo() {
        if (flag == true) {
            setShowGeo(!showGeo)
        } else if (flag == false) {
            setShowGeo(false)
        }

    }

    return (
        <MainLayout title={user.name}>
            <div>
                <h1>{user.name}</h1>
                <div> <label>Username: </label>{user.username}</div>
                <div><label>E-mail: </label>{user.email}</div>
                <div> <label>Phone number: </label>{user.phone}</div>
                <div> <label>Web-site: </label>{user.website}</div>

                {/* Country info */}
                <div>
                    <div> <label>City: </label>{user.address.city}</div>
                    {
                        flag ?
                            null :
                            <button onClick={hendleShowCountry}>Show more living</button>
                    }

                    {showCountry ?
                        <div>


                            {flag ?
                                <div>
                                    <button onClick={hendleCloseCountry}>Close</button>
                                    <div> <label>Steet: </label>{user.address.street}</div>
                                    <div> <label>Suite: </label>{user.address.suite}</div>
                                    <div> <label>Zip code: </label>{user.address.zipcode}</div>
                                </div> :
                                null
                            }

                            <div>
                                <button onClick={hendleShowGeo}>Show Geo</button>
                                {showGeo ?
                                    <div>
                                        <label>Geo </label>
                                        <div>{user.address.geo.lat}, {user.address.geo.lng}</div>
                                    </div>
                                    :
                                    null}
                            </div>
                        </div> :
                        null
                    }

                    {/* Geo info */}

                </div>

                {/* Company info */}
                <div><label>Company name: </label>{user.company.name}</div>


                {/* Catch phrase */}
                <div><label>Catch phrase: </label>{user.company.catchPhrase}</div>

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