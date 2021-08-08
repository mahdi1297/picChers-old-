import React, { useEffect, useState } from "react";
import Portal from "../portal";
import { Backdrop, Content } from "./style";
import PerfectScrollbar from "@opuscapita/react-perfect-scrollbar";

export default function Modal(props) {
  const [active, setActive] = useState(false);
  const { open, onClose, locked } = props;
  const backdrop = React.useRef(null);

  useEffect(() => {
    const { current } = backdrop;

    const transitionEnd = () => setActive(open);

    const keyHandler = (e) =>
      !locked && [27].indexOf(e.which) >= 0 && onClose();

    const clickHandler = (e) => !locked && e.target === current && onClose();

    if (current) {
      current.addEventListener("transitionend", transitionEnd);
      current.addEventListener("click", clickHandler);
      window.addEventListener("keyup", keyHandler);
    }

    if (open) {
      window.setTimeout(() => {
        document.activeElement.blur();
        setActive(open);
        document.querySelector("#portal").setAttribute("inert", "true");
      }, 10);
    }

    return () => {
      if (current) {
        current.removeEventListener("transitionend", transitionEnd);
        current.removeEventListener("click", clickHandler);
      }

      document.querySelector("#portal").removeAttribute("inert");
      window.removeEventListener("keyup", keyHandler);
    };
  }, [open, locked, onClose]);

  return (
    <React.Fragment>
      {(open || active) && (
        <Portal className="modal-portal">
          <Backdrop ref={backdrop} className={active && open && "active"}>
            <Content className="modal-content" style={props.height && {height: `${props.height}`}}>
              <PerfectScrollbar>{props.children}</PerfectScrollbar>
            </Content>
          </Backdrop>
        </Portal>
      )}
    </React.Fragment>
  );
}
