import { useRouter } from 'next/router'
import Header from '../components/Header';

const Channel = () => {

    return(
        <>
            <Header />
            <h1>Vista de canal</h1>
        </>
    )
}

export const getStaticProps = async () => {
    const router = useRouter();
    const { query } = router;
    let request = await fetch(`https://api.audioboom.com/channels/${query.id}`)
    console.log(request)
    return request;
}



export default Channel;