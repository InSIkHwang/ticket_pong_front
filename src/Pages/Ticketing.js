import React, { useEffect, useState } from "react";
import Payment, { PongButton } from "../Components/Payment";
import { useNavigate } from "react-router";
import jsonDataDetail from "../dummy/show_detail.json";
import jsonDataTime from "../dummy/show_time.json";
import jsonDataReview from "../dummy/reviews.json";
import Calendar from "../Components/Calendar";
import * as S from "./styled_components/Styled_components_Ticketing";
import PlaceMap from "../Components/PlaceMap";

export const dataDetail = jsonDataDetail;
const dataTime = jsonDataTime;
const dataReview = jsonDataReview;

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

  const [activeTab, setActiveTab] = useState(0);
  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <S.TicketingWrapper>
      <S.ContentWrapper>
        <S.ContentTitle>
          <S.NavLocation>
            <span onClick={clickHome}>HOME</span>
            <span>/</span>
            <span onClick={clickShowList}>공연전시예매</span>
            <span>/</span>
            <span onClick={clickGenre}>{dataDetail.genrenm}</span>
          </S.NavLocation>
          <strong>{dataDetail.prfnm}</strong>
          <span>
            {dataDetail.prfpdfrom} ~ {dataDetail.prfpdto}
          </span>
        </S.ContentTitle>
        <S.ContentDetail>
          <S.ContentDetailPoster>
            <img src={dataDetail.poster} alt="" />
          </S.ContentDetailPoster>
          <S.ContentDetailInfo>
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
          </S.ContentDetailInfo>
        </S.ContentDetail>
      </S.ContentWrapper>
      <S.SeatWrapper>
        <S.SeatBox style={{ border: "none" }}>
          <S.BoxHeader>
            <span style={{ color: "#AB003C" }}>01</span>
            <span>날짜 선택</span>
          </S.BoxHeader>
          <Calendar onDataChange={handleDataChange}></Calendar>
        </S.SeatBox>
        <S.SeatBox>
          <S.BoxHeader>
            <span style={{ color: "#AB003C" }}>02</span>
            <span>시간 선택</span>
          </S.BoxHeader>
          <S.TimeItemList>
            {showTimes.map((time, index) => (
              <S.TimeItemBtn
                key={index}
                onClick={() => handleClick(time)}
                className={`${select === time ? "select" : ""}`}
              >
                {time}
              </S.TimeItemBtn>
            ))}
          </S.TimeItemList>
        </S.SeatBox>
        <S.SeatBox style={{ backgroundColor: "#f6f6f6", display: "block" }}>
          <S.BoxHeader style={{ width: "120px" }}>
            <span style={{ color: "#AB003C" }}>예매 가능 좌석</span>
          </S.BoxHeader>
          <>
            {selectedTimeData && (
              <S.SeatList>
                <S.SeatItem>
                  <span>VIP석</span>
                  <span>
                    <S.SeatTimeData>{selectedTimeData.VIP}</S.SeatTimeData>
                    <span>석</span>
                  </span>
                </S.SeatItem>
                <S.SeatItem>
                  <span>R석</span>
                  <span>
                    <S.SeatTimeData>{selectedTimeData.R}</S.SeatTimeData>
                    <span>석</span>
                  </span>
                </S.SeatItem>
                <S.SeatItem>
                  <span>S석</span>
                  <span>
                    <S.SeatTimeData>{selectedTimeData.S}</S.SeatTimeData>
                    <span>석</span>
                  </span>
                </S.SeatItem>
                <S.SeatItem>
                  <span>A석</span>
                  <span>
                    <S.SeatTimeData>{selectedTimeData.A}</S.SeatTimeData>
                    <span>석</span>
                  </span>
                </S.SeatItem>
              </S.SeatList>
            )}
          </>
        </S.SeatBox>
      </S.SeatWrapper>
      <S.PaymentWrapper>
        <Payment />
      </S.PaymentWrapper>

      <S.ContentWrapper>
        <S.TicketingTabs>
          <S.TicketingTabList>
            <S.TicketingTabItem>
              <S.TicketingTabBtn
                active={activeTab === 0}
                onClick={() => handleTabClick(0)}
              >
                상세정보
              </S.TicketingTabBtn>
            </S.TicketingTabItem>
            <S.TicketingTabItem>
              <S.TicketingTabBtn
                active={activeTab === 1}
                onClick={() => handleTabClick(1)}
              >
                관람후기
              </S.TicketingTabBtn>
            </S.TicketingTabItem>
            <S.TicketingTabItem>
              <S.TicketingTabBtn
                active={activeTab === 2}
                onClick={() => handleTabClick(2)}
              >
                장소안내
              </S.TicketingTabBtn>
            </S.TicketingTabItem>
            <S.TicketingTabItem>
              <S.TicketingTabBtn
                active={activeTab === 3}
                onClick={() => handleTabClick(3)}
              >
                예매유의사항
              </S.TicketingTabBtn>
            </S.TicketingTabItem>
          </S.TicketingTabList>
        </S.TicketingTabs>
      </S.ContentWrapper>
      <S.ContentWrapper>
        {activeTab === 0 && (
          <S.TabContentDetail>
            <h2>작품 상세 정보</h2>
            <S.TabContentDetailImg>
              <img src={dataDetail.styurl} alt="" />
            </S.TabContentDetailImg>
          </S.TabContentDetail>
        )}
        {activeTab === 1 && <S.TabContentReview>Review</S.TabContentReview>}
        {activeTab === 2 && (
          <S.TabContentPlace>
            <h2>공연장 안내</h2>
            <hr />
            <p>장소: {dataDetail.fcltynm}</p>
            <p>전화번호: {dataDetail.telno}</p>
            <PlaceMap></PlaceMap>
            <PongButton
              onClick={() => {
                window.open(
                  `https://map.kakao.com/link/map/공연장소,35.1482786,129.0654385`
                );
              }}
            >
              길 찾기
            </PongButton>
          </S.TabContentPlace>
        )}
        {activeTab === 3 && (
          <S.TabContentNotice>
            <S.TabContentPlace>
              <h2>예매 유의사항</h2>
              <ul>
                <li>
                  다른 이용자의 원활한 예매 및 취소에 지장을 초래할 정도로
                  반복적인 행위를 지속하는 경우 회원의 서비스 이용을 제한할 수
                  있습니다.
                </li>
                <li>당일 공연/전시 예매 및 취소는 불가합니다.</li>
                <li>
                  관람일자/회차 변경은 불가능하므로, 변경이 필요한 경우라면 취소
                  후 다시 예매하시기 바랍니다.
                </li>
              </ul>
              <hr />
              <h2>예매내역 확인 및 취소</h2>
              <ul>
                <li>[마이페이지] - [예매 내역]에서 확인 및 취소 가능합니다.</li>
                <li>예매 취소 시 취소수수료가 적용될 수 있습니다.</li>
              </ul>
              <hr />
              <h2>환불안내</h2>
              <ul>
                <li style={{ listStyleType: "none", fontSize: "20px" }}>
                  - 신용카드 결제 -
                </li>
                <li>
                  일반적으로 당사의 취소 처리가 완료되고 4~5일 후 카드사의
                  취소가 확인됩니다. (체크카드 동일)
                </li>
                <li>
                  예매 취소 시점과 해당 카드사의 환불 처리기준에 따라 취소금액의
                  환급방법과 환급일은 다소 차이가 있을 수 있으며, 예매 취소시
                  기존에 결제하였던 내역을 취소하며 최초 결제하셨던 동일카드로
                  취소 시점에 따라 취소수수료와 배송료를 재승인 합니다.
                </li>
                <br />
                <li style={{ listStyleType: "none", fontSize: "20px" }}>
                  - 무통장 입금의 경우 -
                </li>
                <li>
                  예매 취소 시에 환불 계좌번호를 남기고, 그 계좌를 통해
                  취소수수료를 제외한 금액을 환불 받습니다. 취소 후 고객님의
                  계좌로 입금까지 대략 5~7일 정도가 소요됩니다. (주말 제외)
                </li>
                <li>
                  환불은 반드시 예매자 본인 명의의 계좌로만 받으실 수 있습니다.
                </li>
              </ul>
              <hr />
            </S.TabContentPlace>
          </S.TabContentNotice>
        )}
      </S.ContentWrapper>
    </S.TicketingWrapper>
  );
};

export default Ticketing;
