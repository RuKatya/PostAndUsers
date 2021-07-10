import MainLayout from "../components/mainLayout"
import BigPost from "../components/HomePage/bigPost"
import ManyPosts from "../components/HomePage/manyPosts"
import OldPosts from "../components/HomePage/oldPosts"

export default function Home({ posts, users }) {
  // console.log(users)
  return (
    <MainLayout title={`Home page`} >
      <div className="homePage">
        {/* Main posts */}
        <BigPost posts={posts} />

        {/* many posts */}
        <ManyPosts posts={posts} />

        {/* old posts */}
        <OldPosts posts={posts} users={users} />

      </div>
    </MainLayout>
  )
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
