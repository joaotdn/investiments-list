<template>
  <div id="sidebar" class="grid-container">
    <div class="grid-x grid-padding-x bg-white radius shadow">
      <header class="cell small-12 text-uppercase">
        <span><strong>Renda fixa</strong></span>
      </header>
      <div class="cell small-12 list-item padding-top-1">
        <label
          ><input type="checkbox" class="margin-bottom-0" />
          <span>Indexado Soberano</span></label
        >
      </div>
      <div class="cell small-12 list-item padding-top-1">
        <label
          ><input type="checkbox" class="margin-bottom-0" />
          <span>Renda Fixa</span></label
        >
      </div>
      <div class="cell small-12 list-item padding-top-1">
        <label
          ><input type="checkbox" class="margin-bottom-0" />
          <span>Renda Fixa Crédito Privado</span></label
        >
      </div>
      <div class="cell small-12 list-item padding-top-1">
        <label
          ><input type="checkbox" class="margin-bottom-0" />
          <span>Crédito Privado High Yield</span></label
        >
      </div>
      <div class="cell small-12 list-item padding-top-1 padding-bottom-1">
        <label
          ><input type="checkbox" class="margin-bottom-0" />
          <span>Renda Fixa Inflação Soberano</span></label
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FiltersCheckbox"
};
</script>
