import Link from 'next/link'
//0 1 2 3 4 5 6 7 8 9 
//1 2 3 4 5 6 7 8 9 10
export default function OldPosts({ posts, users }) {
    // console.log(users)
    return (
        <div className="oldPosts">
            <h2 className="oldPosts__header">Old POSTS</h2>
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
                        query: { user: users[3].id } //User 4
                    }}>
                        <a className="oldPosts__display--user">
                            <h5>By {users[3].name}</h5> {/* User 4 name*/}
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
            </div>
        </div>
    )
}