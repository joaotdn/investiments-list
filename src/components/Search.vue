<template>
  <div class="width-100 padding-top-1 padding-bottom-1 bg-white radius shadow">
    <div class="grid-x grid-padding-x">
      <div id="search-box" class="cell medium-12 large-6 position-relative">
        <font-awesome-icon icon="search" />
        <input type="text" id="search-investment" class="margin-bottom-0" :placeholder="placeholderTxt">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Search',
  data() {
    return {
      placeholderTxt: 'Buscar fundo por nome'
    }
  }
}
</script>

<style lang="scss" scopped>
@import "../assets/scss/_settings.scss";
#search-investment {
  border-bottom: 1px solid $dark-gray;
  padding-left: 0;
  &::placeholder {
    color: $dark-gray;
    font-weight: 500;
  }
}
</style>