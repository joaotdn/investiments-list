<template>
  <div>
    <label>
      <input
        type="range"
        :min="min"
        :max="max"
        :step="step"
        class="width-100"
        @change="detectChange"
      />
    </label>
  </div>
</template>

<script>
export default {
  name: "SlideRange",
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
    detectChange(e) {
      this.$emit("onRange", e.target.value);
    }
  }
};
</script>

<style lang="scss" scoped>
$bg-line: #60aabf;

input[type="range"] {
  -webkit-appearance: none;
}

input[type="range"]::-webkit-slider-runnable-track {
  width: 300px;
  height: 5px;
  background: $bg-line;
  border: none;
  border-radius: 3px;
  cursor: pointer;
}

input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  height: 16px;
  width: 16px;
  border-radius: 50%;
  background: white;
  border: 4px solid black;
  margin-top: -4px;
  cursor: pointer;
}

input[type="range"]:focus {
  outline: none;
}

input[type="range"]:focus::-webkit-slider-runnable-track {
  background: $bg-line;
}
</style>
