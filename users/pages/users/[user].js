// import { useRouter } from 'next/router';
import Image from 'next/image'
import Link from 'next/link'

//React
import { useState } from "react"

//Components
import MainLayout from "../../components/mainLayout"

import { Loader, LoaderOptions } from 'google-maps';

export default function User({ user, posts }) {
    const [showCountry, setShowCountry] = useState(false)
    const [showGeo, setShowGeo] = useState(false)
    const [flag, setFlag] = useState(false)

    const [showMore, setShowMore] = useState(3);

    function handleShowMore() {
        setShowMore(showMore + 3)
    }

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
                                src="/imgs/user/user.jpg"
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
                                            <button onClick={hendleCloseCountry} className="userPage__moreLiving--btn" style={{}}>Close</button>
                                            <div className="userPage__grid userPage__living">
                                                <label>Steet: </label> <div className="userPage__living--content"> {user.address.street}</div>
                                                <label>Suite: </label><div className="userPage__living--content"> {user.address.suite}</div>
                                                <label>Zip code: </label><div className="userPage__living--content"> {user.address.zipcode}</div>
                                            </div>

                                            {
                                                showGeo ?
                                                    <div >
                                                        <div className="userPage__moreLiving--geodata">
                                                            <label>Coordinates</label>
                                                            {user.address.geo.lat}, {user.address.geo.lng}
                                                        </div>
                                                    </div>
                                                    :
                                                    <button onClick={hendleShowGeo} className="userPage__moreLiving--btn">Coordinates</button>
                                            }
                                        </div>
                                        :
                                        <div>
                                            <button onClick={hendleShowCountry} className="userPage__moreLiving--btn">Show full address</button>
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

                <div>
                    <h2 className="userPage__allPosts--header">Posts of {user.name}</h2>
                    {/* ALL POSTS */}

                    <div>
                        <div className="allPosts userPage__allPosts">
                            {posts.slice(0, showMore).map((post) => {
                                return (
                                    <div key={post.id}>
                                        <Link href={{
                                            pathname: '/posts/[post]',
                                            query: { post: post.id }
                                        }}>
                                            <a className="allPosts__links">
                                                <div className="allPosts__links--img">
                                                    <Image
                                                        src="/imgs/writeGirl.jpg"
                                                        alt="Write women"
                                                        width="500"
                                                        height="300" />
                                                </div>
                                                <div className="allPosts__links--header">
                                                    <h2>{post.title}</h2>
                                                </div>
                                            </a>
                                        </Link>
                                    </div>
                                )
                            })}

                        </div>

                        {
                            showMore < 10 ?
                                <button className="showMorebtn" onClick={handleShowMore}>Show more</button> :
                                <h2 className="noMorebtn moreBtnUsers">No more posts</h2>
                        }
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

    const resAllPosts = await fetch(`http://jsonplaceholder.typicode.com/users/${params.user}/posts`)
    const posts = await resAllPosts.json();

    // console.log(posts)
    return {
        props: { user, posts }
    }
}





