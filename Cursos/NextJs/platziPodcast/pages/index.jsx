import 'isomorphic-fetch'
import Link from 'next/link'
import Header from '../components/Header'

const Home = ( { channels = [] } ) => {
    return(
        <>
            <Header />
            <div className="channels">
                {channels.map( (channel) => {
                    return(
                        <Link href={`/channel?id=${ channel.id }`} key={channel.id}>
                            <a className="channel" >
                                <img src={channel.urls.logo_image.original} alt={channel.title} />
                                <h2>{ channel.title }</h2>
                            </a>
                        </Link>
                    )
                })}
            </div>

        <style jsx>
        {`
            .channels {
                display: grid;
                grid-gap: 15px;
                padding: 15px;
                grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
            }
            a.channel {
                display: block;
                margin-bottom: 0.5em;
                color: #333;
                text-decoration: none;
            }
            .channel img {
                border-radius: 3px;
                box-shadow: 0px 2px 6px rgba(0,0,0,0.15);
                width: 100%;
            }
            h2 {
                padding: 5px;
                font-size: 0.9em;
                font-weight: 600;
                margin: 0;
                text-align: center;
            }
        `}
        </style>

        <style jsx global>{`
            body {
                margin: 0;
                font-family: system-ui;
                background: white;
            }
        `}</style>

        </>
    )
}

export async function getStaticProps() {
    let API = "https://api.audioboom.com/channels/recommended";

    let request = await fetch( API )
    let { body: channels } = await request.json()

    return { props: { channels } }
}

export default Home;