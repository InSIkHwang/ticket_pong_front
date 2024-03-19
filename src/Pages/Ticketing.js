import React from "react";
import styled from "styled-components";
import Payment from "../Components/Payment";
import { useNavigate } from "react-router";
import jsonData from "../dummy/show_detail.json";
import Calendar from "../Components/Calendar";

const data = jsonData;

const ContentWrpper = styled.div`
  margin: 30px 10px;
  text-align: center;
`;

const ContentTitle = styled.div`
  text-align: left;
  margin: 0 auto;
  margin-top: 100px;
  border-bottom: 1px solid black;
  width: 90%;
  font-weight: 400;
  strong {
    font-weight: 600;
    font-size: 36px;
  }

  span {
    font-size: 24px;
  }
`;

const NavLocation = styled.div`
  font-size: 14px;
  color: #666666;
  left: 0;
  span {
    margin-right: 8px;
    cursor: pointer;
  }
`;

const ContentDetail = styled.div`
  display: flex;

  margin: 30px 80px;
  justify-content: center;
`;
const ContentDetailPoster = styled.div`
  min-width: 400px;
  height: 573px;
  background-image: url(${data.poster});
  background-size: cover;
  background-position: center;
`;
const ContentDetailInfo = styled.div`
  padding-left: 50px;
  width: 65%;
  font-size: 18px;
  font-weight: 400;

  ul {
    padding: 0 10px 10px 10px;
    margin-left: 0;
    display: flex;
    width: 95%;

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
  display: grid;
  grid-template-columns: 2fr 2fr 1fr;
  height: 350px;
  margin: 30px 10px;
  text-align: center;
  border: 1px solid black;
  border-radius: 15px;
`;

const SeatBox = styled.div`
  display: flex;
  padding: 20px;
  border-left: 1px solid #bfbfbf;
  border-radius: 0 15px 15px 0;
`;

const BoxHeader = styled.div`
  display: block;
  width: 150px;
  text-align: left;
  span {
    display: block;
    font-size: 20px;
    margin-top: 0;
    font-weight: 700;
  }
`;

const Ticketing = () => {
  const navigate = useNavigate();
  const clickHome = () => {
    navigate("/");
  };
  const clickShowList = () => {
    navigate("/showlist");
  };
  const clickGenre = () => {
    navigate(`/showlist/${data.genrenm}`);
  };
  return (
    <>
      <ContentWrpper>
        <ContentTitle>
          <NavLocation>
            <span onClick={clickHome}>HOME</span>
            <span>/</span>
            <span onClick={clickShowList}>공연전시예매</span>
            <span>/</span>
            <span onClick={clickGenre}>{data.genrenm}</span>
          </NavLocation>
          <strong>{data.prfnm}</strong>
          <br />
          <span>
            {data.prfpdfrom} ~ {data.prfpdto}
          </span>
        </ContentTitle>
        <ContentDetail>
          <ContentDetailPoster />
          <ContentDetailInfo>
            <ul>
              <li>공연일시</li>
              <span>
                {data.prfpdfrom} ~ {data.prfpdto}
              </span>
            </ul>
            <ul>
              <li>시간</li>
              <span>{data.dtguidance}</span>
            </ul>
            <ul>
              <li>장소</li>
              <span>{data.fcltynm}</span>
            </ul>
            <ul>
              <li>관람시간</li>
              <span>{data.prfruntime}</span>
            </ul>
            <ul>
              <li>관람등급</li>
              <span>{data.prfage}</span>
            </ul>
            <ul>
              <li>문의</li>
              <span>📞{data.telno}</span>
            </ul>
            <hr />
            <ul>
              <li style={{ color: "#AB003C" }}>티켓가격</li>
              <span>{data.pcseguidance}</span>
            </ul>
          </ContentDetailInfo>
        </ContentDetail>
      </ContentWrpper>
      <SeatWrapper>
        <SeatBox style={{ border: "none" }}>
          <BoxHeader>
            <span style={{ color: "#AB003C" }}>01</span>
            <span>날짜 선택</span>
          </BoxHeader>
          <Calendar></Calendar>
        </SeatBox>
        <SeatBox>
          <BoxHeader>
            <span style={{ color: "#AB003C" }}>02</span>
            <span>시간 선택</span>
          </BoxHeader>
        </SeatBox>
        <SeatBox style={{ backgroundColor: "#f6f6f6" }}>
          <BoxHeader>
            <span style={{ color: "#AB003C" }}>예매 가능 좌석</span>
          </BoxHeader>
        </SeatBox>
      </SeatWrapper>
      <Payment></Payment>
    </>
  );
};

export default Ticketing;
