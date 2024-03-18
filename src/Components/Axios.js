import React, { useEffect, useState } from "react";
import axios from "axios";

const convert = require("xml-js");

const Axios = () => {
  useEffect(() => {
    async function fetchdata() {
      const { data } = await axios.get(
        "/restful/pblprfr?service=b82c2ae6ed6c45fc9ee2b22742eb9bbc&stdate=20240301&eddate=20240430&cpage=1&rows=5&prfstate=02&signgucode=11&signgucodesub=1111&kidstate=Y&newsql=Y"
      );

      // console.log(data);
      const result = data;
      const xmlToJson = convert.xml2json(result, { compact: true, spaces: 1 });
      const obj = JSON.parse(xmlToJson);
      console.log(obj);
    }
    fetchdata();
  }, []);

  return;
};
export default Axios;
