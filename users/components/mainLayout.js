import { bottom } from '@popperjs/core'
import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'

export default function MainLayout({ children, title = 'Posts' }) {
    const [active, setActive] = useState('Home page')

    function isActive(activebtn){
        setActive(`${activebtn}`) 
    }
    return (
        <>
            <Head>
                <title> Blog | {title} </title>
                {/* <link rel="icon" href="/img/favicon.ico" /> */}

            </Head>
            <div className="navBar">
                <span >
                    <Link href="/">
                        <a
                            className="navBar__link navBar__homeBtn"
                            onClick={()=>isActive(`Home page`)}
                            // style={{ borderBottom: active === `Home page` ? "1px solid black" : "none" }}
                        >Home page</a>
                    </Link>

                    {' '}
                    <Link href="/">
                        <a
                            className="navBar__link"
                            onClick={() =>  isActive(`All posts`) }
                            style={{ borderBottom: active === `All posts` ? "1px solid black" : "none" }}
                        >All posts </a>
                    </Link>

                    {' '}
                    <Link href="/">
                        <a
                            className="navBar__link"
                            onClick={() =>  isActive(`All users`) }
                            style={{ borderBottom: active === `All users` ? "1px solid black" : "none" }}
                        >All users</a>
                    </Link>
                </span>

            </div>

            <main>
                {children}
            </main>

            <footer>FOOTER</footer>
        </>
    )
}