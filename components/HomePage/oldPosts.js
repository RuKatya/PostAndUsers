import Link from 'next/link'
//0 1 2 3 4 5 6 7 8 9 
//1 2 3 4 5 6 7 8 9 10
export default function OldPosts({ posts, users }) {
    // console.log(users)
    return (
        <div className="mainOldPosts">
            <div className="oldPosts">
                <h2 className="oldPosts__header">Old posts</h2>
                <div className="oldPosts__display">

                    {/* First post */}
                    <div className="oldPosts__display--content">
                        <Link href={{
                            pathname: '/posts/[post]',
                            query: { post: posts[45].id } // Post 46
                        }}>
                            <a>
                                <h2>{posts[45].title}</h2> {/* Post 46 title */}
                            </a>
                        </Link>
                        <Link href={{
                            pathname: '/users/[user]',
                            query: { user: users[4].id } //User 5
                        }}>
                            <a className="oldPosts__display--user">
                                <h5>By {users[4].name}</h5> {/* User 5 name*/}
                            </a>
                        </Link>
                    </div>

                    {/* Second Post */}
                    <div className="oldPosts__display--content">
                        <Link href={{
                            pathname: '/posts/[post]',
                            query: { post: posts[94].id } //Post 95
                        }}>
                            <a>
                                <h2>{posts[94].title}</h2> {/* Post 95 title*/}
                            </a>
                        </Link>
                        <Link href={{
                            pathname: '/users/[user]',
                            query: { user: users[9].id } //User 10
                        }}>
                            <a className="oldPosts__display--user">
                                <h5>By {users[9].name}</h5> {/* User 10 name */}
                            </a>
                        </Link>
                    </div>

                    {/* Third post */}
                    <div className="oldPosts__display--content">
                        <Link href={{
                            pathname: '/posts/[post]',
                            query: { post: posts[88].id } //Post 89
                        }}>
                            <a>
                                <h2>{posts[88].title}</h2> {/* Post 89 title*/}
                            </a>
                        </Link>
                        <Link href={{
                            pathname: '/users/[user]',
                            query: { user: users[8].id } //User 9
                        }}>
                            <a className="oldPosts__display--user">
                                <h5>By {users[8].name}</h5> {/*User 9 name*/}
                            </a>
                        </Link>
                    </div>

                    {/* Fourth post */}
                    <div className="oldPosts__display--content">
                        <Link href={{
                            pathname: '/posts/[post]',
                            query: { post: posts[15].id } //Post 16
                        }}>
                            <a>
                                <h2>{posts[15].title}</h2> {/* Post 16 title*/}
                            </a>
                        </Link>
                        <Link href={{
                            pathname: '/users/[user]',
                            query: { user: users[1].id } //User 2
                        }}>
                            <a className="oldPosts__display--user">
                                <h5>By {users[1].name}</h5> {/*User 2*/}
                            </a>
                        </Link>
                    </div>

                    {/* Fifth Post */}
                    <div className="oldPosts__display--content">
                        <Link href={{
                            pathname: '/posts/[post]',
                            query: { post: posts[28].id } //Post 29
                        }}>
                            <a>
                                <h2>{posts[28].title}</h2> {/* Post 29 title*/}
                            </a>
                        </Link>
                        <Link href={{
                            pathname: '/users/[user]',
                            query: { user: users[2].id } //User 3
                        }}>
                            <a className="oldPosts__display--user">
                                <h5>By {users[2].name}</h5> {/*User 3*/}
                            </a>
                        </Link>
                    </div>

                    {/* Sixth Post */}
                    <div className="oldPosts__display--content">
                        <Link href={{
                            pathname: '/posts/[post]',
                            query: { post: posts[55].id } //Post 56
                        }}>
                            <a>
                                <h2>{posts[55].title}</h2> {/* Post 56 title*/}
                            </a>
                        </Link>
                        <Link href={{
                            pathname: '/users/[user]',
                            query: { user: users[5].id } //User 6
                        }}>
                            <a className="oldPosts__display--user">
                                <h5>By {users[5].name}</h5> {/*User 6*/}
                            </a>
                        </Link>
                    </div>

                    {/* Seventh Post */}
                    <div className="oldPosts__display--content">
                        <Link href={{
                            pathname: '/posts/[post]',
                            query: { post: posts[87].id } //Post 88
                        }}>
                            <a>
                                <h2>{posts[87].title}</h2> {/* Post 88 title*/}
                            </a>
                        </Link>
                        <Link href={{
                            pathname: '/users/[user]',
                            query: { user: users[8].id } //User 9
                        }}>
                            <a className="oldPosts__display--user">
                                <h5>By {users[8].name}</h5> {/*User 9*/}
                            </a>
                        </Link>
                    </div>

                    {/* Eighth Post */}
                    <div className="oldPosts__display--content">
                        <Link href={{
                            pathname: '/posts/[post]',
                            query: { post: posts[64].id } //Post 65
                        }}>
                            <a>
                                <h2>{posts[64].title}</h2> {/* Post 65 title*/}
                            </a>
                        </Link>
                        <Link href={{
                            pathname: '/users/[user]',
                            query: { user: users[6].id } //User 7
                        }}>
                            <a className="oldPosts__display--user">
                                <h5>By {users[6].name}</h5> {/*User 7*/}
                            </a>
                        </Link>
                    </div>


                </div>
            </div>
        </div>
    )
}