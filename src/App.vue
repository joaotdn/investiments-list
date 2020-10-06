<template>
  <div id="app">
    <Header />
    <div class="grid-container">
      <div class="grid-x grid-margin-x">
        <div class="cell small-12 medium-9">
          <Search />
        </div>
        <div class="cell small-12 medium-3"></div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Search from './components/Search.vue'

export default {
  name: 'App',
  components: {
    Header,
    Search
  }
}
</script>

<style lang="scss">
@import "assets/scss/app";
</style>
