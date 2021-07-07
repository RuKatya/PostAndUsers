import Link from 'next/link'


export default function ManyPosts({ posts }) {
    return (
        <div className="manyPosts">
            <h2>Many POSTS</h2>
            <div >
                <Link href={{
                    pathname: '/posts/[post]',
                    query: { post: posts[4].id }
                }}>
                    <a>
                        {posts[4].title}
                    </a>
                </Link>
            </div>

            <div >
                <Link href={{
                    pathname: '/posts/[post]',
                    query: { post: posts[5].id }
                }}>
                    <a>
                        {posts[5].title}
                    </a>
                </Link>
            </div>

            <div >
                <Link href={{
                    pathname: '/posts/[post]',
                    query: { post: posts[6].id }
                }}>
                    <a>
                        {posts[6].title}
                    </a>
                </Link>
            </div>

            <div >
                <Link href={{
                    pathname: '/posts/[post]',
                    query: { post: posts[7].id }
                }}>
                    <a>
                        {posts[7].title}
                    </a>
                </Link>
            </div>

            <div >
                <Link href={{
                    pathname: '/posts/[post]',
                    query: { post: posts[8].id }
                }}>
                    <a>
                        {posts[8].title}
                    </a>
                </Link>
            </div>
        </div>
    )
}