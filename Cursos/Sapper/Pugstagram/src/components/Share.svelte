<script>

    import { shareCount } from './Card.svelte';

    export let isModal = () => {}
    export let countShare = () => {}

</script>

<style>
  .Share {
    border: 1px solid rgba(219, 219, 219, 1);
    border-radius: 4px;
    background-color: white;
    margin: 0 0 2em 0;
    width: 300px;
    height: 80px;
    position: absolute;
    top: 300px;
    left: 30%;
    z-index: 9;
    padding: 1em;
  }
  .Share-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .Share-header h2 {
    font-size: 16px;
  }
  .Share-header i {
    cursor: pointer;
  }
  .Share-content a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: black;
    font-size: 14px;
    margin: 2em 0 0 0;
  }
  .Share-content i {
    color: #3b5998;
    margin: 0 0.5em 0 0;
    font-size: 20px;
  }
</style>

<div class="Share">
    
    <div class="Share-header">
        <h2>Compartir</h2>
        <i class="fas fa-times-circle" on:click = { isModal } />
    </div>

    <div class="Share-content">
        <a href="https://www.facebook.com/sharer/sharer.php?^u=https://pugstagram.co" target="_blank" on:click = { countShare }>
            <i class="fab fa-facebook-square"/>
            Compartir en Facebook
        </a>
    </div>

</div>