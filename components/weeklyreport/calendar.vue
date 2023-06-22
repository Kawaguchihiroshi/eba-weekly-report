<script setup lang="ts"></script>

<template>
  <div class="calendarArea">
    <div class="year">
      <div><a href="#"> ≪ </a></div>
      <div>2023年</div>
      <div><a href="#"> ≫ </a></div>
    </div>
    <div v-for="(month, index) in 12" :key="index">
      <div v-if="(index - 1) % 4 === 0" class="month">
        <div>
          <a href="#" class="monthtext">{{index}}月</a>
          <div class="week">
            <div><a href="#">第１週目</a></div>
            <div><a href="#">第２週目</a></div>
            <div><a href="#">第３週目</a></div>
            <div><a href="#">第４週目</a></div>
          </div>
        </div>
        <div>
          <a href="#" class="monthtext1">{{index + 1}}月</a>
          <div class="week1">
            <div><a :href="'?year=2023&month=' + index">第１週目</a></div>
            <div><a href="#">第２週目</a></div>
            <div><a href="#">第３週目</a></div>
            <div><a href="#">第４週目</a></div>
          </div>
        </div>
        <div>
          <a href="#" class="monthtext2">{{index + 2}}月</a>
          <div class="week2">
            <div><a href="">第１週目</a></div>
            <div><a href="">第２週目</a></div>
            <div><a href="">第３週目</a></div>
            <div><a href="">第４週目</a></div>
          </div>
        </div>
        <div>
          <a href="#" class="monthtext3">{{index + 3}}月</a>
          <div class="week3">
            <div><a href="">第１週目</a></div>
            <div><a href="">第２週目</a></div>
            <div><a href="">第３週目</a></div>
            <div><a href="">第４週目</a></div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.calendarArea {
  width: 200px;
  border: 1px solid #999999;
  border-radius: 4px;
  padding: 8px 8px 16px 8px;
  .year {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 4px 8px;
  }
  .month {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 16px;
    position: relative;
    @mixin weekstyle($left) {
      display: none;
      width: 80px;
      position: absolute;
      top: 24px;
      left: $left;
      padding: 16px;
      border-radius: 4px;
      background: #eeeeee;
      color: #333333;
      text-align: center;
      z-index: 2;
    }
    .week {
      @include weekstyle(10px);
    }
    .week1 {
      @include weekstyle(60px);
    }
    .week2 {
      @include weekstyle(110px);
    }
    .week3 {
      @include weekstyle(160px);
    }
    .monthtext:hover + .week {
      display: block;
    }
    .monthtext1:hover + .week1 {
      display: block;
    }
    .monthtext2:hover + .week2 {
      display: block;
    }
    .monthtext3:hover + .week3 {
      display: block;
    }
    .week:hover, .week1:hover, .week2:hover, .week3:hover {
      display: block;
    }
  }
}
</style>