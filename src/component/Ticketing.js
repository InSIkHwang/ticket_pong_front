import React from "react";
import styled from "styled-components";
import Payment from "./Payment";
import Poster from "../img/poster_sample.jpg";

const Banner = styled.div`
  height: 450px;
  border: 1px solid black;
  text-align: center;
  margin: 0px 10px 30px 10px;
`;

const ContentWrpper = styled.div`
  height: 600px;
  margin: 30px 10px;
  text-align: center;
  border: 1px solid black;
`;

const ContentTitle = styled.div`
  margin: 0 auto;
  margin-top: 100px;
  border-bottom: 3px solid black;
  width: 90%;
  strong {
    font-size: 22px;
  }

  p {
    text-align: center;
    font-size: 16px;
  }
`;

const ContentDetail = styled.div`
  display: flex;
  height: 500px;
  margin: 30px 80px;
  justify-content: center;
`;
const ContentDetailPoster = styled.div`
  width: 240px;
  height: 340px;
  background-image: url(${Poster});
  background-size: cover;
  background-position: center;
`;
const ContentDetailInfo = styled.div`
  margin-left: 50px;
  width: 500px;
  dl {
    display: flex;
  }

  dd {
    margin-left: 10px;
  }
`;

const Ticketing = () => {
  return (
    <>
      <Banner>
        <p>배너</p>
      </Banner>
      <ContentWrpper>
        <ContentTitle>
          <strong>공연명(예시)</strong>
          <p>연극 | 날짜 | 장소</p>
        </ContentTitle>
        <ContentDetail>
          <ContentDetailPoster />
          <ContentDetailInfo>
            <dl>
              <dt>공연일시</dt>
              <dd>2023-01-04 ~ 2024-03-29</dd>
            </dl>
            <dl>
              <dt>지역</dt>
              <dd>서울</dd>
            </dl>
            <dl>
              <dt>판매기간</dt>
              <dd>2023-01-03 ~ 2024-03-28</dd>
            </dl>
            <dl>
              <dt>장소</dt>
              <dd>대학로 댕로홀 </dd>
            </dl>
            <dl>
              <dt>관람시간</dt>
              <dd>약 80분</dd>
            </dl>
            <dl>
              <dt>등급</dt>
              <dd>만 13세 이상 관람가</dd>
            </dl>
            <dl>
              <dt>문의</dt>
              <dd>070-0000-0000</dd>
            </dl>
            <dl>
              <dt>티켓가격</dt>
              <dd>비지정석 20,000원(정상가 50,000원의 60%할인)</dd>
            </dl>
          </ContentDetailInfo>
        </ContentDetail>
        <Payment></Payment>
      </ContentWrpper>
    </>
  );
};

export default Ticketing;
