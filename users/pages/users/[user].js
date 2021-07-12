// import { useRouter } from 'next/router';

import { useState } from "react"
import MainLayout from "../../components/mainLayout"

export default function User({ user }) {
    const [showCountry, setShowCountry] = useState(false)
    const [showGeo, setShowGeo] = useState(false)
    const [flag, setFlag] = useState(false)

    function hendleShowCountry() {
        setShowCountry(!showCountry)
        setFlag(!flag)    }

    function hendleCloseCountry() {
        setFlag(!flag)
        if (flag==true && showGeo == true) {
            setShowGeo(false)
        }
    }
    function hendleShowGeo() {
        setShowGeo(!showGeo)
    }

    console.log(`------start-------`)
    console.log(`country ${showCountry}`)
    console.log(`flag ${flag}`)
    console.log(`showGeo ${showGeo}`)
    console.log(`------end-------`)

    return (
        <MainLayout title={user.name}>
            <div>
                <h1>{user.name}</h1>
                <div> <label>Username: </label>{user.username}</div>
                <div><label>E-mail: </label>{user.email}</div>
                <div> <label>Phone number: </label>{user.phone}</div>
                <div> <label>Web-site: </label>{user.website}</div>
                <label>Living</label>
                <div> <label>City: </label>{user.address.city}</div>

                <label>Geo </label>


                <div><label>Company name: </label>{user.company.name}</div>

                <div><label>Catch phrase: </label>{user.company.catchPhrase}</div>
            </div>

            {
                flag ?
                    <div>
                        <button onClick={hendleCloseCountry}>Close</button>
                        <div> <label>Steet: </label>{user.address.street}</div>
                        <div> <label>Suite: </label>{user.address.suite}</div>
                        <div> <label>Zip code: </label>{user.address.zipcode}</div>
                        <button onClick={hendleShowGeo}>Geo</button>
                        {
                            showGeo ?
                                <div>{user.address.geo.lat}, {user.address.geo.lng}</div> :
                                null
                        }
                    </div>
                    :
                    <div>
                        <button onClick={hendleShowCountry}>Show more living</button>
                    </div>
            }
        </MainLayout >
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