import { bottom } from '@popperjs/core'
import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'
import Footer from './footer'

export default function MainLayout({ children, title = 'Posts' }) {
    return (
        <>
            <Head>

                <title> Blog | {title} </title>
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

            <Footer />
        </>
    )
}