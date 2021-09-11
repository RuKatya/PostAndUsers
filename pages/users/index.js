//Next
import Link from 'next/link'
import Image from "next/image"

//Components
import MainLayout from "../../components/mainLayout"

export default function Post({ users }) {
    return (
        <MainLayout title={`Users`} >
            <div className="mainPostsUsers">
                <div className="allUsers">
                    {users.map((user) => (
                        <Link href={{
                            pathname: '/users/[user]',
                            query: { user: user.id }
                        }}
                            key={user.id}>
                            <a className="allUsers__links" >
                                <div className="allUsers__links--img">
                                    <Image
                                        src="/imgs/user/user.jpg"
                                        alt="TV"
                                        width="500"
                                        height="300" />
                                </div>
                                <div className="allUsers__links--content">
                                    <h2>{user.name}</h2>
                                    <h3>{user.username}</h3>
                                    <div className="allUsers__links--content__mail">
                                        <a href={`mailto:${user.email}`}>{user.email}</a>
                                    </div>
                                </div>
                            </a>
                        </Link>
                    ))}
                </div>
            </div>
        </MainLayout>
    )
}


export async function getServerSideProps({ params }) {
    const resUsers = await fetch(`http://jsonplaceholder.typicode.com/users`)
    const users = await resUsers.json()

    return {
        props: { users }
    }
}
