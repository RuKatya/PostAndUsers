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
                        // style={{ color: title === `Home page` ? "white" : "rgb(175, 219, 255)" }}
                        >Home</a>
                    </Link>
                </div>

                <div className="navBar__rightSide">
                    <Link href="/posts">
                        <a
                            className="navBar__link"
                            style={{ borderBottom: title === `Posts` ? "1px solid white" : "none" }}
                        >Posts </a>
                    </Link>


                    <Link href="/users">
                        <a
                            className="navBar__link"
                            style={{ borderBottom: title === `Users` ? "1px solid white" : "none" }}
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