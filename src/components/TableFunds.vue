<template>
  <div id="table-funds" class="width-100 bg-white radius shadow margin-top-2">
    <div v-if="!loading">
      <div
        class="table-header grid-x grid-padding-x align-middle fund-line show-for-medium"
      >
        <div class="cell medium-4">Fundo</div>
        <div class="cell auto">Data da Cota</div>
        <div class="cell auto">Mês(%)</div>
        <div class="cell auto">2016(%)</div>
        <div class="cell auto">12 M(%)</div>
        <div class="cell auto">Aplicação Mínima</div>
        <div class="cell auto">Prazo do Resgate</div>
        <div class="cell auto">Aplicar</div>
      </div>

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
            <div class="cell medium-4 small-12 fund-title">
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

            <div class="cell medium-auto small-12 text-left medium-text-center">
              <p class="hide-for-medium margin-bottom-0">
                <small>Data da Cota</small>
              </p>
              <p>
                <strong>{{ fund.quota_date | moment("DD/MM/YYYY") }}</strong>
              </p>
            </div>

            <div class="cell medium-auto small-12 text-left medium-text-center">
              <p class="hide-for-medium margin-bottom-0">
                <small>Mês(%)</small>
              </p>
              <p>
                <strong>{{ fund.profitabilities.month }}</strong>
              </p>
            </div>

            <div class="cell medium-auto small-12 text-left medium-text-center">
              <p class="hide-for-medium margin-bottom-0">
                <small>2016(%)</small>
              </p>
              <p>
                <strong>{{ fund.profitabilities.year }}</strong>
              </p>
            </div>

            <div class="cell medium-auto small-12 text-left medium-text-center">
              <p class="hide-for-medium margin-bottom-0">
                <small>12 M(%)</small>
              </p>
              <p>
                <strong>{{ fund.profitabilities.m12 }}</strong>
              </p>
            </div>

            <div class="cell medium-auto small-12 text-left medium-text-center">
              <p class="hide-for-medium margin-bottom-0">
                <small>Aplicação Mínima</small>
              </p>
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

            <div class="cell medium-auto small-6 text-center show-for-medium">
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

            <div class="cell medium-shrink small-6 text-center show-for-medium">
              <h5 class="reply-btn display-inline-block position-relative">
                <font-awesome-icon icon="reply" />
              </h5>
            </div>

            <div
              class="cell medium-shrink small-12 margin-top-1 text-center hide-for-medium"
            >
              <a
                href="#"
                class="button small expanded margin-bottom-0 hollow success"
                >Aplicar</a
              >
            </div>
          </div>
          <div class="fund-info width-100" :data-info="fund.id">
            <div class="grid-x grid-padding-x">
              <div class="cell small-6 show-for-medium"></div>
              <div
                class="cell small-12 medium-6 fund-specifications margin-top-1"
              >
                <p>
                  <strong>Cotização da aplicação</strong>:
                  {{ fund.operability.application_quotation_days_str }}
                </p>
                <p>
                  <strong>Cotização do resgate</strong>:
                  {{ fund.operability.retrieval_quotation_days_str }}
                </p>
                <p>
                  <strong>Liquidação do resgate</strong>:
                  {{ fund.operability.retrieval_liquidation_days_str }}
                </p>
                <p class="margin-bottom-2">
                  <strong>Taxa de administração</strong>:
                  {{ fund.fees.administration_fee }}
                </p>
                <p class="text-underline margin-bottom-3">
                  Conheça mais informações sobre este fundo
                </p>
                <p><strong>CNPJ do fundo</strong>: {{ fund.cnpj }}</p>
              </div>
            </div>
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
