import { useState } from "react"
import MainLayout from "../../components/mainLayout"

export default function AllPosts({ posts }) {
    const list = [
        'list 1',
        'list 2',
        'item 3',
        'item 4',
        'item 5',
        'item 6',
        'item 7',
        'item 8',
        'item 9',
        'item 10',
        'item 11',
        'item 12',
        'item 12',
        'item 14',
        'item 15',
        'item 16',
        'item 17',
        'item 18',
    ]

    const [showMore, setShowMore] = useState(false);

    function handleClick() {
        setShowMore(true)
    }

    const numberOfItems = showMore ? list.length : 10
    return (
        <div>
            {list.slice(0, numberOfItems).map((item, index) => {
                return (
                    <div key={index}>{item}</div>
                )
            })}
            <button onClick={() => handleClick()}>Show more</button>
        </div>
    );
}

    // const [showMore, setShowMore] = useState(false);

    // function showNore() {
    //     setShowMore(true)
    // }



    // return (
    //     <MainLayout title={`All posts`} >
    //         <div>All posts</div>

    //         {console.log(posts)}

    //         {posts.map((post) => (
    //             <div>{post.title}</div>
    //         ))}
    //     </MainLayout>
    // )
// }

// export async function getStaticProps(context) {
//     //Posts
//     const resPosts = await fetch(`http://jsonplaceholder.typicode.com/posts`)
//     const posts = await resPosts.json()

//     //Users
//     const resUsers = await fetch(`http://jsonplaceholder.typicode.com/users`)
//     const users = await resUsers.json()

//     return {
//         props: { posts, users }
//     }
// }