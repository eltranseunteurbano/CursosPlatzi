<script>
    import { onMount } from 'svelte'

    import Header from '../components/Header.svelte'
    import Main from '../components/Main.svelte'
    import TimeLine from '../components/TimeLine.svelte'
    import Sidebar from '../components/Sidebar.svelte'

    let data = {}
    const API = "https://us-central1-pugstagram-co.cloudfunctions.net/data"
    
    onMount(async () => {
        const response = await fetch(API)
        data = await response.json()
    })

</script>

<Header />
<Main>
    <TimeLine post = {data.posts} />
    <Sidebar {...data.user} />

    <script src="https://kit.fontawesome.com/1a7dceea54.js" crossorigin="anonymous"></script>
</Main>