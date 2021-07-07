import React, { Component } from "react";
import Slider from "react-slick";

import Link from 'next/link'

export default function BigPost({ posts }) {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className="bigPosts">
      <h2>Main Posts</h2>
      <Slider {...settings} className="bigPosts__slider">

        <div className="bigPosts__slider">
          <Link href={{
            pathname: '/posts/[post]',
            query:{post:posts[0].id}
          }}>
            <a className="border">
            {posts[0].title}
            </a>
          </Link>
        </div>

        <div className="bigPosts__slider" >
        <Link 
        href={{
            pathname: '/posts/[post]',
            query:{post:posts[1].id}
          }}>
            <a className="border">
            {posts[1].title}
            </a>
          </Link>
        </div>

        <div className="bigPosts__slider">
        <Link href={{
            pathname: '/posts/[post]',
            query:{post:posts[2].id}
          }}>
            <a className="border">
            {posts[2].title}
            </a>
          </Link>
        </div>

        <div className="bigPosts__slider">
        <Link href={{
            pathname: '/posts/[post]',
            query:{post:posts[3].id}
          }}>
            <a className="border">
            {posts[3].title}
            </a>
          </Link>
        </div>

      </Slider>
    </div>
  )
}