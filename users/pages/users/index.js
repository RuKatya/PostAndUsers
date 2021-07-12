import MainLayout from "../../components/mainLayout"
import Link from 'next/link'
import React from 'react'
import { Card, Icon, List } from 'semantic-ui-react'

export default function Post({ users }) {

    return (
        <MainLayout title={`Users`} >
            <div className="allUsers">
                {users.map((user) => (
                    <Link href={{
                        pathname: '/users/[user]',
                        query: { user: user.id }
                    }}
                    key={user.id}>
                        <a className="allUsers__list--links" >
                            <Card
                                image='/imgs/tv.jpg'
                                header={user.name}
                                // meta='Friend'
                                description={user.username}
                                extra={<List>
                                    <List.Item
                                        icon='mail'
                                        content={<a href={`mailto:${user.email}`}>{user.email}</a>}
                                    />
                                </List>}
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
