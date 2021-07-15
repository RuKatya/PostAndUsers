import MainLayout from "../components/mainLayout"
import BigPost from "../components/HomePage/bigPost"
import ManyPosts from "../components/HomePage/manyPosts"
import OldPosts from "../components/HomePage/oldPosts"

export default function Home({ posts, users }) {
  // console.log(users)
  return (
    <MainLayout title={`Users`} >
      <div className="homePage">
        {/* Main posts */}
        <BigPost posts={posts} />

        <div className="lorem">
          <div className="lorem__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In placerat sodales enim, ac auctor erat dapibus in. Mauris lobortis nec ante sollicitudin venenatis. Curabitur dapibus metus sit amet maximus vehicula. Nulla vitae varius orci. Ut pretium viverra mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In pretium lectus elit, nec auctor risus eleifend vehicula. Proin quis odio et magna varius volutpat vel quis neque.
          </div>
        </div>

        {/* many posts */}
        <ManyPosts posts={posts} />

        <div className="loremSecond">
          <div className="lorem__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In placerat sodales enim, ac auctor erat dapibus in. Mauris lobortis nec ante sollicitudin venenatis.
          </div>
        </div>

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
