<template>
  <section class="sidebar">
    <details>
      <summary>週報</summary>
      <div>
        <ul class="inner_nav">
          <li class="nav">
            <a href="time_card">タイムカード</a>
          </li>
          <li class="nav">
            <a href="pay_off">各種精算</a>
          </li>
          <li class="nav">
            <a href="weekly_report">週報</a>
          </li>
          <li class="nav">
            <a href="site_info">現場情報</a>
          </li>
          <li class="nav">
            <a href="weekly_report_specific">週報見本</a>
          </li>
          <li class="nav">
            <a href="config">設定</a>
          </li>
          <li class="nav">
            <a href="view/manual_img/syuho20210505.pdf" target="_blank">週報マニュアル</a>
          </li>
        </ul>
      </div>
    </details>

    <details>
      <summary>帰社日</summary>
      <div>
        <ul class="inner_nav">
          <li class="nav">
            <a href="return_date">全体会議</a>
          </li>
          <li class="nav">
            <a href="view/manual_img/return_date_contact.pdf" target="_blank">帰社日の勤怠連絡</a>
          </li>
          <li class="nav">
            <a href="return_date_back_number">バックナンバー</a>
          </li>
        </ul>
      </div>
    </details>

    <details>
      <summary>組織・交流</summary>
      <div>
        <ul class="inner_nav">
          <li class="nav">
            <a href="organization">組織図</a>
          </li>
          <li class="nav">
            <a href="company_contact_list">本社連絡一覧</a>
          </li>
          <li class="nav">
            <a href="link_to_trainee_profile" target="_blank">社員紹介ページ</a>
          </li>
          <li class="nav">
            <a href="view/manual_img/ovice.pdf" target="_blank">バーチャルEBA（oVice）</a>
          </li>
          <li class="nav">
            <a href="link_to_todoeba" target="_blank"> todoEba</a>
          </li>
        </ul>
      </div>
    </details>

    <details>
      <summary>勤怠</summary>
      <div>
        <ul class="inner_nav">
          <li class="nav">
            <a href="view/manual_img/paid_holiday.pdf" target="_blank">有給（欠勤　遅刻　早退）</a>
          </li>
          <li class="nav">
            <a href="view/manual_img/except_paid_holiday.pdf" target="_blank">有給以外（欠勤　遅刻　早退）</a>
          </li>
          <li class="nav">
            <a href="view/manual_img/transfer_holiday.pdf" target="_blank">振替休</a>
          </li>
          <li class="nav">
            <a href="view/manual_img/bereavement_leave.pdf" target="_blank">忌引き</a>
          </li>
          <li class="nav">
            <a href="view/manual_img/inhouse_work.pdf" target="_blank">自宅作業ルール</a>
          </li>
        </ul>
      </div>
    </details>

    <details>
      <summary>お知らせ</summary>
      <div>
        <ul class="inner_nav">
          <li class="nav">
            <a href="notification_history?type=2">総務お知らせ</a>
          </li>
          <li class="nav">
            <a href="human_report">人事お知らせ</a>
          </li>
          <li class="nav">
            <a href="notification_history?type=1">社長お知らせ</a>
          </li>
        </ul>
      </div>
    </details>

    <details>
      <summary>同好会</summary>
      <div>
        <ul class="inner_nav">
          <li class="nav">
            <a href="view/manual_img/club.pdf" target="_blank">同好会ルール</a>
          </li>
          <li class="nav">
            <a href="club">同好会一覧</a>
          </li>
        </ul>
      </div>
    </details>

    <details>
      <summary>ブログ</summary>
      <div>
        <ul class="inner_nav">
          <li class="nav">
            <a href="http://ebablog.net/" target="_blank">EBAブログ</a>
          </li>
          <li class="nav">
            <a href="blog_member_history?page=1">執筆履歴</a>
          </li>
          <li class="nav">
            <a href="view/manual_img/blog20210312.pdf" target="_blank">マニュアル</a>
          </li>
        </ul>
      </div>
    </details>

    <details>
      <summary>人事評価</summary>
      <div>
        <ul class="inner_nav">
          <li class="nav">
            <a href="whats_evaluation">評価制度について</a>
          </li>
          <li class="nav">
            <a href="goal_list">目標管理リスト</a>
          </li>
          <li class="nav">
            <a href="view/manual_img/self_evaluation.pdf" target="_blank">自己評価の入力</a>
          </li>
        </ul>
      </div>
    </details>

    <details>
      <summary>ラーニング</summary>
      <div>
        <ul class="inner_nav">
          <li class="nav">
            <a href="it_word">ITカタカナ語録</a>
          </li>
          <li class="nav">
            <a href="it_word_apply">ITカタカナ語録登録申請</a>
          </li>
          <li class="nav">
            <a href="it_word_apply_list">ITカタカナ語録登録申請リスト</a>
          </li>
          <li class="nav">
            <a href="self_study_lang_choice">登録言語</a>
          </li>
          <li class="nav">
            <a href="learning_source">学習用ソース</a>
          </li>
        </ul>
      </div>
    </details>

    <details>
      <summary>FAQ</summary>
      <div>
        <ul class="inner_nav">
          <li class="nav">
            <a href="view/manual_img/covid19.pdf" target="_blank">コロナに感染したら</a>
          </li>
        </ul>
      </div>
    </details>

  </section>
</template>

<style lang="scss" scoped>
.sidebar {
  width: 250px;
  padding: 15px 10px 10px 15px;
  position: fixed;
  top: 100px;
  left: 16px;
  background:rgba(200,200,200,0.7);
  border-radius: 8px;
  z-index: 100;
  height: 80vh;
  overflow-y: scroll;
}
.sidebar::-webkit-scrollbar{
   width: 10px;
}
.sidebar::-webkit-scrollbar-track{
   background-color: #ccc;
}
.sidebar::-webkit-scrollbar-thumb{
   background-color: #17585d;
}
</style>
