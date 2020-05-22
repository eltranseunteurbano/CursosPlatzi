<script>
  import { goto } from "@sapper/app";
  import { likeCount } from "../store/store.js";
  export let segment;

  const navigateHome = async () => {
    await goto("/");
  };
</script>

<style>
  .Header {
    background-color: white;
    position: fixed;
    width: 100%;
  }
  .Header-container {
    grid-template-columns: minmax(auto, 936px);
    display: grid;
    justify-content: center;
    background-color: white;
    border-bottom: 1px solid rgba(38, 38, 38, 0.4);
  }
  .Header-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.5em;
  }
  .Header ul {
    list-style: none;
  }
  .Header li {
    display: inline-block;
    margin: 0 0 0 1em;
  }
  .Header i {
    font-size: 16px;
    color: rgba(38, 38, 38, 0.7);
    cursor: pointer;
  }

  h1 {
    padding: 0;
    margin: 0;
    font-size: 28px;
    color: black;
    font-family: "Pacifico", cursive;
    cursor: pointer;
    position: relative;
    background: #fff;
    mix-blend-mode: multiply;
    display: inline-block;
  }

  h1:before {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at top left, #f09433, #bc1888);
    mix-blend-mode: screen;
    position: absolute;
    top: 0;
    left: 0;
  }

  [aria-current] i {
    color: #bc1888;
  }
</style>

<div class="Header">
  <div class="Header-container">
    <div class="Header-content">
      <div class="Header-logo">
        <h1 on:click={navigateHome}>Pugstagram</h1>
      </div>
      <div class="Header-nav">
        <ul>
          <li>
            <i class="fas fa-heart" />
            {$likeCount === 0 ? '' : $likeCount}
          </li>
          <li>
            <a
              aria-current={segment === 'profile' ? 'page' : undefined}
              rel="prefetch"
              href="profile">
              <i class="fas fa-user-alt" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>
