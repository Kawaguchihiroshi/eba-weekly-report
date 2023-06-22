<script setup></script>

<template>
  <form action="#">
    <table>
      <thead>
        <tr>
          <th class="itemname01 other">その他の返信</th>
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
    <div class="buttonArea">
      <button>返信</button>
    </div>
  </form>
</template>

<style lang="scss" scoped>
  button {
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

  table {
    border-collapse: collapse;
    border-radius: 8px;
    margin-top: 40px;
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
        th.leader {
          background-color: #e2b665;
          border-radius: 10px 10px 0px 0px;
          letter-spacing: 0.1em;
        }

        th.ceo {
          background-color: #6da0da;
          border-radius: 10px 10px 0px 0px;
          letter-spacing: 0.1em;
        }
        th.other {
          background-color: #444444;
          border-radius: 10px 10px 0px 0px;
          letter-spacing: 0.1em;
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
</style>