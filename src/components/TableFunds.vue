<template>
  <div id="table-funds" class="width-100 bg-white radius shadow margin-top-2">
    <div v-if="!loading">
      <div
        v-for="({ title, funds }, index) in items"
        :key="index"
        class="width-100"
      >
        <header
          class="strategy-name width-100 padding-1 bg-medium-gray text-uppercase"
        >
          {{ title }}
        </header>
        <div v-for="fund in funds" :key="fund.id">
          <div
            class="grid-x grid-padding-x align-middle fund-line"
            @click="expandFund(fund.id)"
            :data-section="fund.id"
            :style="
              `border-color: ${
                colors[fund.specification.fund_risk_profile.score_range_order]
              }`
            "
          >
            <div class="cell medium-4">
              <p>{{ fund.simple_name }}</p>
              <span>{{ fund.specification.fund_main_strategy.name }}</span>
              <span
                v-if="
                  fund.description.target_audience ===
                    'Investidores Qualificados'
                "
                class="tooltip-star display-inline-block position-relative"
                ><font-awesome-icon icon="star"
              /></span>
            </div>

            <div class="cell auto text-center">
              <p>
                <strong>{{ fund.quota_date | moment("DD/MM/YYYY") }}</strong>
              </p>
            </div>

            <div class="cell auto text-center">
              <p>
                <strong>{{ fund.profitabilities.month }}</strong>
              </p>
            </div>

            <div class="cell auto text-center">
              <p>
                <strong>{{ fund.profitabilities.year }}</strong>
              </p>
            </div>

            <div class="cell auto text-center">
              <p>
                <strong>{{ fund.profitabilities.m12 }}</strong>
              </p>
            </div>

            <div class="cell auto text-center">
              <p>
                <strong>
                  {{
                    new Intl.NumberFormat("pt-br", {
                      style: "currency",
                      currency: "BRL"
                    }).format(
                      fund.operability.minimum_initial_application_amount
                    )
                  }}
                </strong>
              </p>
            </div>

            <div class="cell auto text-center">
              <h5
                class="dark-gray display-inline-block position-relative"
                data-tooltip
              >
                <font-awesome-icon icon="info-circle" />
                <div class="v-tooltip">
                  {{ fund.description.objective }}
                </div>
              </h5>
            </div>

            <div class="cell shrink text-center">
              <h5 class="reply-btn display-inline-block position-relative">
                <font-awesome-icon icon="reply" />
              </h5>
            </div>
          </div>
          <div class="fund-info width-100" :data-info="fund.id">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
            cupiditate illum ipsum non quasi sapiente veniam voluptates.
            Assumenda commodi eum eveniet maxime modi officia pariatur quia
            vitae voluptatibus. Praesentium, tempore.
          </div>
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
import ColorsMixins from "../mixins/ColorsMixins";

export default {
  name: "TableFunds",
  mixins: [ColorsMixins],
  props: {
    items: {
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
