<template>
  <section class="sidebar">
    <ul class="accordion">
      <li class="nav">
        <span class="nav">
          週報
        </span>
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
      </li>
      <li class="nav">
        <span class="nav">
          帰社日
        </span>
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
      </li>
      <li class="nav">
        <span class="nav">
          組織・交流
        </span>
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
      </li>
      <li class="nav">
        <span class="nav">
          勤怠
        </span>
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
      </li>
      <li class="nav">
        <span class="nav">
          お知らせ
        </span>
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
      </li>
      <li class="nav">
        <span class="nav">
          同好会
        </span>
        <ul class="inner_nav">
          <li class="nav">
            <a href="view/manual_img/club.pdf" target="_blank">同好会ルール</a>
          </li>
          <li class="nav">
            <a href="club">同好会一覧</a>
          </li>
        </ul>
      </li>
      <li class="nav">
        <span class="nav">
          ブログ
        </span>
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
      </li>
      <li class="nav">
        <span class="nav">
          人事評価
        </span>
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
      </li>
      <li class="nav">
        <span class="nav">
          ラーニング
        </span>
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
      </li>
      <li class="nav">
        <span class="nav">
          FAQ
        </span>
        <ul class="inner_nav">
          <li class="nav">
            <a href="view/manual_img/covid19.pdf" target="_blank">コロナに感染したら</a>
          </li>
        </ul>
      </li>
    </ul>
  </section>
</template>

<style lang="scss" scoped>
.sidebar {
  width: 200px;
  position: fixed;
  top: 100px;
  left: 16px;
  background:rgba(200,200,200,0.7);
  border-radius: 8px;
  z-index: 100;
}
</style>
