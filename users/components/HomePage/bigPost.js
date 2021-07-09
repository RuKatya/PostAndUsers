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
      <h1 className="bigPosts__header">Today posts</h1>
      <Slider {...settings} className="bigPosts__slider">

        <div className="bigPosts__slider">
          <Link href={{
            pathname: '/posts/[post]',
            query: { post: posts[0].id }
          }}>
            <a className="bigPosts__link">
              <div className="bigPosts__link--img">
                <Image
                  src="/imgs/writeGirl.jpg"
                  alt="Write girl"
                  width="650"
                  height="450" />
              </div>
              <div className="bigPosts__link--content">
                <h4 className="bigPosts__link--content__date">{todayDate}</h4>
                <h2 className="bigPosts__link--content__header">{posts[0].title}</h2>
              </div>
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
              <div className="bigPosts__link--img">
                <Image
                  src="/imgs/tv.jpg"
                  alt="Write girl"
                  width="650"
                  height="450" />
              </div>
              <div className="bigPosts__link--content">
                <h4 className="bigPosts__link--content__date">{todayDate}</h4>
                <h2 className="bigPosts__link--content__header">{posts[1].title}</h2>
              </div>
            </a>
          </Link>
        </div>

        <div className="bigPosts__slider">
          <Link href={{
            pathname: '/posts/[post]',
            query: { post: posts[2].id }
          }}>
            <a className="bigPosts__link">
              <div className="bigPosts__link--img">
                <Image
                  src="/imgs/tablet.jpg"
                  alt="Write girl"
                  width="650"
                  height="450" />
              </div>
              <div className="bigPosts__link--content">
                <h4 className="bigPosts__link--content__date">{todayDate}</h4>
                <h2 className="bigPosts__link--content__header">{posts[2].title}</h2>
              </div>
            </a>
          </Link>
        </div>

        <div className="bigPosts__slider">
          <Link href={{
            pathname: '/posts/[post]',
            query: { post: posts[3].id }
          }}>
            <a className="bigPosts__link">
              <div className="bigPosts__link--img">
                <Image
                  src="/imgs/presentation.jpg"
                  alt="Write girl"
                  width="650"
                  height="450" />
              </div>
              <div className="bigPosts__link--content">
                <h4 className="bigPosts__link--content__date">{todayDate}</h4>
                <h2 className="bigPosts__link--content__header">{posts[3].title}</h2>
              </div>
            </a>
          </Link>
        </div>

      </Slider>
    </div>
  )
}