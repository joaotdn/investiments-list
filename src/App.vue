<template>
  <div id="app">
    <Header />
    <div class="grid-container">
      <div class="grid-x grid-margin-x">
        <div class="cell small-12 medium-9">
          <Search
            @onSearch="search"
            @onRange="range"
            @onRangeDays="rangeDays"
            @onRangeProfile="rangeProfile"
          />
          <TableFunds :items="funds" :loading="loading" />
          <Legend />
        </div>
        <div class="cell small-12 medium-3">
          <FiltersCheckbox />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Search from "./components/Search.vue";
import TableFunds from "./components/TableFunds";
import FiltersCheckbox from "./components/FiltersCheckbox";
import Legend from "./components/Legend";

export default {
  name: "App",
  components: {
    Header,
    Search,
    TableFunds,
    FiltersCheckbox,
    Legend
  },
  data() {
    return {
      loading: true,
      error: false,
      investmentsList: [],
      funds: []
    };
  },
  created() {
    fetch(
      "https://s3.amazonaws.com/orama-media/json/fund_detail_full.json?limit=1000&offset=0&serializer=fund_detail_full"
    )
      .then(data => data.json())
      .then(response => {
        this.investmentsList = response;
        this.funds = [...this.funds, ...response];
      })
      .catch(() => {
        this.loading = false;
        this.error = true;
      })
      .finally(() => {
        this.loading = false;
        this.categorize();
      });
  },
  methods: {
    search(term) {
      this.funds = this.investmentsList.filter(fund =>
        fund.simple_name.toLowerCase().includes(term.toLowerCase())
      );
      this.categorize();
    },
    range(value) {
      this.funds = this.investmentsList.filter(
        fund =>
          parseFloat(fund.operability.minimum_initial_application_amount) <=
          parseFloat(value)
      );
      this.categorize();
    },
    rangeDays(value) {
      this.funds = this.investmentsList.filter(
        fund =>
          parseFloat(fund.operability.retrieval_quotation_days) <=
          parseFloat(value)
      );
      this.categorize();
    },
    rangeProfile(value) {
      this.funds = this.investmentsList.filter(
        fund =>
          parseInt(fund.specification.fund_risk_profile.score_range_order) ===
          parseInt(value)
      );
      this.categorize();
    },
    categorize() {
      if (this.funds.length) {
        let categories = this.funds.map(
          fund => fund.specification.fund_main_strategy.name
        );
        categories = [...new Set(categories)];
        this.funds = categories.map(cat => ({
          title: cat,
          funds: this.funds.filter(
            f => f.specification.fund_main_strategy.name === cat
          )
        }));
      }
    }
  }
};
</script>

<style lang="scss">
@import "assets/scss/app";
</style>
