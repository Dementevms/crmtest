<template>
  <div class="header">
    <div class="header__search">
      <input class="input" placeholder="Поиск по системе" />
      <svg-icon name="binoculars" />
    </div>
    <AppUserinfo/>
  </div>
</template>

<script>
import AppUserinfo from "@/components/AppUserinfo";
export default {
  name: "AppHeader",
  components: {
    AppUserinfo
  }
};
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 24px 0 20px;

  &__search {
    position: relative;
    width: 100%;
    max-width: 460px;

    input {
      width: 100%;
    }

    svg {
      fill: var(--colorGray);
      width: 20px;
      height: 20px;
      position: absolute;
      top: 9px;
      right: 12px;
    }
  }
}
</style>
