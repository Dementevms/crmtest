<template>
  <div class="breadcrumbs">
    <div class="breadcrumbs__item" v-for="(item, index) in items" :key="index">
      <nuxt-link :to="item.path">
        <div class="breadcrumbs__item-icon" v-if="index === 0">
          <svg-icon name="home" />
        </div>
        <div class="breadcrumbs__item-text" v-else>
          {{ item.title }}
        </div>
      </nuxt-link>
      <div class="breadcrumbs__item-arrow" v-if="index < items.length - 1">
        <svg-icon name="right-arrow" />
      </div>
    </div>
  </div>
</template>

<script>
import Routes from "@/modules/routes";
export default {
  name: "AppBreadcrumbs",
  data() {
    return {
      routes: null
    };
  },
  computed: {
    items() {
      const items = this.getItems(this.$route.matched);
      return items;
    }
  },
  created() {
    this.routes = new Routes();
  },
  methods: {
    getItems(matched) {
      const items = this.routes.getItems(matched);
      const home = this.routes.getItem({path: "/"});
      items.unshift(home);
      return matched[0].path === "" ? [home] : items;
    }
  }
};
</script>

<style lang="scss" scoped>
.breadcrumbs {
  display: flex;
  align-items: center;

  &__item {
    display: flex;
    align-items: center;
    margin: 0 8px 0 0;

    a {
      text-decoration: none;
    }
  }

  &__item-icon {
    svg {
      width: 16px;
      height: 16px;
    }
  }

  &__item-arrow {
    margin: 0 0 0 8px;

    svg {
      width: 12px;
      height: 12px;
    }
  }
}
</style>
