import React, { useState, useEffect } from "react";
import styles from "./ViewAll.module.css";

const ViewAll = () => {
  const [jsonData, setJsonData] = useState("");
  const URL = "https://www.kopis.or.kr/";
  const [startIndex, setStartIndex] = useState(0); // 표시할 데이터의 시작 인덱스
  const [showAll, setShowAll] = useState(false);

  // 더보기 버튼 구현
  const handleShowAll = () => {
    setShowAll(true);
  };

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

  // 전체 데이터를 가져오는 함수
  const getAllData = () => {
    return jsonData?.boxofs?.boxof || [];
  };

  // 현재 선택된 범위의 데이터를 가져오는 함수
  const getDisplayedData = () => {
    if (startIndex === 0) {
      return getAllData(); // 전체 데이터 표시
    } else {
      return jsonData?.boxofs?.boxof?.slice(startIndex, startIndex + 4) || [];
    }
  };

  // 현재 선택된 범위의 데이터
  const displayedData = getDisplayedData();

  // 카테고리 버튼 클릭 시 해당하는 카테고리를 설정하는 함수
  const handleCategoryChange = (start) => {
    setStartIndex(start);
  };

  return (
    <div className={styles.btncontainer}>
      <div>
        {/* 카테고리 버튼을 클릭할 때 해당하는 카테고리로 데이터를 필터링하여 표시 */}
        <button onClick={() => setStartIndex(0)}>전체보기</button>
        <button onClick={() => handleCategoryChange(1)}>연극</button>
        <button onClick={() => handleCategoryChange(5)}>공연</button>
        <button onClick={() => handleCategoryChange(9)}>콘서트</button>
      </div>

      <div className={styles.container}>
        <ul>
          {displayedData.map((item, index) => {
            if (!showAll && index >= 12) return null; // 첫 12개만 표시하고 나머지는 감춤
            return (
              <li key={index}>
                <img src={URL + item.poster._text} alt="포스터" />
                <p>장르: {item.cate._text}</p>
                <p>지역: {item.area._text}</p>
                <p className={styles.over}>이름: {item.prfnm._text}</p>
                <p>기간: {item.prfpd._text}</p>
              </li>
            );
          })}
        </ul>
      </div>
      {!showAll && (
        <button onClick={handleShowAll} className={styles.moredisplay}>
          더보기
        </button>
      )}
    </div>
  );
};

export default ViewAll;
