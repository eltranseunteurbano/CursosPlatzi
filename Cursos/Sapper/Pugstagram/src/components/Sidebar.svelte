<script>
    import Profile from './Profile.svelte';
    import Stories from './Stories.svelte'
    import Footer from './Footer.svelte'

    export let nickname;

</script>

<style>
    .Sidebar {
        position: relative;
        padding: 4.5em 0 0 0;
    }
    .Sidebar-content {
        position: fixed;
    }
</style>

<div class="Sidebar">
    <div class="Sidebar-content">
        <Profile />
        <Stories { nickname } />
        <Footer />
    </div>
</div>