<template>
  <div id="table-funds" class="width-100 bg-white radius shadow margin-top-2">
    <div v-if="!loading">
      <div v-for="(fund, index) in funds" :key="index" class="width-100">
        <div
          class="grid-x grid-padding-x fund-line"
          @click="expandFund(fund.fund_manager.id)"
          :data-section="fund.fund_manager.id"
        >
          <div class="cell auto">
            <p>{{ fund.simple_name }}</p>
            <span>{{ fund.specification.fund_main_strategy.name }}</span>
          </div>
        </div>
        <div class="fund-info width-100" :data-info="fund.fund_manager.id">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
          cupiditate illum ipsum non quasi sapiente veniam voluptates. Assumenda
          commodi eum eveniet maxime modi officia pariatur quia vitae
          voluptatibus. Praesentium, tempore.
        </div>
      </div>
    </div>
    <div v-else>
      <figure class="width-100 text-center">
        <img src="../assets/loading.gif" alt="loading" />
      </figure>
    </div>
  </div>
</template>

<script>
export default {
  name: "TableFunds",
  props: {
    funds: {
      type: Array,
      default: () => []
    },
    loading: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    infos() {
      let infos = document.querySelectorAll(".fund-info");
      return Array.prototype.slice.call(infos);
    }
  },
  methods: {
    expandFund(id) {
      document
        .querySelector(`[data-section="${id}"]`)
        .classList.toggle("active");
      const panel = this.infos.find(
        info => info.dataset.info === id.toString()
      );
      panel.classList.toggle("show");
    }
  }
};
</script>
