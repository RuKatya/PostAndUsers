import { bottom } from '@popperjs/core'
import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'

export default function MainLayout({ children, title = 'Posts' }) {
    return (
        <>
            <Head>
                <title> Blog | {title} </title>
                {/* <link rel="icon" href="/img/favicon.ico" /> */}

            </Head>
            <div className="navBar">
                <div className="navBar__leftSide">
                    <Link href="/">
                        <a
                            className="navBar__link navBar__homeBtn"
                        >Home</a>
                    </Link>
                </div>

                <div className="navBar__rightSide">
                    <Link href="/posts/allposts">
                        <a
                            className="navBar__link"
                            style={{ borderBottom: title === `All posts` ? "1px solid black" : "none" }}
                        >Posts </a>
                    </Link>


                    <Link href="/">
                        <a
                            className="navBar__link"
                            style={{ borderBottom: title === `All users` ? "1px solid black" : "none" }}
                        >Users</a>
                    </Link>
                </div>

            </div>

            <main>
                {children}
            </main>

            <footer>FOOTER</footer>
        </>
    )
}