<template>
  <div class="info-box">
    <div class="info-line">
      Antal kuverter 23/12/23
      <div class="number-box">2584</div>
    </div>
    <div class="info-line">
      Antal kuverter 24/12/23
      <div class="number-box">3564</div>
    </div>
    <div class="info-line">
      Antal kuverter 25/12/23
      <div class="number-box">7402</div>
    </div>
    <div class="info-line bold pt-1">
      Kuverter i Alt 23-25/12/23
      <div class="number-box ml-4">7402</div>
    </div>
  </div>
</template>

<style scoped>
.info-box {
  background: rgba(255, 0, 0, 0.1);
  border: 1px solid red;
  padding: 10px;
  flex: 1;
}

.info-line {
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
}

.bold {
  font-weight: bold;
}

.number-box {
  background: rgba(0, 0, 0, 0.1);
  border: 1px solid black;
  padding: 5px;
}
</style>
