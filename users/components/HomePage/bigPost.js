import React, { Component } from "react";
import Slider from "react-slick";

import Link from 'next/link'
import Image from 'next/image'

export default function BigPost({ posts }) {
  const settings = {
    dots: true,
    infinite: true,
    // autoplay: true,
    speed: 500,
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
            query: { post: posts[0].id }
          }}>
            <a className="bigPosts__link">
              <Image
              src="/imgs/writeGirl.jpg"
              alt="Write girl"
              width="600"
              height="450"/>
              {/* <img
                src="/imgs/writeGirl.jpg"
                alt="writeGirl"
              /> */}
              <h2 className="bigPosts__link--header">{posts[0].title}</h2>
            </a>
          </Link>
        </div>

        <div className="bigPosts__slider" >
          <Link
            href={{
              pathname: '/posts/[post]',
              query: { post: posts[1].id }
            }}>
            <a className="bigPosts__link">
            <Image
              src="/imgs/tv.jpg"
              alt="Write girl"
              width="600"
              height="450"/>
              <h2 className="bigPosts__link--header">{posts[1].title}</h2>
            </a>
          </Link>
        </div>

        <div className="bigPosts__slider">
          <Link href={{
            pathname: '/posts/[post]',
            query: { post: posts[2].id }
          }}>
            <a className="bigPosts__link">
            <Image
              src="/imgs/tablet.jpg"
              alt="Write girl"
              width="600"
              height="450"/>
              <h2 className="bigPosts__link--header">{posts[2].title}</h2>
            </a>
          </Link>
        </div>

        <div className="bigPosts__slider">
          <Link href={{
            pathname: '/posts/[post]',
            query: { post: posts[3].id }
          }}>
            <a className="bigPosts__link">
            <Image
              src="/imgs/presentation.jpg"
              alt="Write girl"
              width="600"
              height="450"/>
              <h2 className="bigPosts__link--header">{posts[3].title}</h2>
            </a>
          </Link>
        </div>

      </Slider>
    </div>
  )
}