<template>
  <div class="nav">
    <nuxt-link
      class="nav__item"
      v-for="(item, index) in items"
      :key="index"
      :to="item.path"
    >
      <div class="nav__item-icon">
        <svg-icon :name="item.icon" />
      </div>
      <div class="nav__item-title">{{ item.title }}</div>
    </nuxt-link>
  </div>
</template>

<script>
import Routes from "@/modules/routes";
export default {
  name: "AppNav",
  data() {
    return {
      items: null
    };
  },
  created() {
    this.items = new Routes().items;
  }
};
</script>

<style lang="scss" scoped>
.nav {
  &__item {
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 10px;
    padding: 24px 0;
    text-decoration: none;
    font-size: 12px;
    color: var(--colorText);

    &:hover {
      background: var(--colorGray);
      font-weight: bold;
      color: var(--colorBlack);
    }

    &.nuxt-link-exact-active {
      border: 2px solid var(--colorGreen);
      color: var(--colorGreen);

      svg {
        fill: var(--colorGreen);
      }
    }
  }

  &__item-icon {
    margin: 0 0 16px;

    svg {
      width: 30px;
      height: 30px;
    }
  }
}
</style>
