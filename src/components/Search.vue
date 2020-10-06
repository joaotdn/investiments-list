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
          @change="onSearch"
        />
      </div>
      <div
        class="cell small-12 radius width-100 padding-top-1 padding-bottom-1 margin-top-1"
      >
        <div class="width-100 bg-light-gray radius search-filters padding-1">
          <div class="grid-x grid-padding-x full">
            <div class="cell small-12 medium-4">
              <h5>Aplicação mínima</h5>
              <div class="filter-control width-100 align-middle">
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
            <div class="cell small-12 medium-4">
              <h5>Perfil de risco do fundo</h5>
              <div class="filter-control width-100"></div>
            </div>
            <div class="cell small-12 medium-4">
              <h5>Prazo de resgate</h5>
              <div class="filter-control width-100"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SlideRange from "./SlideRange";

export default {
  name: "Search",
  components: {
    SlideRange
  },
  data() {
    return {
      term: "",
      totalFund: 0
    };
  },
  methods: {
    onSearch(e) {
      this.term = e.target.value;
    },
    rangeValue(value) {
      this.totalFund = value;
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
