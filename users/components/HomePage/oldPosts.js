import Link from 'next/link'

export default function OldPosts({ posts }) {
    return (
        <div className="oldPosts">
        <h2>Old POSTS</h2>
            <div >
                <Link href={{
                    pathname: '/posts/[post]',
                    query: { post: posts[9].id }
                }}>
                    <a>
                        {posts[9].title}
                    </a>
                </Link>
            </div>

            <div >
                <Link href={{
                    pathname: '/posts/[post]',
                    query: { post: posts[10].id }
                }}>
                    <a>
                        {posts[10].title}
                    </a>
                </Link>
            </div>

            <div >
                <Link href={{
                    pathname: '/posts/[post]',
                    query: { post: posts[11].id }
                }}>
                    <a>
                        {posts[11].title}
                    </a>
                </Link>
            </div>

            <div >
                <Link href={{
                    pathname: '/posts/[post]',
                    query: { post: posts[12].id }
                }}>
                    <a>
                        {posts[12].title}
                    </a>
                </Link>
            </div>

            <div >
                <Link href={{
                    pathname: '/posts/[post]',
                    query: { post: posts[13].id }
                }}>
                    <a>
                        {posts[13].title}
                    </a>
                </Link>
            </div>
        </div>
    )
}