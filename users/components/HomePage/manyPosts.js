import Link from 'next/link'
import Image from 'next/image'


export default function ManyPosts({ posts }) {
    const date = new Date();
    const todayDate = date.toDateString();

    return (
        <div className="manyPosts">
            <h2>Many POSTS</h2>
            <div className="manyPosts__display">

                <div className="manyPosts__display--link">
                    <Link href={{
                        pathname: '/posts/[post]',
                        query: { post: posts[4].id }
                    }}>
                        <a className="manyPosts__display--content">
                            <Image
                                src="/imgs/writeGirl.jpg"
                                alt="Write girl"
                                width="100"
                                height="220" />
                            <div className="manyPosts__info">
                                <h3 className="manyPosts__info--header">{posts[4].title}</h3>
                                <h5 className="manyPosts__info--date">{todayDate}</h5>
                            </div>
                        </a>
                    </Link>
                </div>

                <div className="manyPosts__display--link">
                    <Link href={{
                        pathname: '/posts/[post]',
                        query: { post: posts[5].id }
                    }}>
                        <a className="manyPosts__display--content">
                            <Image
                                src="/imgs/writeGirl.jpg"
                                alt="Write girl"
                                width="100"
                                height="220" />
                            <div className="manyPosts__info">
                                <h3 className="manyPosts__info--header">{posts[5].title}</h3>
                                <h5 className="manyPosts__info--date">{todayDate}</h5>
                            </div>
                        </a>
                    </Link>
                </div>

                <div className="manyPosts__display--link">
                    <Link href={{
                        pathname: '/posts/[post]',
                        query: { post: posts[6].id }
                    }}>
                        <a className="manyPosts__display--content">
                            <Image
                                src="/imgs/writeGirl.jpg"
                                alt="Write girl"
                                width="100"
                                height="220" />
                            <div className="manyPosts__info">
                                <h3 className="manyPosts__info--header">{posts[6].title}</h3>
                                <h5 className="manyPosts__info--date">{todayDate}</h5>
                            </div>
                        </a>
                    </Link>
                </div>

                <div className="manyPosts__display--link">
                    <Link href={{
                        pathname: '/posts/[post]',
                        query: { post: posts[7].id }
                    }}>
                        <a className="manyPosts__display--content">
                            <Image
                                src="/imgs/writeGirl.jpg"
                                alt="Write girl"
                                width="100"
                                height="220" />
                            <div className="manyPosts__info">
                                <h3 className="manyPosts__info--header">{posts[7].title}</h3>
                                <h5 className="manyPosts__info--date">{todayDate}</h5>
                            </div>
                        </a>
                    </Link>
                </div>

                <div className="manyPosts__display--link">
                    <Link href={{
                        pathname: '/posts/[post]',
                        query: { post: posts[8].id }
                    }}>
                        <a className="manyPosts__display--content">
                            <Image
                                src="/imgs/writeGirl.jpg"
                                alt="Write girl"
                                width="100"
                                height="220" />
                            <div className="manyPosts__info">
                                <h3 className="manyPosts__info--header">{posts[8].title}</h3>
                                <h5 className="manyPosts__info--date">{todayDate}</h5>
                            </div>
                        </a>
                    </Link>
                </div>

                <div className="manyPosts__display--link">
                    <Link href={{
                        pathname: '/posts/[post]',
                        query: { post: posts[9].id }
                    }}>
                        <a className="manyPosts__display--content">
                            <Image
                                src="/imgs/writeGirl.jpg"
                                alt="Write girl"
                                width="100"
                                height="220" />
                            <div className="manyPosts__info">
                                <h3 className="manyPosts__info--header">{posts[9].title}</h3>
                                <h5 className="manyPosts__info--date">{todayDate}</h5>
                            </div>
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    )
}