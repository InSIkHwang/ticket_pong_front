import React, { useState, useEffect } from "react";
import styles from "./Contents.module.css";

const Contents2 = () => {
  const [jsonData, setJsonData] = useState("");
  const URL = "https://www.kopis.or.kr/";
  const [startIndex, setStartIndex] = useState(0); // 표시할 데이터의 시작 인덱스

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/data/data.json");
        const jsonData = await response.json();
        setJsonData(jsonData);
      } catch (error) {
        console.error("JSON 데이터를 가져오는 중 오류가 발생했습니다.", error);
      }
    };

    fetchData();
  }, []);

  // 클릭한 카테고리에 해당하는 데이터의 시작 인덱스를 설정하는 함수
  const handleCategoryChange = (start) => {
    setStartIndex(start);
  };

  // 현재 선택된 범위의 데이터를 가져오는 함수
  const getDisplayedData = () => {
    return jsonData?.boxofs?.boxof?.slice(startIndex, startIndex + 6) || [];
  };

  // 현재 선택된 범위의 데이터
  const displayedData = getDisplayedData();

  // 화살표
  const handleNext = () => {
    if (startIndex + 4 < jsonData?.boxofs?.boxof?.length) {
      setStartIndex(startIndex + 4);
    }
  };

  const handlePrev = () => {
    if (startIndex - 4 >= 0) {
      setStartIndex(startIndex - 4);
    }
  };

  return (
    <div className={styles.btncontainer}>
      <strong>오늘의 인기티켓</strong>
      <div className={styles.categoryBtn}>
        {/* 카테고리 버튼을 클릭할 때 해당하는 데이터의 시작 인덱스를 설정 */}
        <button onClick={() => handleCategoryChange(0)}>연극</button>
        <button onClick={() => handleCategoryChange(5)}>공연</button>
        <button onClick={() => handleCategoryChange(10)}>콘서트</button>
      </div>

      <div className={styles.container}>
        <button className={styles.prevButton} onClick={handlePrev}>
          {"<"}
        </button>
        <ul>
          {displayedData.map((item, index) => (
            <li key={index}>
              <img src={URL + item.poster._text} alt="포스터" />
              <p>장르: {item.cate._text}</p>
              <p>지역: {item.area._text}</p>
              <p className={styles.over}>이름: {item.prfnm._text}</p>
              <p>기간: {item.prfpd._text}</p>
            </li>
          ))}
        </ul>
        <button className={styles.nextButton} onClick={handleNext}>
          {">"}
        </button>
      </div>
    </div>
  );
};
export default Contents2;
