import {useRouter} from 'next/router';

export default function Post({post}) {
// const {query} = useRouter();

    return (
        <div>
        <div>post</div>
        {/* <div>POST {query.id}</div> */}
        <div>{post.title}</div>
        {/* {console.log(`query ${query}`)} */}
        </div>
    )
}

export async function getServerSideProps({params}) {
    console.log( {params})
    const response = await fetch(`http://jsonplaceholder.typicode.com/posts/${params.post}`)
    const post = await response.json()
  
    return {
      props: { post }
    }
  }
  