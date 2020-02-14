<template>
  <div class="layout them-light">
    <div class="layout__left-col">
      <AppSidebar/>
    </div>
    <div class="layout__right-col">
      <AppHeader/>
      <AppBreadcrumbs/>
      <nuxt/>
    </div>
  </div>
</template>
<script>
import '@/assets/css/reset.css'; 
import AppSidebar from '@/components/AppSidebar';
import AppHeader from '@/components/AppHeader';
import AppBreadcrumbs from '@/components/AppBreadcrumbs';
export default {
  components: {
    AppSidebar,
    AppHeader,
    AppBreadcrumbs
  }
}
</script>

<style lang="scss">

.them-light {
  --colorLightBlue: #f2fbff;
  --colorRed: #f00;
  --colorText: #4a4a4a;
  --colorGray: #ccc;
  --colorWhite: #fff;
  --colorBlack: #000;
  --colorGreen: #91bd25;
  --colorGreenText: #91bd25;

  font-family: 'Roboto', sans-serif;
  color: var(--colorText);
}

.btn {
  display: flex;
  align-items: center;
  outline: none;
  box-sizing: border-box;
  border: none;
  border-radius: 4px;
  padding: 12px 16px;
  font-size: 14px;
  font-weight: bold;

  svg {
    margin: 0 8px 0 0;
    width: 20px;
    height: 20px;
  }
}

.btn-green {
  background: var(--colorGreen);
  color: var(--colorWhite);
}

.btn-white {
  background: var(--colorWhite);
  box-shadow: 0 1px 2px 1px rgba(0,0,0,0.1);
  color: var(--colorGreen);
}

.btn-add {
  background: var(--colorWhite);
  border: 2px solid var(--colorGreen);
  padding: 8px 12px;
  color: var(--colorGreen);

  svg {
    fill: var(--colorGreen);
  }
}

.btn-remove {
  background: var(--colorWhite);
  border: 2px solid var(--colorRed);
  padding: 8px 12px;
  color: var(--colorRed);
  
  svg {
    fill: var(--colorRed);
  }
}

.input,
.select {
  display: block;
  outline: none;
  box-sizing: border-box;
  background: var(--colorWhite);
  border: 2px solid var(--colorGray);
  border-radius: 4px;
  padding: 10px 14px;
  font-size: 12px;
  color: var(--colorText);
}

.layout {
  display: flex;

  &__left-col {
    box-sizing: border-box;
    border-right: 1px solid var(--colorGray);
    padding: 0 16px;
    width: 20%;
    max-width: 160px;
  }

  &__right-col {
    box-sizing: border-box;
    padding: 0 48px;
    width: 100%;
  }
}
</style>

