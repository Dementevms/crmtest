<template>
  <div class="users">
    <div class="tabs">
      <div class="tabs__nav">
        <div
          class="tabs__nav-item"
          :class="[{ active: activeTab && activeTab.id === tab.id }]"
          v-for="(tab, index) in tabs"
          :key="index"
          @click="click(tab)"
        >
          {{ tab.title }}
        </div>
      </div>
      <div class="tabs__tab-content">
        <component v-if="activeTab" v-bind:is="activeTab.component"></component>
      </div>
    </div>
  </div>
</template>

<script>
import Quiz from "@/components/quiz/Quiz";
export default {
  components: {
    Quiz
  },
  data() {
    return {
      activeTab: null,
      tabs: [
        { id: 1, title: "Параметры", component: null },
        { id: 2, title: "Вопросы", component: null },
        { id: 3, title: "Логика", component: null },
        { id: 4, title: "Условия", component: null },
        { id: 5, title: "Респонденты", component: "Quiz" }
      ]
    };
  },
  methods: {
    click(tab) {
      this.activeTab = tab;
    }
  }
};
</script>

<style lang="scss" scoped>
.tabs {

  &__nav {
    display: flex;
    justify-content: space-around;
    border-bottom: 1px solid var(--colorGreen);
  }

  &__nav-item {
    padding: 24px 16px;
    position: relative;
    font-size: 14px;
    font-weight: bold;
    color: var(--colorGreenText);

    &:hover {
      cursor: pointer;
      color: var(--colorText);
    }

    &.active {
      color: var(--colorText);
      
      &::after {
        content: "";
        background: var(--colorGreen);
        width: 100%;
        height: 2px;
        position: absolute;
        bottom: 0;
        left: 0;
      }
    }
  }

  &__tab-content {
    box-shadow: 0 10px 15px 0 rgba(0,0,0,0.1);
    margin: 0 0 24px;
  }
}
</style>
