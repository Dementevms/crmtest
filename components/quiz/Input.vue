<template>
  <div class="condition-input">
    <div class="condition-input__label">
      <span v-if="number > 0" class="condition-input__label-or">или</span>
      <span>{{ title }} {{ number + 1 }}</span>
    </div>
    <div class="condition-input__control" v-if="type === 'text'">
      <input
        class="input"
        type="text"
        v-model="text"
        @change="change({ text })"
      />
    </div>
    <div class="condition-input__control" v-if="type === 'range'">
      <label>от</label>
      <input
        class="input"
        type="number"
        v-model="rangeFrom"
        @change="change({ rangeFrom, rangeTo })"
      />
      <label>до</label>
      <input
        class="input"
        type="number"
        v-model="rangeTo"
        @change="change({ rangeFrom, rangeTo })"
      />
    </div>
    <div class="condition-input__control" v-if="type === 'select'">
      <select class="select" v-model="select" @change="change({ select })">
        <option v-for="(value, index) in values" :key="index">{{
          value
        }}</option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  name: "Input",
  props: {
    type: {
      type: String,
      default: "text"
    },
    title: {
      type: String,
      default: ""
    },
    number: {
      type: Number,
      default: null
    },
    values: {
      type: Array,
      default: null
    }
  },
  data() {
    return {
      text: null,
      rangeFrom: null,
      rangeTo: null,
      select: null
    };
  },
  methods: {
    change(value) {
      const data = {
        type: this.type,
        title: this.title,
        number: this.number,
        value
      };
      this.$emit("change", data);
    }
  }
};
</script>

<style lang="scss" scoped>
.condition-input {
  display: flex;
  align-items: center;
  margin: 16px 0 0;

  &__label {
    display: flex;
    align-items: center;
    width: 200px;
    font-size: 14px;
    color: var(--colorText);
  }

  &__label-or {
    background: var(--colorGray);
    border-radius: 4px;
    margin: 0 16px 0 0;
    padding: 10px 0;
    width: 46px;
    font-size: 12px;
    text-align: center;
    text-transform: uppercase;
    color: var(--colorText);
  }

  &__control {
    display: flex;
    align-items: center;

    input {
      margin: 0 16px 0 0;
    }

    label {
      margin: 0 8px 0 0;
      font-size: 14px;
      color: var(--colorText);
    }
  }
}
</style>
