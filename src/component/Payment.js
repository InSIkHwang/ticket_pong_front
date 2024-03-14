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
  color: #fff;
  border-radius: 5px;
  border: none;
  transition: all 0.2s;
  background: #fa5a5a;
  box-shadow: 0px 5px 0px 0px #bb4343;

  &:hover {
    margin-top: 15px;
    margin-bottom: 5px;
    box-shadow: 0px 0px 0px 0px #fa5a5a;
  }
`;
const Payment = (effect, deps) => {
  useEffect(() => {
    const jquery = document.createElement("script");
    jquery.src = "https://code.jquery.com/jquery-1.12.4.min.js";
    const iamport = document.createElement("script");
    iamport.src = "https://cdn.iamport.kr/js/iamport.payment-1.1.7.js";
    document.head.appendChild(jquery);
    document.head.appendChild(iamport);
    return () => {
      document.head.removeChild(jquery);
      document.head.removeChild(iamport);
    };
  }, []);

  const onClickPayment = () => {
    const { IMP } = window;
    IMP.init("imp83485354"); // 결제 데이터 정의
    const data = {
      pg: "kcp.AO09C", // PG사 코드.PG상점아이디
      pay_method: "card", // 결제수단
      merchant_uid: `mid_${new Date().getTime()}`, // 주문번호
      amount: 1000, // 결제금액
      name: "아임포트 결제 데이터 분석", // 주문명
      buyer_name: "홍길동", // 구매자 이름
      buyer_tel: "01012341234", // 구매자 전화번호
      buyer_email: "example@example", // 구매자 이메일
      buyer_addr: "신사동 661-16", // 구매자 주소
      buyer_postcode: "06018", // 구매자 우편번호
    };
    IMP.request_pay(data, callback);
  };

  const callback = (response) => {
    const {
      success,
      error_msg,
      imp_uid,
      merchant_uid,
      pay_method,
      paid_amount,
      status,
    } = response;
    if (success) {
      alert("결제 성공");
    } else {
      alert(`결제 실패 : ${error_msg}`);
    }
  };

  return (
    <>
      <PaymentButton onClick={onClickPayment}>결제하기</PaymentButton>
    </>
  );
};

export default Payment;
