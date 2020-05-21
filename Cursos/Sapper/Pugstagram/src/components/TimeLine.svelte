<script>
    import { onMount } from 'svelte'

    import Card from './Card'

    export let post = []

</script>

<style>
    .TimeLine {
        padding: 4em 0 0 0;
    }
</style>

<div class="TimeLine">
    <div class="TimeLine-container">
    {#each post as item}
         <Card {...item}/>
    {:else}
        <p>Loading...</p>
    {/each}
    </div>
</div>