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
  <section id="weekform" class="weekform">
    <transition name="fadein">
      <div class="container">
        <div class="head">
          <WeeklyreportCalendar />
          <WeeklyreportNews />
          <WeeklyreportCsvdownlord />
        </div>

        <form action="#">
          <div class="buttonArea">
            <button>週報を保存する</button>
            <button class="submission">週報を提出する</button>
          </div>

          <table>
            <thead>
              <tr>
                <th class="itemname01">日付</th>
                <th class="itemname02">作業内容</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(weeklydata, index) in weeklydatas" :key="index">
                <td class="itemname01">
                  <div v-if="index == 0"><span class="date">{{ weeklydata.date }}</span>（月）</div>
                  <div v-else-if="index == 1"><span class="date">{{ weeklydata.date }}</span>（火）</div>
                  <div v-else-if="index == 2"><span class="date">{{ weeklydata.date }}</span>（水）</div>
                  <div v-else-if="index == 3"><span class="date">{{ weeklydata.date }}</span>（木）</div>
                  <div v-else-if="index == 4"><span class="date">{{ weeklydata.date }}</span>（金）</div>
                  <div v-else-if="index == 5"><span class="date">{{ weeklydata.date }}</span>（土）</div>
                  <div v-else-if="index == 6"><span class="date">{{ weeklydata.date }}</span>（日）</div>
                  <div class="workingtime">勤務時間：{{ weeklydata.totaltaime }}</div>
                  <div class="overworking">残業：{{ weeklydata.overtime }}</div>
                </td>
                <td class="itemname02">
                  <textarea rows="5">{{ weeklydata.workContent }}</textarea>
                </td>
              </tr>
            </tbody>
          </table>

          <table>
            <thead>
              <tr>
                <th class="itemname01 stady">直近で学んだこと、覚えたこと</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="itemname02 stady">
                  <textarea rows="5"></textarea>
                </td>
              </tr>
            </tbody>
          </table>

          <table>
            <thead>
              <tr>
                <th class="itemname01 stady">コメント欄<span class="">（あなたのプライベートを書ける範囲で書いてください。その他特記事項など）</span></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="itemname02 stady">
                  <textarea rows="5"></textarea>
                </td>
              </tr>
            </tbody>
          </table>
        </form>

        <WeeklyreportLeaderform />
        <WeeklyreportCeoform />
        <WeeklyreportOtherform />
      </div>
    </transition>
  </section>
</template>
水曜日 : Wednesday (Wed.）
木曜日 : Thursday (Thu.）
土曜日 : Saturday (Sat.）
<style lang="scss" scoped>
.weekform {
  margin-top: 100px;
  .container{
    width: 984px;
    margin: 0 auto;
    .head {
      display: flex;
      justify-content: space-between;
      align-items: stretch;
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
