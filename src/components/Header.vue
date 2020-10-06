<template>
  <div id="header" class="grid-x grid-padding-x align-middle margin-bottom-2">
    <div class="cell small-12 text-center position-relative">
      <h1 class="font-serif">
        {{ companyName }}
      </h1>
      <p>{{ companySlogan }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      companyName: "Lista de Fundo de Investimentos",
      companySlogan: "Conheça a nossa lista de fundos"
    };
  }
};
</script>
