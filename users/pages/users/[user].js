// import { useRouter } from 'next/router';
import Image from 'next/image'

import { useState } from "react"
import MainLayout from "../../components/mainLayout"

export default function User({ user }) {
    const [showCountry, setShowCountry] = useState(false)
    const [showGeo, setShowGeo] = useState(false)
    const [flag, setFlag] = useState(false)

    function hendleShowCountry() {
        setShowCountry(!showCountry)
        setFlag(!flag)
    }

    function hendleCloseCountry() {
        setFlag(!flag)
        if (flag == true && showGeo == true) {
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
            <div className="mainUser">
                <div className="userPage">
                    <div className="userPage__info">
                        <h1>{user.name}</h1>

                        <div>
                            <Image
                                src="/imgs/writeGirl.jpg"
                                alt="Write women"
                                width="800"
                                height="500" />
                        </div>

                        <div className="userPage__info--content">
                            <div className="userPage__grid">
                                <label>Username: </label><div> {user.username}</div>
                                <label>E-mail: </label><div>{user.email}</div>
                                <label>Phone number: </label><div> {user.phone}</div>
                                <label>Web-site: </label><div> {user.website}</div>
                                <label className="userPage__grid--living">Living</label>
                                <label>City: </label>
                                <div> {user.address.city}</div>
                            </div>
                            <div className="userPage__moreLiving">
                                {
                                    flag ?
                                        <div >
                                            <button onClick={hendleCloseCountry} className="userPage__moreLiving--btn">Close</button>
                                            <div className="userPage__grid">
                                                <label>Steet: </label> <div> {user.address.street}</div>
                                                <label>Suite: </label><div> {user.address.suite}</div>
                                                <label>Zip code: </label><div> {user.address.zipcode}</div>
                                            </div>

                                            {
                                                showGeo ?
                                                    <div >
                                                        <button onClick={hendleShowGeo} className="userPage__moreLiving--btn" >Close</button>
                                                        <div>{user.address.geo.lat}, {user.address.geo.lng}</div>
                                                    </div>
                                                    :
                                                    <button onClick={hendleShowGeo} className="userPage__moreLiving--btn">Geo</button>
                                            }
                                        </div>
                                        :
                                        <div>
                                            <button onClick={hendleShowCountry} className="userPage__moreLiving--btn">Show more living</button>
                                        </div>
                                }
                            </div>


                            <div className="userPage__grid userPage__company">
                                <label>Company name: </label><div className="userPage__company--title">{user.company.name}</div>
                                <label>Catch phrase: </label><div className="userPage__company--title">{user.company.catchPhrase}</div>
                            </div>


                        </div>

                    </div>
                </div>
            </div>
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





