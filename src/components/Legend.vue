<template>
  <div id="legends" class="grid-container margin-bottom-2">
    <div class="grid-x grid-padding-x">
      <div
        class="cell small-12 medium-4 large-4 bg-white radius shadow margin-top-2 padding-1"
      >
        <header class="width-100 margin-bottom-1">
          <span class="text-uppercase"><strong>Legenda</strong></span>
        </header>
        <p class="margin-bottom-0">
          <font-awesome-icon icon="star" /> Fundo para investidor qualificado
        </p>
        <p class="margin-bottom-0">
          <font-awesome-icon icon="check-circle" /> Você já investe neste fundo
        </p>
        <p class="margin-bottom-0">
          <font-awesome-icon icon="info-circle" /> Entenda o resgate deste fundo
        </p>
        <p class="margin-bottom-0">
          <font-awesome-icon icon="ban" /> Fundo fechado para aplicação
        </p>
        <p class="margin-bottom-0">
          <font-awesome-icon icon="reply" /> Aplicar neste fundo
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Legend"
};
</script>

<style lang="scss" scoped>
#legends {
  font-size: 14px;
}
[data-icon="star"] {
  color: forestgreen;
}
[data-icon="check-circle"],
[data-icon="ban"] {
  color: gray;
}
[data-icon="reply"] {
  color: lightblue;
}
</style>
