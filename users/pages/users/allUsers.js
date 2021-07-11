import MainLayout from "../../components/mainLayout"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Card, Icon } from 'semantic-ui-react'

export default function Post({ users }) {
    const random = Math.floor(Math.random() * 10)
    // function random() {
    //     Math.floor(Math.random() * 5)
    // }

    console.log(random)
    const extra = (
        <a>
            <Icon name='user' />
            {random} Friends
        </a>
    )

    return (
        <MainLayout title={`All users`} >
            <div className="allUsers">
                {users.map((user) => (
                    <Link href={{
                        pathname: '/users/[user]',
                        query: { user: user.id }
                    }}>
                        <a className="allUsers__links">
                            <Card
                                image='/imgs/tv.jpg'
                                header={user.name}
                                meta='Friend'
                                description={user.username}
                                extra={extra}
                            />
                        </a>
                    </Link>
                ))}
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
