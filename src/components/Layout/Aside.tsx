import { useAppDispatch, useAppSelector } from "app/hooks";
import styled from "styled-components";
import { closeMenu } from "features/toggleSlice";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { IoClose, IoChevronDown } from "react-icons/io5";
import { useState } from "react";

interface IBtn {
  isOpen: boolean;
}

const Aside = () => {
  const dispatch = useAppDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => setIsOpen((prev) => !prev);

  return (
    <>
      <StyledAside
        initial={{
          x: "-100%",
        }}
        animate={{
          x: 0,
        }}
        exit={{
          x: "-100%",
          transition: { duration: 0.5 },
        }}
        transition={{ type: "spring", bounce: 0, duration: 0.7 }}
      >
        <nav>
          <TitleWrapper>
            <h1>QUATRE FOIL</h1>
            <button type="button" onClick={() => dispatch(closeMenu())}>
              <IoClose />
            </button>
          </TitleWrapper>
          <MenuWrapper>
            <li>
              <ShopDropdown>
                <Link to="/shop">shop</Link>
                <DropdownBtn
                  type="button"
                  isOpen={isOpen}
                  onClick={handleClick}
                >
                  <IoChevronDown />
                </DropdownBtn>
              </ShopDropdown>

              {isOpen ? (
                <DropdownMenu>
                  <li>
                    <Link to="/shop">furniture</Link>
                  </li>
                </DropdownMenu>
              ) : null}
            </li>
            <li>
              <Link to="/cart">cart</Link>
            </li>
            <li>
              <Link to="/">my page</Link>
            </li>
          </MenuWrapper>
        </nav>
      </StyledAside>
      <Backdrop
        initial={{ opacity: 1 }}
        animate={{
          opacity: 1,
        }}
        exit={{
          opacity: 0,
        }}
        onClick={() => dispatch(closeMenu())}
      />
    </>
  );
};
export default Aside;

const StyledAside = styled(motion.aside)`
  background-color: var(--primary-color);
  width: 80vw;
  height: 100%;
  position: fixed;
  top: 0;
  z-index: 10;
  padding: 0 1.5rem;
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.5rem;
  height: 52px;

  h1 {
    font-size: 1.75rem;
  }
`;

const MenuWrapper = styled.ul`
  font-family: "Righteous", cursive;
  font-size: 1.25rem;
  text-transform: uppercase;
`;

const ShopDropdown = styled.div`
  display: flex;
  /* width: 100%; */
  justify-content: space-between;
`;

const DropdownBtn = styled(motion.button)<IBtn>`
  transform: ${({ isOpen }) => (isOpen ? "rotate(180deg)" : "rotate(360deg)")};
  transition: transform 0.3s;
`;

const DropdownMenu = styled.ul`
  padding-left: 0.75rem;
  font-size: 1rem;
`;

const Backdrop = styled(motion.div)`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 5;
  background-color: rgba(0, 0, 0, 0.2);
`;