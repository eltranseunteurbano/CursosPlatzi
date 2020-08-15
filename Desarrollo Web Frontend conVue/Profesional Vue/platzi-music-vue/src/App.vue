<template lang='pug'>
  #app
    section.section
      nav.navbar.has-shadow
        .container.is-large
          .field.has-addons.is-expanded
            .control.is-expanded
              input.input.islarge.is-large(
                type="text",
                placeholder="Buscar canciones"
                v-model="searchQuery"
                )
            .control
              a.button.is-info.is-large(@click='search') Buscar
            .control
              a.button.is-danger.is-large &times;
            p
              small {{searchMessage}}

      .container.results
        .columns
          .column(v-for="t in tracks") {{ t.name }} - {{ t.artist }}

</template>

<script>
  const tracks = [
    { name: 'Muchacha', artist: 'Luis Alberto SPinetta' },
    { name: 'Safaera', artist: 'Bad Bunny' },
    { name: 'Amarillo', artist: 'J Balvin' }
  ]

  export default {
    name: 'app',
    data () {
      return {
        searchQuery: '',
        tracks: []
      }
    },

    computed: {
      searchMessage () {
        return `Encontrados: ${this.tracks.length}`
      }
    },

    methods: {
      search () {
        this.tracks = tracks
      }
    }
  }
</script>

<style lang="scss">
  @import './scss/main.scss';

  .results {
    margin-top: 50px;
  }
</style>
