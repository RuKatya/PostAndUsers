import MainLayout from "../../components/mainLayout"
import Image from 'next/image'
import { useState } from "react";
import { useRouter } from "next/router";


export default function Post({ post, comments }) {
  //get id of post - not required
  const { query } = useRouter();
  console.log(query)

  //Time of comment
  const date = new Date();
  const todayTime = date.toLocaleTimeString()

  //Get new comment
  const [Allcomments, setAllComments] = useState(comments)

  function hendlemessege(e) {
    e.preventDefault();

    const commentAdd = e.target.children.comment.value;
    const nameAdd = e.target.children.name.value;
    const emailAdd = e.target.children.email.value;

    console.log(commentAdd, nameAdd, emailAdd)

    setAllComments([...Allcomments, {
      postId: query.post,
      id: Date.now(),
      name: nameAdd,
      email: emailAdd,
      body: commentAdd,
      date: todayTime
    }])

    e.target.reset(); //reset of form
  }

  console.log(Allcomments)
  return (
    <MainLayout title={post.title} >
      <div className="mainPosts">
        <div className="post">
          <div className="post__content">
            <div>
              <Image
                src="/imgs/writeGirl.jpg"
                alt="Write girl"
                width="1000"
                height="670" />
            </div>
            <div className="post__content--info">
              <h1 className="post__content--info__header">{post.title}</h1>
              <p className="post__content--info__parag">{post.body}</p>
            </div>
          </div>

          {/* All comments of users */}
          <div className="comments">
            <h2 className="comments__header">Comments</h2>
            <div className="comments__content">

              {Allcomments.map((comment) => (
                <div className="comments__content--info" key={comment.id}>
                  <div className="comments__content--info__name"><span className="comments__content--info__span">Name: </span>{comment.name}</div>
                  <div className="comments__content--info__email"><span className="comments__content--info__span">E-mail: </span>{comment.email}</div>
                  <div className="comments__content--info__text"> {comment.body}</div>
                  <div className="comments__content--info__date">{comment.date}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Form of comments */}
          <form onSubmit={hendlemessege}>
            <input
              id="name"
              type='text'
              placeholder='Name'
              name='name'
              required
            />
            <input
              id="email"
              type='text'
              placeholder='E-mail'
              name='email'
              required
            />
            <textarea
              id="comment"
              name='comment'
              placeholder='Write comment'
            />
            <input
              id="submit"
              type='submit'
              value='Send'
              className="sendBtn"
            />
          </form>
        </div>
      </div>
    </MainLayout>
  )
}

export async function getServerSideProps({ params }) {
  console.log({ params })
  const resPost = await fetch(`http://jsonplaceholder.typicode.com/posts/${params.post}`)
  const post = await resPost.json()

  const resComment = await fetch(`http://jsonplaceholder.typicode.com/posts/${params.post}/comments`)
  const comments = await resComment.json()

  console.log(`comments are:`, comments)
  return {
    props: { post, comments }
  }
}
