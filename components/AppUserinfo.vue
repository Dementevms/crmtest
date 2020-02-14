<template>
  <div class="userinfo">
    <div class="userinfo__avatar">
      <img src="user.jpg" alt="user">
    </div>
    <div>
      <div class="userinfo__name">Александр С.</div>
      <div class="userinfo__post">Администратор</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.userinfo {
  display: flex;
  align-items: center;

  &__avatar {
    overflow: hidden;
    border-radius: 50%;
    margin: 0 16px 0 0;
    width: 60px;
    height: 60px;
    
    img {
      width: 100%;
    }
  }

  &__name {

  }
}
</style>