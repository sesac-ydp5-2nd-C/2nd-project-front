import React from 'react';
import './style.scss';
import Screen from '../Screen';

export default function AdminScreen() {
  const admin = {
    user_nickName: '내가 짱이야',
    admin_data: {
      user: [
        {
          id: 2,
          user_id: 'imwoals7578@naver.com',
          user_pw:
            '$2b$05$YiPs1RFsW/LuuuaLBx7wlOam.DwjH9NCU8ck7AWb.4Z2hWD6gCOTq',
          user_nickname: '이재민',
          user_grade: 0,
          auth_id: 0,
          user_profile_img: null,
          user_comment: null,
          user_interest: null,
          is_kakao: false,
        },
        {
          id: 5,
          user_id: 'jannie526@naver.com',
          user_pw:
            '$2b$05$fwFZOmqkv/lbZfCAyjY67.bZuS.3bmAkkcYOgih/iIiXrgqyUhH.S',
          user_nickname: '김정윤',
          user_grade: 0,
          auth_id: 0,
          user_profile_img: null,
          user_comment: null,
          user_interest: null,
          is_kakao: false,
        },
        {
          id: 6,
          user_id: 'test@naver.com',
          user_pw:
            '$2b$05$5cbXMdKt3M8w42KsFg0yq.g1owSYT.Da9qxrbX7MYXRjlQZm/ReZ6',
          user_nickname: '이제그만하자',
          user_grade: 0,
          auth_id: 0,
          user_profile_img: null,
          user_comment: null,
          user_interest: null,
          is_kakao: false,
        },
        {
          id: 8,
          user_id: 'flashrifle@gmail.com',
          user_pw:
            '$2b$05$bHx7F8ea6nPxgtCUupV0F.vCAfGYTl87bvl/skHuzAP6V3e1rRh6O',
          user_nickname: '이재민',
          user_grade: 0,
          auth_id: 0,
          user_profile_img:
            'http://k.kakaocdn.net/dn/dpk9l1/btqmGhA2lKL/Oz0wDuJn1YV2DIn92f6DVK/img_640x640.jpg',
          user_comment: null,
          user_interest: null,
          is_kakao: true,
        },
        {
          id: 9,
          user_id: 'flashrifle@gmail.com',
          user_pw:
            '$2b$05$MMRmjiAXrm3PRuVTxlDKuO/xshrEgyeAfxgOPW6K2CSka7Rv2/G5i',
          user_nickname: '이재민',
          user_grade: 0,
          auth_id: 0,
          user_profile_img:
            'http://k.kakaocdn.net/dn/dpk9l1/btqmGhA2lKL/Oz0wDuJn1YV2DIn92f6DVK/img_640x640.jpg',
          user_comment: null,
          user_interest: null,
          is_kakao: true,
        },
        {
          id: 10,
          user_id: 'jck1004ee@naver.com',
          user_pw:
            '$2b$05$sy95KzA6dXoiz3y8tp34GO6GwBs7pYhmCWNdE02b.dT7hQWivjHjS',
          user_nickname: 'sadfds',
          user_grade: 0,
          auth_id: 0,
          user_profile_img: null,
          user_comment: null,
          user_interest: null,
          is_kakao: false,
        },
        {
          id: 11,
          user_id: 'jck1004ee@naver.com',
          user_pw:
            '$2b$05$sy95KzA6dXoiz3y8tp34GO6GwBs7pYhmCWNdE02b.dT7hQWivjHjS',
          user_nickname: 'sadfds',
          user_grade: 0,
          auth_id: 0,
          user_profile_img: null,
          user_comment: null,
          user_interest: null,
          is_kakao: false,
        },
        {
          id: 12,
          user_id: 'jck1004ee@naver.com',
          user_pw:
            '$2b$05$sy95KzA6dXoiz3y8tp34GO6GwBs7pYhmCWNdE02b.dT7hQWivjHjS',
          user_nickname: 'sadfds',
          user_grade: 0,
          auth_id: 0,
          user_profile_img: null,
          user_comment: null,
          user_interest: null,
          is_kakao: false,
        },
      ],
      column: [
        {
          id: 1,
          type: '칼럼',
          title: '음악가들의 별칭, 제대로 붙인 걸까?',
          content:
            '학교 음악시간에 음악의 대가들에 대해 배울 때, 그 이름 앞에 수식어처럼 붙는 별칭도 알아두어야 했다. ‘음악의 아버지 바흐’, ‘교향곡의 아버지 하이든’, ‘음악의 신동 모차르트’, ‘악성 베토벤’, ‘가곡의 왕 슈베르트’, ‘피아노의 시인 쇼팽’, ‘왈츠의 왕 요한 슈트라우스’, ‘가극(오페라)의 제왕 베르디’. 과연 이 별칭들은 제대로 잘 갖다 붙인 것일까? 지금부터 확인해보자.',
          url: 'https://www.thecolumnist.kr/news/articleView.html?idxno=967',
        },
        {
          id: 2,
          type: '칼럼',
          title: '음악이 없는 나라? 여왕을 배웅한 음악',
          content:
            '‘Das Land ohne Musik 음악이 없는 나라’. ‘음악이 없는 나라’라고? 그런 나라가 있을 리도 없겠지만, 대체 다른 나라에 대해 이런 표현을 한 사람은 얼마나 오만에 쩐 사람일까?',
          url: 'https://www.thecolumnist.kr/news/articleView.html?idxno=1374',
        },
        {
          id: 3,
          type: '칼럼',
          title: '느리고 점진적인: 록의 죽음에 대해',
          content:
            '‘록은 쇠퇴했다’. ‘Rock Will Never Die’가 록 음악의 팬들에게 오랜 시간 동안 통용되었던 격언이라는 것을 생각해 보면, 록이 더 이상 주류의, 혹은 인기 있는 음악이 아니라는 건 모든 사람이 인정할 수밖에 없는 사실로 보인다.',
          url: 'https://heterophony.kr/death-of-rock/',
        },
        {
          id: 4,
          type: '칼럼',
          title: '대중음악의 힘',
          content:
            '대중음악은 우리 삶의 반영이자 감정을 나타내는 예술로, 밥 딜런과 같은 아티스트들은 음악을 통해 사회적 메시지와 감동을 전달해왔습니다.',
          url: 'https://www.daejonilbo.com/news/articleView.html?idxno=2078719',
        },
      ],
      notice: [
        {
          id: 1,
          type: '공지',
          title: 'WELCOME TO BEATBAY!',
          content:
            '비트베이는 악기 중고거래는 물론, 음악과 관련된 모든 재능을 거래할 수 있는 음악 거래의 새로운 중심지 입니다. 믿음직스러운 비트베이에서 여러분들의 음악을 펼쳐주세요!',
        },
        {
          id: 2,
          type: '공지',
          title: 'ver 1.0.6 업데이트',
          content:
            'ver 1.0.6 업데이트가 완료되었습니다 !!ver 1.0.6 업데이트가 완료되었습니다 !!ver 1.0.6 업데이트가 완료되었습니다 !!ver 1.0.6 업데이트가 완료되었습니다 !!ver 1.0.6 업데이트가 완료되었습니다 !!ver 1.0.6 업데이트가 완료되었습니다 !!ver 1.0.6 업데이트가 완료되었습니다 !!ver 1.0.6 업데이트가 완료되었습니다 !!ver 1.0.6 업데이트가 완료되었습니다 !!ver 1.0.6 업데이트가 완료되었습니다 !!ver 1.0.6 업데이트가 완료되었습니다 !!ver 1.0.6 업데이트가 완료되었습니다 !!ver 1.0.6 업데이트가 완료되었습니다 !!ver 1.0.6 업데이트가 완료되었습니다 !!ver 1.0.6 업데이트가 완료되었습니다 !!ver 1.0.6 업데이트가 완료되었습니다 !!ver 1.0.6 업데이트가 완료되었습니다 !!',
        },
      ],
      product: [
        {
          product_id: 2,
          product_title: 'sample1',
          product_id: 4,
          product_title: 'slam dunk zzang',
        },
        {
          product_id: 3,
          product_title: 'slam dunk zzang',
        },
        {
          product_id: 4,
          product_title: 'slam dunk zzang',
        },
      ],
      ability: [
        {
          ability_id: 1,
          ability_title: 'sample1',
        },
        {
          ability_id: 2,
          ability_title: 'slam dunk',
        },
      ],
    },
  };
  return (
    <Screen>
      <div className="adminContainer">
        <h1>관리자_{admin.user_nickName} </h1>
        <section className="ADUserSection">
          <div className="userControl">
            <div className="ADControlTitle">
              <h2>회원관리</h2>
              <p>전체 회원 수: {admin.admin_data.user.length}</p>
            </div>
            <table className="userTable"></table>
          </div>
        </section>

        <section className="ADNoticeSection">
          <div className="columnControl">
            <div className="ADControlTitle">
              <h2>칼럼 관리</h2>
              <button className="columnPost">등록</button>
            </div>
            <table className="columnTable"></table>
          </div>
          <div className="noticeControl">
            <div className="ADControlTitle">
              <h2>공지 관리</h2>
              <button className="noticePost">등록</button>
            </div>
            <table className="noticeTable"></table>
          </div>
        </section>

        <section className="ADTradeSection">
          <div className="productControl">
            <div className="ADControlTitle">
              <h2>물품 관리</h2>
              <p>물품 등록 수: {admin.admin_data.product.length}</p>
            </div>
            <table className="productTable"></table>
          </div>
          <div className="abilityControl">
            <div className="ADControlTitle">
              <h2>재능 관리</h2>
              <p>재능 등록 수: {admin.admin_data.product.length}</p>
            </div>
            <table className="abilityTable"></table>
          </div>
        </section>
      </div>
    </Screen>
  );
}
