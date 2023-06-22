<script setup lang="ts"></script>

<template>
  <div class="newsArea">
    <div class="title">あなたへのお知らせ</div>
    <div class="over">
      <div>2023/10/15　<a href="#">経費精算のお願い</a></div>
      <div>2023/10/15　<a href="#">全体会議開催</a></div>
      <div>2023/10/15　<a href="#">今週のブログ担当です</a></div>
      <div>2023/10/15　<a href="#">ゴールデンワークの休暇について</a></div>
      <div>2023/10/15　<a href="#">もしコロナにかかったら？</a></div>
      <div>2023/10/15　<a href="#">全体会議開催</a></div>
      <div>2023/10/15　<a href="#">今週のブログ担当です</a></div>
      <div>2023/10/15　<a href="#">ゴールデンワークの休暇について</a></div>
      <div>2023/10/15　<a href="#">もしコロナにかかったら？</a></div>
      <div>2023/10/15　<a href="#">全体会議開催</a></div>
      <div>2023/10/15　<a href="#">今週のブログ担当です</a></div>
      <div>2023/10/15　<a href="#">ゴールデンワークの休暇について</a></div>
      <div>2023/10/15　<a href="#">もしコロナにかかったら？</a></div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.newsArea {
  width: 340px;
  border: 1px solid #999999;
  border-radius: 4px;
  padding: 20px;
  .title {
    font-weight: bold;
    border-bottom: 2px solid #999999;
  }
  .over {
    margin-top: 8px;
    height: 100px;
    overflow: hidden;
    white-space: nowrap;
    overflow-y: scroll;
    div {
      font-size: 12px;
      text-overflow: ellipsis;
    }
  }
}
</style>