import Link from 'next/link'

export default function Footer() {
    return (
        <footer >
            <div style={{ display: "flex", flexDirection: "row" }} className="footer">
                <div style={{ display: "flex", flexDirection: "column" }} className="footer__flex">
                    <Link href="/">
                        Home
                    </Link>

                    <Link href="/posts">
                        <a>Posts</a>
                    </Link>

                    <Link href="/users">
                        <a>Users</a>
                    </Link>
                </div>

                <div style={{ display: "flex", flexDirection: "column" }} className="footer__flex">
                    <Link href="https://katya-ru-fullstack.herokuapp.com/">
                        <a>About us</a>
                    </Link>

                    <Link href="https://katya-ru-fullstack.herokuapp.com/">
                        <a>Contact us</a>
                    </Link>
                </div>
                <div className="footer__rightText">
                    Created by Katya Rukosuev
                </div>
            </div>

        </footer>
    )
}