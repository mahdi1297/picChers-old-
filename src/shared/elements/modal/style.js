import styled from "styled-components";

export const Backdrop = styled.div`
  position: fixed;
  top: 70px;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(51, 51, 51, 0.3);
  backdrop-filter: blur(1px);
  opacity: 0;
  transition: all 100ms cubic-bezier(0.4, 0, 0.2, 1);
  transition-delay: 100ms;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  z-index: 99999999999;

  & .modal-content {
    transform: translateY(100px);
    transition: all 200ms cubic-bezier(0.4, 0, 0.2, 1);
    opacity: 0;
  }

  &.active {
    transition-duration: 50ms;
    transition-delay: 0ms;
    opacity: 1;

    & .modal-content {
      //transform: translateY(0);
      opacity: 1;
      transition-delay: 150ms;
      transition-duration: 350ms;
    }
  }
`;

export const Content = styled.div`
  position: relative;
  top: -80px;
  padding: 20px;
  z-index: 9999999999999!important;
  box-sizing: border-box;
  min-height: 50px;
  height: auto;
  max-height: 95%;
  width: 90%;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  background-color: white;
  border-radius: 2px;
`;