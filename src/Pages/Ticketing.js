import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Payment from "../Components/Payment";
import { useNavigate } from "react-router";
import jsonDataDetail from "../dummy/show_detail.json";
import jsonDataTime from "../dummy/show_time.json";
import Calendar from "../Components/Calendar";

const dataDetail = jsonDataDetail;
const dataTime = jsonDataTime;

const TicketingWrapper = styled.div`
  margin: 0 auto;
  width: 1120px;
`;
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
  color: #666666;
  left: 0;
  span {
    font-size: 14px;
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
  background-image: url(${dataDetail.poster});
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
    text-align: left;
    margin-left: 15px;
  }
`;

const SeatWrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr 2fr 1.8fr;
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
  align-items: flex-start;
  justify-content: space-between;
`;

const BoxHeader = styled.div`
  display: block;
  width: 100px;
  text-align: left;
  span {
    display: block;
    font-size: 18px;
    margin-top: 0;
    font-weight: 700;
  }
`;

const TimeItemList = styled.div`
  overflow-y: overlay;
  scrollbar-width: thin;
  scrollbar-color: rgba(36, 36, 40, 0.4) rgba(0, 0, 0, 0);
  padding-top: 24px;
  width: 257px;
  height: 100%;
  border: 0;
  vertical-align: top;
`;

const TimeItemBtn = styled.button`
  padding: 11px 18px 11px 15px;
  width: 100%;
  border: 1px solid #373a42;
  border-radius: 12px;
  text-align: left;
  margin-bottom: 10px;
  height: 60px;
  font-size: 18px;
  background-color: #fff;

  &.select {
    color: #fc1055;
    border-color: #fc1055;
  }
`;

const SeatList = styled.ul`
  padding: 0;
`;
const SeatItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;
const SeatTimeData = styled.span`
  color: #ab003c;
  font-weight: 700;
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
    navigate(`/showlist/${dataDetail.genrenm}`);
  };
  const [selectDate, setSelectDate] = useState("");
  const [showTimes, setShowTimes] = useState([]);
  const [showSeats, setShowSeats] = useState([]);
  const [selectData, setSelectData] = useState([]);
  const [selectedTimeData, setSelectedTimeData] = useState(null);

  function convertToTimeFormat(arr) {
    return arr.map((time) => {
      const hour = time.slice(0, 2);
      const minute = time.slice(2);
      return `${hour}시 ${minute}분`;
    });
  }
  const handleDataChange = (newData) => {
    setSelectDate(newData);
    const resultTime = dataTime.filter((data) => data.playDate === newData);

    let resultShowTime = resultTime.map((row) => row.playTime);
    setShowTimes(convertToTimeFormat(resultShowTime));

    setShowSeats(resultTime);
    setSelectData(resultShowTime);
  };

  const [select, setSelect] = useState("");
  const handleClick = (time) => {
    setSelect(time);

    let str = time;
    let replaced_str = str.replace(/시|분|\s/g, "");

    const selectedData = showSeats.find(
      (data) => data.playTime === replaced_str
    );
    setSelectedTimeData(selectedData);
  };

  return (
    <TicketingWrapper>
      <ContentWrpper>
        <ContentTitle>
          <NavLocation>
            <span onClick={clickHome}>HOME</span>
            <span>/</span>
            <span onClick={clickShowList}>공연전시예매</span>
            <span>/</span>
            <span onClick={clickGenre}>{dataDetail.genrenm}</span>
          </NavLocation>
          <strong>{dataDetail.prfnm}</strong>
          <br />
          <span>
            {dataDetail.prfpdfrom} ~ {dataDetail.prfpdto}
          </span>
        </ContentTitle>
        <ContentDetail>
          <ContentDetailPoster />
          <ContentDetailInfo>
            <ul>
              <li>공연일시</li>
              <span>
                {dataDetail.prfpdfrom} ~ {dataDetail.prfpdto}
              </span>
            </ul>
            <ul>
              <li>시간</li>
              <span>{dataDetail.dtguidance}</span>
            </ul>
            <ul>
              <li>장소</li>
              <span>{dataDetail.fcltynm}</span>
            </ul>
            <ul>
              <li>관람시간</li>
              <span>{dataDetail.prfruntime}</span>
            </ul>
            <ul>
              <li>관람등급</li>
              <span>{dataDetail.prfage}</span>
            </ul>
            <ul>
              <li>문의</li>
              <span>📞{dataDetail.telno}</span>
            </ul>
            <hr />
            <ul>
              <li style={{ color: "#AB003C" }}>티켓가격</li>
              <span>{dataDetail.pcseguidance}</span>
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
          <Calendar onDataChange={handleDataChange}></Calendar>
        </SeatBox>
        <SeatBox>
          <BoxHeader>
            <span style={{ color: "#AB003C" }}>02</span>
            <span>시간 선택</span>
          </BoxHeader>
          <TimeItemList>
            {showTimes.map((time, index) => (
              <TimeItemBtn
                key={index}
                onClick={() => handleClick(time)}
                className={`${select === time ? "select" : ""}`}
              >
                {time}
              </TimeItemBtn>
            ))}
          </TimeItemList>
        </SeatBox>
        <SeatBox style={{ backgroundColor: "#f6f6f6", display: "block" }}>
          <BoxHeader style={{ width: "120px" }}>
            <span style={{ color: "#AB003C" }}>예매 가능 좌석</span>
          </BoxHeader>
          <>
            {selectedTimeData && (
              <SeatList>
                <SeatItem>
                  <span>VIP석</span>
                  <span>
                    <SeatTimeData>{selectedTimeData.VIP}</SeatTimeData>
                    <span>석</span>
                  </span>
                </SeatItem>
                <SeatItem>
                  <span>R석</span>
                  <span>
                    <SeatTimeData>{selectedTimeData.R}</SeatTimeData>
                    <span>석</span>
                  </span>
                </SeatItem>
                <SeatItem>
                  <span>S석</span>
                  <span>
                    <SeatTimeData>{selectedTimeData.S}</SeatTimeData>
                    <span>석</span>
                  </span>
                </SeatItem>
                <SeatItem>
                  <span>A석</span>
                  <span>
                    <SeatTimeData>{selectedTimeData.A}</SeatTimeData>
                    <span>석</span>
                  </span>
                </SeatItem>
              </SeatList>
            )}
          </>
        </SeatBox>
      </SeatWrapper>
      <Payment></Payment>
    </TicketingWrapper>
  );
};

export default Ticketing;
