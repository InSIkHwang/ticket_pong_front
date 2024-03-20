import { useEffect } from "react";
import axios from "axios";

const convert = require("xml-js");

const Axios = () => {
  useEffect(() => {
    async function fetchdata() {
      try {
        const { data } = await axios.get(
          "/restful/boxoffice?service=09719826f9f142e0864780884cbb13e7&ststype=day&date=20221201&catecode=AAAA&area=11&srchseatscale=100&newsql=Y"
        );

        // XML 데이터를 JSON으로 변환
        const result = data;
        const xmlToJson = convert.xml2json(result, {
          compact: true,
          spaces: 1,
        });
        const obj = JSON.parse(xmlToJson);

        // json 데이터를 저장
        // saveDataToFile(obj);
        console.log("데이터입력완료.");
      } catch (err) {
        console.error(err);
      }
    }
    fetchdata();
  }, []);

  // json 데이터 다운로드 코드
  // const saveDataToFile = (jsonData) => {
  //   const jsonDataString = JSON.stringify(jsonData, null, 2);
  //   const blob = new Blob([jsonDataString], { type: "application/json" });
  //   const url = URL.createObjectURL(blob);
  //   const a = document.createElement("a");
  //   a.href = url;
  //   a.download = "data.json"; // 파일명 설정
  //   document.body.appendChild(a);
  //   a.click();
  //   document.body.removeChild(a);
  //   URL.revokeObjectURL(url);
  // };

  // return null;
};

export default Axios;
