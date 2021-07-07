import Head from 'next/head'
import Link from 'next/link'

export default function MainLayout({ children, title = 'Posts' }) {
    return (
        <>
            <Head>
                <title> Blog | {title} </title>
                {/* <link rel="icon" href="/img/favicon.ico" /> */}

            </Head>
            <div className="navBar">
                <span >
                    <Link href="/">
                        <a >Home page</a>
                    </Link>

                    {' '}
                    <Link href="/">
                        <a>All posts </a>
                    </Link>

                    {' '}
                    <Link href="/">
                        <a>All users</a>
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