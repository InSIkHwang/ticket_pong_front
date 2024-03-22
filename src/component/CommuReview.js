import React, { useState, useEffect } from "react";
import styles from "./CommuReview.module.css";

const ITEMS_PER_PAGE = 2; // 페이지당 표시할 데이터의 개수

const CommuReview = () => {
  const [jsonData, setJsonData] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const URL = "https://www.kopis.or.kr/";

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

  // 현재 페이지의 데이터 범위를 계산
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = Math.min(
    startIndex + ITEMS_PER_PAGE,
    jsonData?.boxofs?.boxof?.length
  );

  // 이전 페이지로 이동
  const goToPrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  // 다음 페이지로 이동
  const goToNextPage = () => {
    setCurrentPage((prevPage) =>
      Math.min(
        prevPage + 1,
        Math.ceil(jsonData?.boxofs?.boxof?.length / ITEMS_PER_PAGE)
      )
    );
  };

  return (
    <div className={styles.container}>
      <hr />
      <ul>
        {/* 데이터를 페이지 당 항목 수만큼 렌더링 */}
        {jsonData?.boxofs?.boxof
          ?.slice(startIndex, endIndex)
          .map((item, index) => (
            <li key={index} className={styles.listItem}>
              <div className={styles.imageContainer}>
                {item.poster && (
                  <img src={URL + item.poster._text} alt="포스터" />
                )}
              </div>
              <div className={styles.contentContainer}>
                {item.cate && <p>장르: {item.cate._text}</p>}
                {item.area && <p>지역: {item.area._text}</p>}
                {item.prfnm && <p>이름: {item.prfnm._text}</p>}
                {item.prfpd && <p>기간: {item.prfpd._text}</p>}
              </div>
              {index < endIndex - 1 && <hr />}
            </li>
          ))}
      </ul>
      <hr />
      <div className={styles.btn}>
        <button onClick={goToPrevPage}>{"<<"}</button>
        <button onClick={goToPrevPage}>{"<"}</button>
        {Array.from(
          {
            length: Math.ceil(jsonData?.boxofs?.boxof?.length / ITEMS_PER_PAGE),
          },
          (_, i) => (
            <button key={i + 1} onClick={() => setCurrentPage(i + 1)}>
              {i + 1}
            </button>
          )
        )}

        <button onClick={goToNextPage}>{">"}</button>
        <button onClick={goToNextPage}>{">>"}</button>
      </div>
    </div>
  );
};

export default CommuReview;
