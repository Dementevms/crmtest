<template>
  <div class="quiz">
    <Condition
      v-for="(condition, index) in conditions"
      :key="index"
      :number="index"
      @change="changeCondition"
      @remove="removeCondition"
    />
    <div class="quiz__add" @click="addCondition">
      <div class="quiz__add-wrapper">
        <svg-icon name="plus" />
        <div>
          Нажмите чтобы добавить новое условие выборки.<br />Все условия выборки
          связываются логическим "И"
        </div>
      </div>
    </div>
    <div class="quiz__footer">
      <div class="btn btn-white">Протестировать опрос</div>
      <div class="btn btn-green" @click="next">Далее</div>
    </div>
  </div>
</template>

<script>
import Condition from "@/components/quiz/Condition";
export default {
  name: "Quiz",
  components: {
    Condition
  },
  data() {
    return {
      conditions: []
    };
  },
  methods: {
    addCondition() {
      const condition = {
        number: this.conditions.length,
        inputs: null
      };
      this.conditions.push(condition);
    },
    changeCondition(data) {
      this.conditions[data.number].inputs = data.inputs;
    },
    removeCondition(number) {
      this.conditions = this.conditions.filter(item => item.number != number);
    },
    next() {
      console.log("Fetch Data");
      console.log(this.conditions);
    }
  }
};
</script>

<style lang="scss" scoped>
.quiz {
  &__add {
    padding: 24px;
  }

  &__add-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    background: var(--colorWhite);
    border: 2px solid var(--colorGray);
    border-radius: 10px;
    padding: 16px 0;

    font-size: 14px;
    text-align: center;
    color: var(--colorGreen);

    svg {
      fill: var(--colorGreen);
      margin: 0 0 16px;
      width: 24px;
      height: 24px;
    }
  }

  &__footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: var(--colorLightBlue);
    padding: 24px;
  }
}
</style>
