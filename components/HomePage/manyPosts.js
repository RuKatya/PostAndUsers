import Link from 'next/link'
import Image from 'next/image'


export default function ManyPosts({ posts }) {
    const date = new Date();
    const todayDate = date.toDateString();

    const pics = [
        { src: "/imgs/manyPosts/car.jpg" },
        { src: "/imgs/manyPosts/forest.jpg" },
        { src: "/imgs/manyPosts/lava.jpg" },
        { src: "/imgs/manyPosts/mountain.jpg" },
        { src: "/imgs/manyPosts/sea.jpg" },
        { src: "/imgs/manyPosts/strawberry.jpg" },
    ]

    return (
        <div className="manyPosts">
            <div className="manyPosts__display">

                <div className="manyPosts__display--link">
                    <Link href={{
                        pathname: '/posts/[post]',
                        query: { post: posts[34].id } //Post 35
                    }}>
                        <a className="manyPosts__display--content">
                            <Image
                                src={pics[0].src}
                                alt={pics[0].src}
                                width="1000"
                                height="650" />
                            <div className="manyPosts__info">
                                <h3 className="manyPosts__info--header">{posts[34].title}</h3> {/* Post 35 title */}
                                <h5 className="manyPosts__info--date">{todayDate}</h5>
                            </div>
                        </a>
                    </Link>
                </div>

                <div className="manyPosts__display--link">
                    <Link href={{
                        pathname: '/posts/[post]',
                        query: { post: posts[42].id } //Post 43
                    }}>
                        <a className="manyPosts__display--content">
                            <Image
                                src={pics[1].src}
                                alt={pics[1].src}
                                width="1000"
                                height="650" />
                            <div className="manyPosts__info">
                                <h3 className="manyPosts__info--header">{posts[42].title}</h3>  {/* Post 43 title */}
                                <h5 className="manyPosts__info--date">{todayDate}</h5>
                            </div>
                        </a>
                    </Link>
                </div>

                <div className="manyPosts__display--link">
                    <Link href={{
                        pathname: '/posts/[post]',
                        query: { post: posts[53].id } //Post 54
                    }}>
                        <a className="manyPosts__display--content">
                            <Image
                                src={pics[2].src}
                                alt={pics[2].src}
                                width="1000"
                                height="650" />
                            <div className="manyPosts__info">
                                <h3 className="manyPosts__info--header">{posts[53].title}</h3> {/* Post 54 title*/}
                                <h5 className="manyPosts__info--date">{todayDate}</h5>
                            </div>
                        </a>
                    </Link>
                </div>

                <div className="manyPosts__display--link">
                    <Link href={{
                        pathname: '/posts/[post]',
                        query: { post: posts[64].id } //Post 65
                    }}>
                        <a className="manyPosts__display--content">
                            <Image
                                src={pics[3].src}
                                alt={pics[3].src}
                                width="1000"
                                height="650" />
                            <div className="manyPosts__info">
                                <h3 className="manyPosts__info--header">{posts[64].title}</h3> {/* Post 65 title */}
                                <h5 className="manyPosts__info--date">{todayDate}</h5>
                            </div>
                        </a>
                    </Link>
                </div>

                <div className="manyPosts__display--link">
                    <Link href={{
                        pathname: '/posts/[post]',
                        query: { post: posts[70].id } //Post 71
                    }}>
                        <a className="manyPosts__display--content">
                            <Image
                                src={pics[4].src}
                                alt={pics[4].src}
                                width="1000"
                                height="650" />
                            <div className="manyPosts__info">
                                <h3 className="manyPosts__info--header">{posts[70].title}</h3>  {/* Post 71 title */}
                                <h5 className="manyPosts__info--date">{todayDate}</h5>
                            </div>
                        </a>
                    </Link>
                </div>

                <div className="manyPosts__display--link">
                    <Link href={{
                        pathname: '/posts/[post]',
                        query: { post: posts[76].id } //Post 77
                    }}>
                        <a className="manyPosts__display--content">
                            <Image
                                src={pics[5].src}
                                alt={pics[5].src}
                                width="1000"
                                height="650" />
                            <div className="manyPosts__info">
                                <h3 className="manyPosts__info--header">{posts[76].title}</h3> {/* Post 77 title*/}
                                <h5 className="manyPosts__info--date">{todayDate}</h5>
                            </div>
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    )
}