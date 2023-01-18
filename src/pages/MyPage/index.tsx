import MypageNavbar from "@components/Layout/MypageNav/MypageNavbar";
import { Outlet } from "react-router";
import styled from "styled-components";

const Mypage = () => {
  return (
    <>
      <Navbar>
        <MypageNavbar />
      </Navbar>
      <Outlet />
    </>
  );
};
export default Mypage;

const Navbar = styled.section`
  display: flex;
  justify-content: center;
  padding: 20px;
`;