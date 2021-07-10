// import { useRouter } from 'next/router';

export default function User({ user }) {
    // const {query} = useRouter();

    return (
        <div>
            <div>user</div>
            {/* <div>user {query.id}</div> */}
            <div>Title of user {user.name}</div>
            {/* {console.log(`query ${query}`)} */}
            {console.log(`dafuck`, user.name)}
        </div>
    )
}

export async function getServerSideProps({ params }) {
    console.log({ params })
    const resUser = await fetch(`http://jsonplaceholder.typicode.com/users/${params.user}`)
    const user = await resUser.json()

    return {
        props: { user }
    }
}