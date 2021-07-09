import Link from 'next/link'

export default function OldPosts({ posts }) {
    return (
        <div className="oldPosts">
            <h2 className="oldPosts__header">Old POSTS</h2>
            <div className="oldPosts__display">
                <div className="oldPosts__display--content">
                    <Link href={{
                        pathname: '/posts/[post]',
                        query: { post: posts[10].id }
                    }}>
                        <a>
                            <h2>{posts[10].title}</h2>

                        </a>
                    </Link>
                </div>
                {/* 
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

                <div >
                    <Link href={{
                        pathname: '/posts/[post]',
                        query: { post: posts[14].id }
                    }}>
                        <a>
                            {posts[14].title}
                        </a>
                    </Link>
                </div> */}
            </div>
        </div>
    )
}