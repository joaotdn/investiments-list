<template>
  <div id="app">
    <Header />
    <div class="grid-container">
      <div class="grid-x grid-margin-x">
        <div class="cell small-12 medium-9">
          <Search />
          <TableFunds :funds="investmentsList" :loading="loading" />
        </div>
        <div class="cell small-12 medium-3"></div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Search from "./components/Search.vue";
import TableFunds from "./components/TableFunds";

export default {
  name: "App",
  components: {
    Header,
    Search,
    TableFunds
  },
  data() {
    return {
      loading: true,
      error: false,
      investmentsList: []
    };
  },
  created() {
    fetch(
      "https://s3.amazonaws.com/orama-media/json/fund_detail_full.json?limit=1000&offset=0&serializer=fund_detail_full"
    )
      .then(data => data.json())
      .then(response => {
        this.investmentsList = response;
      })
      .catch(() => {
        this.loading = false;
        this.error = true;
      })
      .finally(() => (this.loading = false));
  }
};
</script>

<style lang="scss">
@import "assets/scss/app";
</style>
