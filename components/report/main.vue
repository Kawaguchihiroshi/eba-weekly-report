<script setup lang="ts">
  const weeklydatas = [
    {
      date: '4/24',
      totaltaime: '07:30',
      overtime: '01:30',
      workContent: '月曜日の内容です。月曜日の内容です。月曜日の内容です。'
    },
    {
      date: '4/25',
      totaltaime: '07:30',
      overtime: '01:30',
      workContent: '火曜日の内容です。月曜日の内容です。月曜日の内容です。'
    },
    {
      date: '4/26',
      totaltaime: '07:30',
      overtime: '01:30',
      workContent: '水曜日の内容です。月曜日の内容です。月曜日の内容です。'
    },
    {
      date: '4/27',
      totaltaime: '07:30',
      overtime: '01:30',
      workContent: '月曜日の内容です。月曜日の内容です。月曜日の内容です。'
    },
    {
      date: '4/28',
      totaltaime: '07:30',
      overtime: '01:30',
      workContent: '月曜日の内容です。月曜日の内容です。月曜日の内容です。'
    },
    {
      date: '4/29',
      totaltaime: '07:30',
      overtime: '01:30',
      workContent: '月曜日の内容です。月曜日の内容です。月曜日の内容です。'
    },
    {
      date: '4/30',
      totaltaime: '07:30',
      overtime: '01:30',
      workContent: '月曜日の内容です。月曜日の内容です。月曜日の内容です。'
    }
  ];
</script>

<template>
  <section id="report" class="report">
    <transition name="fadein">
      <div class="container">
        <div class="head">
          <h1>住所変更</h1>
          <h2>報告対象</h2>
          <p>引越し、ご結婚による同棲など、ご本人の住居地が長期間（1ヵ月以上）変更される時、ご報告ください</p>
          <h2>報告方法</h2>
          <p>以下、報告テンプレートをご確認の上、右フォームよりご報告ください。</p>
          <div>
            ---------------------------------------------<br>
            ＜宛先＞<br>
            soumu@aaa.jp<br>
            ---------------------------------------------<br>
            ＜件名＞<br>
            【住所変更】名前（フルネーム）<br>
            ---------------------------------------------<br>
            ＜本文＞<br>
            【名 前】 フルネーム<br>
            【転居日】 〇年〇月〇日<br>
            【旧住所】 〒 123-4567 〇〇県〇〇市〇〇<br>
            【新住所】 〒 123-4567 〇〇県〇〇市〇〇<br>
            【フリガナ】 〇〇シ〇〇チョウ〇〇<br>
            ---------------------------------------------<br>
          </div>
        </div>
      </div>
    </transition>
  </section>
</template>

<style lang="scss" scoped>
.report {
  margin-top: 100px;
  .container{
    width: 984px;
    margin: 0 auto;
    .head {
    }
    .buttonArea {
      margin-top: 20px;
      padding: 8px;
      border-radius: 4px;
      background-color: #eeeeee;
      .submission {
        margin-left: 16px;
      }
    }
    button {
      padding: 4px 16px 5px 16px;
      border: 0px;
      border-radius: 4px;
      background-color: #F2B134;
      transition: 0.5s ease;
    }
    button:hover {
      background-color: #333333;
      color: #ffffff;
      transition: 0.5s ease;
    }

    table {
      border-collapse: collapse;
      border-radius: 8px;
      margin-top: 20px;
      width: 100%;
      thead {
        tr {
          th {
            border: none;
            border-bottom: 3px solid #ffffff;
            background-color: #74B495;
            color: #ffffff;
            text-align: left;
          }
          th.stady {
            border-radius: 10px 10px 0px 0px;
            letter-spacing: 0.1em;
            span {
              font-size: small;
              font-weight: normal;
              color: #ffffff;
            }
          }

          :first-child {
            border-radius: 8px 0px 0px 0px;
          }
          :last-child {
            border-radius: 0px 8px 0px 0px;
          }
          th.itemname01 {
            width: 200px;
            padding: 12px 0px 12px 12px;
          }
          th.itemname02 {
            padding: 12px 0px 12px 12px;
            border-left: 1px solid #ffffff;
          }
        }
      }
      tbody {
        tr {

          td {
            border: none;
            border-bottom: 2px solid #ffffff;
            background-color: #eeeeee;
            text-align: left;
          }
          td.stady {
            border-radius: 0px 0px 10px 10px;
            letter-spacing: 0.1em;
          }
          td.itemname01 {
            width: 200px;
            padding: 12px;
            text-align: center;
            .date {
              font-size: 30px;
              font-weight: bold;
              letter-spacing: 0.1em;
            }
            .workingtime, .overworking {
              margin-top: 6px;
              padding: 4px 16px 6px 16px;
              border-radius: 30px;
              font-size: small;
            }
            .workingtime {
              background-color: #9ddfbf;
            }
            .overworking {
              background-color: #ffffff;
            }
          }
          td.itemname02 {
            padding: 12px;
            border-left: 1px solid #ffffff;
            textarea {
              padding: 8px 12px;
              width: 700px;
              border: #777;
              border-radius: 8px;
            }
          }
        }
      }
    }
  }
}
</style>
