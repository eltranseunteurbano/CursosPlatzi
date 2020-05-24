import Link from 'next/link'

const Header = () => (
    <>
        <header>
            <Link href="/">
                <a>
                    Podcasts

                </a>
            </Link>
        </header>

        <style jsx global>{`
            body {
                margin: 0;
                font-family: system-ui;
                background: white;
            }
        `}</style>

        <style jsx>
            {`
                header {
                    color: #fff;
                    background: #8756ca;
                    padding: 15px;
                    text-align: center;
                }

                a{
                    color: white;
                    text-decoration: none;
                    font-weight: bolder;
                    text-transform: uppercase;
                }
            `}
        </style>
    </>

)

export default Header;