import React, { useEffect } from "react";
import styled from "styled-components";

const PaymentButton = styled.button`
  display: block;
  position: relative;
  float: left;
  width: 100px;
  padding: 0;
  margin: 10px 20px 10px 10px;
  font-weight: 600;
  text-align: center;
  line-height: 30px;
  color: #ffffff;
  border-radius: 5px;
  border: none;
  transition: all 0.2s;
  background: #fc1055;
  box-shadow: 0px 5px 0px 0px #393f59;

  &:hover {
    margin-top: 15px;
    margin-bottom: 5px;
    box-shadow: 0px 0px 0px 0px #393f59;
  }
`;
const Payment = (effect, deps) => {
  useEffect(() => {
    const iamport = document.createElement("script");
    iamport.src = "https://cdn.iamport.kr/v1/iamport.js";
    document.head.appendChild(iamport);
    return () => {
      document.head.removeChild(iamport);
    };
  }, []);

  const onClickPayment = () => {
    const { IMP } = window;
    IMP.init("imp83485354");
    // 결제 데이터 정의
    const data = {
      pg: "kcp.AO09C", // PG사 코드.PG상점아이디 //고정값
      pay_method: "card", // 결제수단 //고정값
      merchant_uid: `mid_${new Date().getTime()}`, // 주문번호
      amount: 1000, // 결제금액
      name: "테스트결제", // 주문명
      buyer_name: "홍길동", // 구매자 이름
      buyer_tel: "01012341234", // 구매자 전화번호
      buyer_email: "example@example.com", // 구매자 이메일
      buyer_addr: "신사동 661-16", // 구매자 주소
    };
    IMP.request_pay(data, callback);
  };

  const callback = (response) => {
    if (response.success) {
      alert("결제 성공");
      console.log(response);
    } else {
      alert(`결제 실패 : ${response.error_msg}`);
    }
  };

  return (
    <>
      <PaymentButton onClick={onClickPayment}>결제하기</PaymentButton>
    </>
  );
};

export default Payment;
