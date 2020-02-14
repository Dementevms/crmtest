<template>
  <div class="condition">
    <div class="condition__and" v-if="number > 0">И</div>
    <div class="condition__select">
      <div class="condition__select-label">Условие {{ number + 1 }}</div>
      <div class="condition__select-input">
        <select class="select" @change="change">
          <option>Выбирети условие</option>
          <option
            v-for="type in types"
            :key="type.id"
            v-bind:data-id="type.id"
            >{{ type.title }}</option
          >
        </select>
      </div>
    </div>
    <Input
      v-for="(input, index) in inputs"
      :key="index"
      :type="input.type"
      :title="input.title"
      :number="index"
      :values="input.values"
      @change="changeInput"
    />
    <div class="condition__buttons">
      <button class="btn btn-add" v-if="type" @click="addInput">
        <svg-icon name="plus" />
        <span>Добавить {{ type.input.title }}</span>
      </button>
      <button class="btn btn-remove" @click="remove">
        <svg-icon name="trash" />
        <span>Удалить условие</span>
      </button>
    </div>
  </div>
</template>

<script>
import Input from "@/components/quiz/Input";
export default {
  name: "Condition",
  components: {
    Input
  },
  props: {
    number: {
      type: Number,
      default: null
    }
  },
  data() {
    return {
      type: null,
      input: null,
      inputs: [],
      types: [
        {
          id: 1,
          title: "Возраст респондента",
          type: "age_user",
          input: { type: "range", title: "Диапозон", value: null }
        },
        {
          id: 2,
          title: "Тип карты лояльности",
          type: "type_card",
          input: {
            type: "select",
            values: ["Gold", "Silver"],
            title: "Тип",
            value: null
          }
        },
        {
          id: 3,
          title: "Статус карты лояльности",
          type: "status_card",
          input: {
            type: "select",
            values: ["Активна", "Закрыта"],
            title: "Статус",
            value: null
          }
        }
      ],
      payload: []
    };
  },
  methods: {
    change(e) {
      const { options } = e.target;
      const { id } = options[options.selectedIndex].dataset;
      this.type = this.types.find(item => item.id == id);
    },
    changeInput(data) {
      this.inputs[data.number].value = data.value;
      this.$emit("change", { number: this.number, inputs: this.inputs });
    },
    addInput() {
      const input = this.getInput();
      this.inputs.push(input);
    },
    getInput() {
      return { ...this.type.input };
    },
    remove() {
      this.$emit("remove", this.number);
    }
  }
};
</script>

<style lang="scss" scoped>
.condition {
  border-bottom: 1px solid var(--colorGray);
  padding: 24px;
  position: relative;

  &__and {
    background: var(--colorGray);
    border-radius: 4px;
    padding: 10px 0;
    width: 46px;
    position: absolute;
    top: -16px;
    left: 24px;
    font-size: 12px;
    text-align: center;
    text-transform: uppercase;
    color: var(--colorText);
  }

  &__select {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 0 24px;
  }

  &__select-label {
    flex-shrink: 0;
    // margin: 0 24px 0 0;
    width: 200px;
    font-size: 14px;
    font-weight: bold;
    color: var(--colorText);
  }

  &__select-input {
    width: 100%;

    select {
      width: 100%;
    }
  }

  &__buttons {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 24px 0 0 200px;
  }
}
</style>
