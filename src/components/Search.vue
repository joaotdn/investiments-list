<template>
  <div class="width-100 padding-top-1 padding-bottom-1 bg-white radius shadow">
    <div class="grid-x grid-padding-x">
      <div id="search-box" class="cell medium-12 large-6 position-relative">
        <label for="search-investment">
          <font-awesome-icon icon="search" />
        </label>
        <input
          id="search-investment"
          v-model="term"
          type="text"
          class="margin-bottom-0"
          placeholder="Buscar fundo por nome"
          name="search"
          @keyup="onSearch"
        />
      </div>
      <div
        class="cell small-12 radius width-100 padding-top-1 padding-bottom-1 margin-top-1"
      >
        <div class="width-100 bg-light-gray radius search-filters padding-1">
          <div class="grid-x grid-padding-x full">
            <div class="cell small-12 medium-4 filter-control ">
              <h5>Aplicação mínima</h5>
              <div class="width-100">
                <SlideRange
                  :min="0"
                  :max="20000"
                  :step="10"
                  @onRange="rangeValue"
                />
                <p>
                  <strong>
                    {{
                      "Até " +
                        new Intl.NumberFormat("pt-br", {
                          style: "currency",
                          currency: "BRL"
                        }).format(totalFund)
                    }}
                  </strong>
                </p>
              </div>
            </div>
            <div class="cell small-12 medium-4 filter-control">
              <h5>Perfil de risco do fundo</h5>
              <div class="width-100">
                <div class="grid-x align-middle">
                  <div class="cell small-12 text-center">
                    <SlideProfile
                      :min="1"
                      :max="11"
                      :step="1"
                      @onRange="rangeProfile"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div class="cell small-12 medium-4 filter-control">
              <h5>Prazo de resgate</h5>
              <div class="width-100">
                <SlideRange :min="0" :max="30" :step="1" @onRange="rangeDays" />
                <p>
                  <strong>Até {{ totalDays }} dias úteis</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SlideRange from "./SlideRange";
import SlideProfile from "./SlideProfile";

export default {
  name: "Search",
  components: {
    SlideRange,
    SlideProfile
  },
  data() {
    return {
      term: "",
      totalFund: 0,
      totalDays: 0,
      totalRisk: 0
    };
  },
  methods: {
    onSearch(e) {
      this.$emit("onSearch", e.target.value);
    },
    rangeValue(value) {
      this.totalFund = value;
      this.$emit("onRange", value);
    },
    rangeDays(days) {
      this.totalDays = days;
      this.$emit("onRangeDays", days);
    },
    rangeProfile(value) {
      this.totalRisk = value;
      this.$emit("onRangeProfile", value);
    }
  }
};
</script>

<style lang="scss" scoped>
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
