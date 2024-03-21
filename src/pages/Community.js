import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import styles from "./Community.module.css";
import CommuReview from "../component/CommuReview";

function Community() {
  const [selectedItem, setSelectedItem] = useState(1);
  const [selectedPost, setSelectedPost] = useState(null);
  const [showPostList, setShowPostList] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(8);

  // 예시 게시글
  const [posts] = useState([
    {
      id: 1,
      title: "첫 번째 게시글",
      content: "첫 번째 게시글의 내용입니다.",
      date: "2024-03-19",
    },
    {
      id: 2,
      title: "두 번째 게시글",
      content: "두 번째 게시글의 내용입니다.",
      date: "2024-03-20",
    },
    {
      id: 3,
      title: "세 번째 게시글",
      content: "세 번째 게시글의 내용입니다.",
      date: "2024-03-21",
    },
  ]);

  // 게시글 토글
  const togglePost = (postId) => {
    if (selectedPost === postId) {
      setSelectedPost(null);
    } else {
      setSelectedPost(postId);
      setShowPostList(false); // 게시판 리스트 감춤
    }
  };

  const toggleList = () => {
    setShowPostList(!showPostList);
    setSelectedPost(null); // 선택된 게시글 초기화
  };

  // 후기 전체보기 링크 영역
  const location = useLocation();
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const selectedItem = parseInt(searchParams.get("selectedItem"));
    if (selectedItem) {
      handleItemClick(selectedItem);
    }
  }, [location.search]);

  const handleItemClick = (num) => {
    setSelectedItem(num);
    const items = document.querySelectorAll(".item");
    items.forEach((item, index) => {
      if (index + 1 === num) {
        item.style.color = "red";
        item.querySelector("span").style.color = "red";
      } else {
        item.style.color = "inherit";
        item.querySelector("span").style.color = "black";
      }
    });
  };

  // 이름 변경
  let selectedName = "";
  switch (selectedItem) {
    case 1:
      selectedName = "공지사항";
      break;
    case 2:
      selectedName = "관람 후기";
      break;
    case 3:
      selectedName = "이용 안내";
      break;
    default:
      selectedName = "";
  }

  // 하단 페이지 번호 표시

  // 페이지 번호 클릭 시 해당 페이지로 이동하는 함수
  const handleClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // 현재 페이지에서 보여줄 게시글 목록
  // const indexOfLastPost = currentPage * postsPerPage;
  // const indexOfFirstPost = indexOfLastPost - postsPerPage;
  // const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // 페이지 번호 배열 생성
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(posts.length / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <h2>커뮤니티</h2>
        <div
          className={`${styles.item} item`}
          onClick={() => handleItemClick(1)}
        >
          공지사항
          <span>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&gt;
          </span>
        </div>
        <div
          className={`${styles.item} item`}
          onClick={() => handleItemClick(2)}
        >
          관람 후기
          <span>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&gt;
          </span>
        </div>
        <div
          className={`${styles.item} item`}
          onClick={() => handleItemClick(3)}
        >
          이용 안내
          <span>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&gt;
          </span>
        </div>
      </div>
      <div className={styles.content}>
        <h2>{selectedName}</h2>
        <div
          className={`${styles.box} ${styles.text}`}
          style={{ display: selectedItem === 1 ? "block" : "none" }}
        >
          <div className={styles.boardContainer}>
            {/* 게시판 리스트 */}
            {showPostList && (
              <>
                <table className={styles.postTable}>
                  <thead>
                    <tr>
                      <th>번호</th>
                      <th>제목</th>
                      <th>작성일자</th>
                    </tr>
                  </thead>
                  <tbody>
                    {posts.map((post) => (
                      <tr
                        key={post.id}
                        onClick={() => togglePost(post.id)}
                        className={
                          selectedPost === post.id ? styles.selectedRow : ""
                        }
                      >
                        <td>{post.id}</td>
                        <td>{post.title}</td>
                        <td>{post.date}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                {/* 페이지 이동 */}
                <div className={styles.pagination}>
                  <button onClick={() => handleClick(1)}>&laquo;</button>
                  <button onClick={() => handleClick(currentPage - 1)}>
                    &lt;
                  </button>
                  {pageNumbers.map((number) => (
                    <button
                      key={number}
                      onClick={() => handleClick(number)}
                      className={currentPage === number ? styles.active : ""}
                    >
                      {number}
                    </button>
                  ))}
                  <button onClick={() => handleClick(currentPage + 1)}>
                    &gt;
                  </button>
                  <button
                    onClick={() =>
                      handleClick(Math.ceil(posts.length / postsPerPage))
                    }
                  >
                    &raquo;
                  </button>
                </div>
              </>
            )}

            {/* 선택된 게시글 내용 */}
            {!showPostList && selectedPost && (
              <div className={styles.postContentContainer}>
                <h3>{posts.find((post) => post.id === selectedPost).title}</h3>
                <h5>{posts.find((post) => post.id === selectedPost).date}</h5>
                <hr />
                <p className={styles.postContent}>
                  {posts.find((post) => post.id === selectedPost).content}
                </p>
                <hr />
                <button onClick={toggleList} className={styles.goBackButton}>
                  목록
                </button>
              </div>
            )}
          </div>
        </div>
        <div
          className={styles.box}
          style={{ display: selectedItem === 2 ? "block" : "none" }}
        >
          <>
            <CommuReview />
          </>
        </div>
        <div
          className={styles.box}
          style={{ display: selectedItem === 3 ? "block" : "none" }}
        >
          <hr />
          <h2>이용수칙</h2>
          <li>
            1인 4매 (본인 및 동반인 3인) 까지 예매 가능합니다. 예매 시, 필요한
            매수 만큼만 예매해 주시기 바랍니다.
          </li>
          <li>
            예매 및 예매취소는 공연/전시 전일 오후 5시까지 가능합니다. (예매 및
            예매취소 완료시간 기준)
          </li>
          <li>
            비지정 좌석으로 예매되며, 공연/전시 관람 당일 공연(전시)장
            매표소에서 좌석이 지정 됩니다.
          </li>
          <li>
            티켓 수령은 신분증으로 본인 확인 후 수령 가능하며, 가족을 포함한
            제3자 수령이 불가합니다. 타인에게 티켓 양도가 불가하며, 부정사용
            시에는 회원자격 영구 정지됩니다.
          </li>
          <li>
            예매 취소 없이 미관람한 경우에는 일정 기간 동안 회원자격이 일시
            정지됩니다. 관람이 어려운 경우에는 공연/전시 전일 오후 5시까지
            예매취소를 진행해 주시기 바랍니다.
          </li>
          <li>
            회원정보는 반드시 정확한 정보로 입력하여 관리해 주시기 바랍니다.
            회원정보 관리가 미흡하여 공지가 미진행된 경우에는 회원에게 책임이
            있음을 숙지해 주시기 바랍니다.
          </li>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <hr />
        </div>
      </div>
    </div>
  );
}

export default Community;
