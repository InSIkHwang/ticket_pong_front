import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./Reviews.module.css";

const Reviews = () => {
  const [jsonData, setJsonData] = useState("");
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

  return (
    <div className="container">
      <strong>베스트 관람 후기</strong>
      <hr className={styles.head} />
      <ul className={styles.container}>
        <li className={styles.item}>
          {jsonData?.boxofs?.boxof?.[0]?.poster && (
            <img
              src={URL + jsonData.boxofs.boxof[0].poster._text}
              alt="포스터"
              className={styles.image} // 이미지 스타일 클래스 적용
            />
          )}
          <div className={styles.text}>
            {jsonData?.boxofs?.boxof?.[0]?.cate && (
              <p>장르: {jsonData.boxofs.boxof[0].cate._text}</p>
            )}
            {jsonData?.boxofs?.boxof?.[0]?.prfnm && (
              <p className={styles.name}>
                이름: {jsonData.boxofs.boxof[0].prfnm._text}
              </p>
            )}
            {jsonData?.boxofs?.boxof?.[0]?.area && (
              <p>지역: {jsonData.boxofs.boxof[0].area._text}</p>
            )}
            {jsonData?.boxofs?.boxof?.[0]?.prfpd && (
              <p>기간: {jsonData.boxofs.boxof[0].prfpd._text}</p>
            )}
          </div>
        </li>
      </ul>
      <hr className={styles.normal} />
      <ul className={styles.container}>
        <li className={styles.item}>
          {jsonData?.boxofs?.boxof?.[1]?.poster && (
            <img
              src={URL + jsonData.boxofs.boxof[1].poster._text}
              alt="포스터"
              className={styles.image} // 이미지 스타일 클래스 적용
            />
          )}
          <div className={styles.text}>
            {jsonData?.boxofs?.boxof?.[1]?.cate && (
              <p>장르: {jsonData.boxofs.boxof[1].cate._text}</p>
            )}
            {jsonData?.boxofs?.boxof?.[1]?.prfnm && (
              <p className={styles.name}>
                이름: {jsonData.boxofs.boxof[1].prfnm._text}
              </p>
            )}
            {jsonData?.boxofs?.boxof?.[1]?.area && (
              <p>지역: {jsonData.boxofs.boxof[1].area._text}</p>
            )}
            {jsonData?.boxofs?.boxof?.[1]?.prfpd && (
              <p>기간: {jsonData.boxofs.boxof[1].prfpd._text}</p>
            )}
          </div>
        </li>
      </ul>
      <hr className={styles.normal} />
      <ul className={styles.container}>
        <li className={styles.item}>
          {jsonData?.boxofs?.boxof?.[2]?.poster && (
            <img
              src={URL + jsonData.boxofs.boxof[2].poster._text}
              alt="포스터"
              className={styles.image} // 이미지 스타일 클래스 적용
            />
          )}
          <div className={styles.text}>
            {jsonData?.boxofs?.boxof?.[2]?.cate && (
              <p>장르: {jsonData.boxofs.boxof[2].cate._text}</p>
            )}
            {jsonData?.boxofs?.boxof?.[2]?.prfnm && (
              <p className={styles.name}>
                이름: {jsonData.boxofs.boxof[2].prfnm._text}
              </p>
            )}
            {jsonData?.boxofs?.boxof?.[2]?.area && (
              <p>지역: {jsonData.boxofs.boxof[2].area._text}</p>
            )}
            {jsonData?.boxofs?.boxof?.[2]?.prfpd && (
              <p>기간: {jsonData.boxofs.boxof[2].prfpd._text}</p>
            )}
          </div>
        </li>
      </ul>
      <div style={{ textAlign: "center" }}>
        <Link to="/community?selectedItem=2">
          <button className={styles.reviewallbtn}>후기 전체보기</button>
        </Link>
      </div>
    </div>
  );
};
export default Reviews;
