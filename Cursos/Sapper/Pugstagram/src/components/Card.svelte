<script>
    import { fade } from 'svelte/transition'

    import { likeCount } from '../store/store.js'

    import Comments from './Comments.svelte'
    import Modal from './Modal.svelte';
    import Share from './Share.svelte';

    export let username = "";
    export let location = "";
    export let photo = "";
    export let postComment = "";
    export let comments = [];
    export let avatar = "";

    let shared = 0;
    

    let isModal = false;
    let like = false;
    let bookmark = false;

    function handleClickModal(){
        isModal = !isModal;
        console.log(isModal)
    }

    function handleCountShare(){
        shared += 1;
        console.log(shared)
    }

    function addLike () {
        like = !like

        if( like ){
            likeCount.update( n => n + 1 );

        } else {
            likeCount.update( n => n - 1 );
        }

    }

</script>

<style>
    .Card {
        border: 1px solid rgba(219, 219, 219, 1);
        border-radius: 4px;
        background-color: white;
        margin: 0 0 2em 0;
    }
    .Card-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1em;
    }
    .Card-user {
        display: flex;
        align-items: center;
        justify-content: flex-end;
    }
    .Card-user img {
        width: 32px;
        height: 32px;
        border-radius: 50%;
    }
    .Card-user h2 {
        margin: 0;
        padding: 0;
        font-size: 14px;
        font-weight: 600;
        margin: 0 0 0 1em;
        color: black;
    }
    .Card-user h2 span {
        display: block;
        font-size: 12px;
        font-weight: normal;
        color: rgba(38, 38, 38, 0.7);
    }
    .Card-photo {
        padding: 0;
        margin: 0;
        
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .Card-photo img {
        width: 100%;
        height: auto;
    }
    .Card-photo figure {
        margin: 0;
        padding: 0;
        cursor: pointer;
    }
    .Card-photo-like{
        position: absolute;
        color: rgba(255, 255, 255, 0);
        opacity: .8;
        font-size: 250px;
        display: none;

    }
    .Card-settings i {
        cursor: pointer;
    }
    .Card-icons {
        padding: 1em;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .Card-icons-first{
        display: flex;
        justify-content: flex-start;
        align-content: center;
    }
    .Card-icons div {
        margin: 0 1em 0 0;
        cursor: pointer;
        font-size: 20px;
    }
    .Card-icons div:last-child {
        margin: 0;
    }

    .Card-icons i{
        margin-right: 5px;
    }
    .Card-description {
        padding: 0 1em 1em 1em;
    }
    .Card-description h3 {
        font-size: 14px;
        font-weight: bold;
        color: black;
    }
    .Card-description span {
        font-size: 14px;
    }
    .active-like {
        color: rgba(252, 0, 0, 0.7);
        animation: bounce linear 0.8s;
        animation-iteration-count: 1;
        transform-origin: 20% 20%;
    }
    .bookmark{
        animation: outColor linear 0.5s;
    }
    .active-bookmark {
        color: #f09433;
        animation: changeColor linear 0.5s;
    }

    .active-icon-like{
        animation: appearLike linear 5s;
    }

    @keyframes changeColor{
        0% {
            color: rgba(38, 38, 38, 0.7);
        }

        100% {
            color: #f09433;
        }
    }

    @keyframes appearLike{
        0% {
            color: rgba(255, 255, 255, 0);
            display: none !important;
        }

        50% {
            color: rgba(255, 255, 255, 0.8);
            display: block !important;
        }

        100% {
            color: rgba(255, 255, 255, 0);
            display: none !important;
        }
    }


    @keyframes outLike {
        0% {
            color: rgba(252, 0, 0, 0.7);
        }

        100% {
            color: rgba(38, 38, 38, 0.7);
        }
    }

    @keyframes bounce {
        0% {
            transform: translate(0px, 0px);
            color: rgba(38, 38, 38, 0.7);
        }
        15% {
            transform: translate(0px, -10px);
        }
        30% {
            transform: translate(0px, 0px);
        }
        45% {
            transform: translate(0px, -5px);
        }
        60% {
            transform: translate(0px, 0px);
        }
        75% {
            transform: translate(0px, -1px);
        }
        100% {
            transform: translate(0px, 0px);
            color: rgba(252, 0, 0, 0.7)
        }
    }
</style>

<div class="Card">

    {#if isModal}
        <div transition:fade>
            <Modal>
                <Share isModal = { handleClickModal } countShare = { handleCountShare }/>
            </Modal>
        </div>
    {/if}

    <div class="Card-container">
        <div class="Card-header">
            <div class="Card-user">
                <img src={ avatar } alt = { username }>
                <h2>{ username }<span>{ location }</span></h2>    
            </div>
            <div class="Card-settings">
                <i class="fas fa-ellipsis-h"></i>
            </div>
        </div>

        <div class="Card-photo">
            <figure on:dblclick={ addLike } >
                <img src = { photo } alt = {  username }>
            </figure>

            <div class="Card-photo-like" class:active-icon-like = { like }>
                <i class="fas fa-heart icon" />
            </div>

        </div>

        <div class="Card-icons">

            <div class="Card-icons-first">
                <div class="Card-icons-first-item">
                    <i class="fas fa-heart" class:active-like={like}  on:click = { addLike } ></i>
                    <span transition:fade>{ $likeCount > 0 ? $likeCount : '' }</span>
                </div>

                <div class="Card-icons-first-item">
                    <i class="fas fa-comments"></i>
                </div>
                
                <div class="Card-icons-first-item">
                    <i class="fas fa-paper-plane" on:click = { handleClickModal }></i>
                    <span>{ shared > 0 ? shared : '' }</span>

                </div>

            </div>
            <div class="Card-icons-last">
                <i class="fas fa-bookmark bookmark" class:active-bookmark = { bookmark } on:click = { () => ( bookmark = !bookmark ) }></i>
            </div>
        </div>

        <div class="Card-description">
            <h3>{ username }</h3>
            <span>{ postComment }</span>
        </div>

        <Comments comments = { comments } />

    </div>
</div>