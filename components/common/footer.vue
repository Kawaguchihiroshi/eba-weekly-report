<template>
  <footer>
    <nav>
      <ul>
        <li><NuxtLink to="#">トップページ</NuxtLink></li>
        <li><NuxtLink to="#">タイムカード</NuxtLink></li>
        <li><NuxtLink to="#">週報</NuxtLink></li>
      </ul>
    </nav>
    <ul class="submenu">
      <li><NuxtLink to="#">プライバシーポリシー</NuxtLink></li>
      <li><NuxtLink to="#">コーポレートサイト</NuxtLink></li>
    </ul>
    <div class="copy">&copy;HRSGR Inc. 2013-2023</div>
  </footer>
</template>

<script setup></script>

<style lang="scss" scoped>
footer {
  margin-top: 100px;
  background-color: #444444;
  
  nav {
    width: 984px;
    margin: 0 auto;
    padding: 40px;
    ul {
      margin: 0;
      padding: 0;
      li {
        list-style: none;
        a {
          color: #cccccc;
        }
      }
    }
  }
  ul.submenu {
    width: 984px;
    margin: 0 auto;
    padding: 12px 0;
    display: flex;
    justify-content: flex-end;
    align-content: center;
    text-align: right;
    li {
      margin-left: 16px;
      list-style: none; 
      a {
        color: #989898;
        font-size: 10px;
        text-decoration: none;
      }
    }
  }
  .copy {
    padding: 12px 0 20px 0;
    color: #989898;
    text-align: center;
    font-size: 12px;
    letter-spacing: 0.2em;
  }
}
</style>