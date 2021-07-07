import MainLayout from "../components/mainLayout"
import BigPost from "../components/HomePage/bigPost"
import ManyPosts from "../components/HomePage/manyPosts"
import OldPosts from "../components/HomePage/oldPosts"

export default function Home({ posts }) {
  return (
    <MainLayout title={`Home Page`} >
      <div className="homePage">
        {/* Main posts */}
        <BigPost posts={posts} />

        {/* many posts */}
        <ManyPosts posts={posts} />

        {/* old posts */}
      <OldPosts posts={posts}/>

      </div>
    </MainLayout>
  )
}

export async function getStaticProps(context) {
  const response = await fetch(`http://jsonplaceholder.typicode.com/posts`)
  const posts = await response.json()

  return {
    props: { posts }
  }
}
