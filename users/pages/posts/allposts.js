import { useState } from "react"
import MainLayout from "../../components/mainLayout"
import Link from 'next/link'
import Image from 'next/image'


export default function AllPosts({ posts }) {
    const [showMore, setShowMore] = useState(10);

    function handleClick() {
        setShowMore(showMore + 10)
    }

    // const numberOfItems = showMore
    console.log(showMore)
    return (
        <MainLayout title={`All posts`} >
            <div className="allPosts">
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
                                    <div>
                                        {post.title}
                                    </div>

                                </a>
                            </Link>
                        </div>
                    )
                })}



            </div>
            {
                showMore < 100 ?
                    <button onClick={() => handleClick()}>Show more</button> :
                    <div>No more posts</div>
            }
        </MainLayout>
    );
}

export async function getStaticProps(context) {
    //Posts
    const resPosts = await fetch(`http://jsonplaceholder.typicode.com/posts`)
    const posts = await resPosts.json()

    //Users
    const resUsers = await fetch(`http://jsonplaceholder.typicode.com/users`)
    const users = await resUsers.json()

    return {
        props: { posts, users }
    }
}