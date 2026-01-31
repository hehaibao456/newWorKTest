<template>
  <div class="blank">
    <div class="scanlines" />
    <router-view />
  </div>
</template>

<style scoped>
.blank{
  height:100dvh;
  min-height:100dvh;
  width:100vw;
  display:flex;
  align-items:center;
  justify-content:center;
  position:relative;
  overflow:hidden;
}
</style>
