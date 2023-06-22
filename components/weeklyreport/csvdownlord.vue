<script setup></script>

<template>
  <div class="csvdownlordArea">
    <form action="">
      <p>自分の週報をCSV出力出来ます。</p>
      <div class="period"><input type="date"> ～ <input type="date"></div>
      <button>出力する</button>
    </form>
  </div>
</template>


<style lang="scss" scoped>
.csvdownlordArea {
  width: 300px;
  padding: 24px;
  border: 1px solid #999999;
  border-radius: 4px;
  text-align: center;
  p {
    margin: 0;
  }
  .period {
    margin-top: 20px;
  }
  button {
    width: 250px;
    margin-top: 20px;
    padding: 4px 16px;
    border: 1px solid #999999;
    border-radius: 4px;
    transition: 1s ease;
  }
  button:hover {
    background-color: #333333;
    color: #ffffff;
    transition: 1s ease;
  }
}
</style>