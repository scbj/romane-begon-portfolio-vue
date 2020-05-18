<template>
  <div class="website-mark">
    <span class="website-mark__subtitle">Photographie avec</span>
    <span class="website-mark__title">ROMANE BÉGON</span>
  </div>
</template>

<style lang="scss" scoped>
.website-mark {
  font-weight: 400;
  font-family: "Orpheus Pro", serif;
  text-align: center;

  > span {
    display: block;
  }
}

.website-mark__title {
  color: var(--color-light-2);
  font-size: 25px;
  line-height: 40px;
  letter-spacing: 3.5px;
}

.website-mark__subtitle {
  color: var(--color-light-3);
  font-size: 12px;
  line-height: 20px;
  letter-spacing: 0.62px;
}
</style>
