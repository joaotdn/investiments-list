<template>
  <div class="range-profile">
    <span><small>menor</small></span>
    <div
      v-for="index in 11"
      :key="index"
      :class="`bar-${index} display-inline-block`"
      :style="
        `height: calc(10px + ${index * 3}px); background: ${colors[index]}`
      "
    ></div>
    <span><small>maior</small></span>
    <label>
      <input
        type="range"
        :min="min"
        :max="max"
        :step="step"
        @change="changeProfile"
      />
    </label>
  </div>
</template>

<script>
import ColorsMixins from "../mixins/ColorsMixins";

export default {
  name: "SlideProfile",
  mixins: [ColorsMixins],
  props: {
    step: {
      type: Number,
      default: 1
    },
    min: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: 1
    }
  },
  methods: {
    changeProfile(e) {
      this.$emit("onRange", e.target.value);
    }
  }
};
</script>

<style lang="scss" scoped>
$bar-height: 10;
$bg-line: #000;

[class^="bar-"] {
  width: 6px;
  &:not(:first-child) {
    margin-left: 5px;
  }
}

input[type="range"] {
  -webkit-appearance: none;
}

input[type="range"]::-webkit-slider-runnable-track {
  width: 200px;
  height: 1px;
  background: $bg-line;
  border: none;
  cursor: pointer;
}

input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 7.5px 10px 7.5px;
  border-color: transparent transparent #000 transparent;
  margin-top: -10px;
  cursor: pointer;
}

input[type="range"]:focus {
  outline: none;
}

input[type="range"]:focus::-webkit-slider-runnable-track {
  background: $bg-line;
}

span {
  display: inline-block;
  margin: 0px 5px;
}
</style>
