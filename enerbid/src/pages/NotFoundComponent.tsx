import { useNavigate } from "react-router-dom";
// import UIButton from "@/pub/components/UIButton.tsx";
// import { persistor, useAppSelector } from "@/store";

export default function NotFoundComponent() {

//   const b2bAdmr = useAppSelector((state) => state.userStore.user);

  const navigate = useNavigate();

  // 홈으로 이동
//   const goHome = () => {
//     // if(b2bAdmr.b2bAdmrGbpCd === "02") {
//     //   navigate("/b2b/bike");
//     // } else {
//     //   navigate("/b2b/company");
//     // }
//     navigate("/b2b/bike");
//   }

  return (
    <>
      <div className="error-box">
        <div className="error-box__content">
          <h2 className="error-box__title type-q">페이지를 찾을 수 없습니다</h2>
          <p className="error-box__txt">
            존재하지 않거나 사용할 수 없는 페이지입니다. <br />
            입력하신 주소가 정확한지 확인해 주세요. <br />
          </p>
          <p className="error-box__desc">
            아래 버튼을 클릭하시면 <span>KooRoo 비즈니스 관리자 시스템</span>
            으로 이동합니다.
          </p>
          <div className="error-box__btns">
            {/* <UIButton btnColor={"primary"} btnSize={"l"} onClick={goHome}>
              홈으로 가기
            </UIButton> */}
          </div>
        </div>
      </div>
    </>
  );
}