<script setup lang="ts">
</script>

<template>
  <header>
    <nav>
      <div class="logo">
        <img
          src="~/assets/images/common/logo.svg"
          alt="mainlogo"
          width="200"
        />
      </div>

      <div class="belong">
        <div><span class="name">太田次郎</span>さん</div>
        <div class="group">所属：山田太郎</div>
      </div>

      <ul>
        <li><NuxtLink to="weeklyreport">週報</NuxtLink></li>
        <li><NuxtLink to="timecard">タイムカード</NuxtLink></li>
        <li><NuxtLink to="#">全体会議</NuxtLink></li>
        <li><NuxtLink to="#">社員紹介</NuxtLink></li>
        <li><NuxtLink to="#">申請、報告</NuxtLink></li>
        <li><NuxtLink to="#">掲示板</NuxtLink></li>
        <li><NuxtLink to="#">ウェブメール</NuxtLink></li>
      </ul>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
header {
  width: 100%;
  height: 65px;
  position: fixed;
  top:0;
  background:rgba(200,200,200,0.7);
  box-shadow: 0px 5px 5px 0px rgba(0,0,0,0.3);
  z-index: 100;
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .logo {
      margin: 10px 0 0 20px;
    }
    .belong {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      .name {
        font-size: x-large;
        font-weight: bold;
        letter-spacing: 0.3rem;
      }
      .group {
        font-size: small;
        margin-left: 12px;
        padding: 2px 16px 4px 16px;
        background-color: #ffffff;
        border-radius: 20px;
      }
    }
    ul {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      li{
        list-style: none;
        margin-right: 12px;
        a {
          padding: 8px 12px;
          text-decoration: none;
          transition: 1s ease;
        }
        a:hover {
          background-color: #333333;
          color: #ffffff;
          transition: 1s ease;
        }
      }
    }
  }
}
</style>