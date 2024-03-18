import React from "react";
import styled from "styled-components";
import Payment from "../Components/Payment";
import Poster from "../img/poster_sample.jpg";

const Banner = styled.div`
  height: 450px;
  border: 1px solid black;
  text-align: center;
  margin: 0px 10px 30px 10px;
`;

const ContentWrpper = styled.div`
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
    font-weight: 700;
    font-size: 22px;
  }

  p {
    text-align: center;
    font-size: 16px;
  }
`;

const ContentDetail = styled.div`
  display: flex;

  margin: 30px 80px;
  justify-content: center;
`;
const ContentDetailPoster = styled.div`
  min-width: 240px;
  height: 340px;
  background-image: url(${Poster});
  background-size: cover;
  background-position: center;
`;
const ContentDetailInfo = styled.div`
  padding-left: 50px;
  width: 65%;
  font-size: 12px;

  ul {
    padding: 0 10px 10px 10px;
    margin-left: 0;
    list-style: none;
    display: flex;
    width: 95%;
    border-bottom: 1px solid #00000071;
    margin-bottom: 20px;
  }
  li {
    font-weight: 700;
    white-space: nowrap;
  }

  span {
    margin-left: 15px;
  }
`;

const SeatWrapper = styled.div`
  display: flex;
  height: 300px;
  margin: 30px 10px;
  text-align: center;
  border: 1px solid black;
`;

const SeatBox = styled.div`
  padding: 20px;
  width: 33.3%;
  border-right: solid 1px #999999;
`;

const BoxHeader = styled.div`
  width: 30%;
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
            <ul>
              <li>공연일시</li>
              <span>2023-01-04 ~ 2024-03-29</span>
            </ul>
            <ul>
              <li>지역</li>
              <span>서울</span>
            </ul>
            <ul>
              <li>판매기간</li>
              <span>2023-01-03 ~ 2024-03-28</span>
            </ul>
            <ul>
              <li>장소</li>
              <span>대학로 댕로홀 </span>
            </ul>
            <ul>
              <li>관람시간</li>
              <span>약 80분</span>
            </ul>
            <ul>
              <li>등급</li>
              <span>만 13세 이상 관람가</span>
            </ul>
            <ul>
              <li>문의</li>
              <span>070-0000-0000</span>
            </ul>
            <ul>
              <li>가격</li>
              <span>비지정R석 72,600원(40%할인 / 정상가 121,000원)</span>
              <span>비지정S석 59,400원(40%할인 / 정상가 99,000원)</span>
              <span>비지정A석 52,800원(40%할인 / 정상가 88,000원)</span>
            </ul>
          </ContentDetailInfo>
        </ContentDetail>
      </ContentWrpper>
      <SeatWrapper>
        <SeatBox>
          <BoxHeader>title</BoxHeader>
        </SeatBox>
        <SeatBox>
          <BoxHeader>title</BoxHeader>
        </SeatBox>
        <SeatBox>
          <BoxHeader>title</BoxHeader>
        </SeatBox>
      </SeatWrapper>
      <Payment></Payment>
    </>
  );
};

export default Ticketing;
