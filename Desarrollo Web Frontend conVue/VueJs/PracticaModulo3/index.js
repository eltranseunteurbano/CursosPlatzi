Vue.component('modal', {
    props: [],
    data() {
        return {
            title: "MODAL"
        }
    },
    methods: {
        onCloseModal () {
            this.$emit('close-modal-child')
        }
    },
    template: `
      <div class="modal-mask">
        <div class="modal-wrapper">
          <div class="modal-container">
            <h3>{{title}}</h3>
            <slot name="body"></slot>
            <footer>
              <button v-on:click="onCloseModal">Cerrar</button>
            </footer>
          </div>
        </div>
      </div>`
  })
  
  new Vue({
    el: '#app',
    data() {
        return {
            showModal: true,
        }
    },
    methods: {
        updateModal(){
            this.showModal = !this.showModal
            console.log(this.showModal)
        }
    }
  })