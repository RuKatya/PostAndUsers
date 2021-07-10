import React, { Component } from "react";
import Slider from "react-slick";
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';

import Link from 'next/link'
import Image from 'next/image'

export default function BigPost({ posts }) {
  //Date
  const date = new Date();
  const todayDate = date.toLocaleTimeString()
  console.log(todayDate)

  //Arrows
  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <FaArrowRight />
      </div>
    )
  }

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <FaArrowLeft />
      </div>
    )
  }

  //Slider settings
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };

  return (
    <div className="bigPosts">
      {/* <h1 className="bigPosts__header">Hot posts</h1> */}
      <Slider {...settings} className="bigPosts__slider">

        {/* First post */}

        <div className="bigPosts__slider">
          <Link href={{
            pathname: '/posts/[post]',
            query: { post: posts[0].id } //Post 1
          }}>
            <a className="bigPosts__link">
              <div className="bigPosts__link--img">
                <Image
                  src="/imgs/writeGirl.jpg"
                  alt="Write women"
                  width="800"
                  height="550" />
              </div>
              <div className="bigPosts__link--content">
                <h4 className="bigPosts__link--content__date">{todayDate}</h4>
                <h1 className="bigPosts__link--content__header">{posts[0].title}</h1>  {/* Post 1 title */}
              </div>
            </a>
          </Link>
        </div>

        {/*Second post */}

        <div className="bigPosts__slider" >
          <Link
            href={{
              pathname: '/posts/[post]',
              query: { post: posts[10].id } //Post 11
            }}>
            <a className="bigPosts__link">
              <div className="bigPosts__link--img">
                <Image
                  src="/imgs/tv.jpg"
                  alt="TV"
                  width="800"
                  height="550" />
              </div>
              <div className="bigPosts__link--content">
                <h4 className="bigPosts__link--content__date">{todayDate}</h4>
                <h2 className="bigPosts__link--content__header">{posts[10].title}</h2> {/* Post 11 title */}
              </div>
            </a>
          </Link>
        </div>

        {/* Third post */}

        <div className="bigPosts__slider">
          <Link href={{
            pathname: '/posts/[post]',
            query: { post: posts[21].id } //Post 22
          }}>
            <a className="bigPosts__link">
              <div className="bigPosts__link--img">
                <Image
                  src="/imgs/tablet.jpg"
                  alt="Tablet"
                  width="800"
                  height="550" />
              </div>
              <div className="bigPosts__link--content">
                <h4 className="bigPosts__link--content__date">{todayDate}</h4>
                <h2 className="bigPosts__link--content__header">{posts[21].title}</h2> {/* Post 22 title*/}
              </div>
            </a>
          </Link>
        </div>

        {/* Fourth post */}

        <div className="bigPosts__slider">
          <Link href={{
            pathname: '/posts/[post]',
            query: { post: posts[31].id } //Post 32
          }}>
            <a className="bigPosts__link">
              <div className="bigPosts__link--img">
                <Image
                  src="/imgs/presentation.jpg"
                  alt="Presentation"
                  width="800"
                  height="550" />
              </div>
              <div className="bigPosts__link--content">
                <h4 className="bigPosts__link--content__date">{todayDate}</h4>
                <h2 className="bigPosts__link--content__header">{posts[31].title}</h2> {/* Post 32 title */}
              </div>
            </a>
          </Link>
        </div>

      </Slider>
    </div>
  )
}