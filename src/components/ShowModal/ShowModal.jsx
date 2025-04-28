import "./ShowModal.scss";
import error from "../../assets/images/negative.png";
import info from "../../assets/images/info.png";
import success from "../../assets/images/positive.png";
import { createPortal } from "react-dom";
import { useNavigate } from "react-router-dom";

const icons = {
  error,
  info,
  success,
};



export default function ShowModal({
  modalStatus,
  iconType,
  children,
  title,
  modalDisable,
  goto = "",
}) {
  console.log(iconType);
  const navigate = useNavigate();
  modalStatus
    ? (() => {
        document.getElementById("root").classList.add("active");
        document.getElementById("root").style.filter = "blur(20px)";
        document.getElementById("root").classList.remove("disabled");
      })()
    : (() => {
        document.getElementById("root").classList.remove("active");
        document.getElementById("root").style.filter = "";
        document.getElementById("root").classList.add("disabled");
      })();

  return createPortal(
    <dialog
      open
      className={`show-modal ${modalStatus ? "active" : "disabled"}`}
    >
      <section className="dialog-nav">
        <div className="class-info">
          <img src={icons[iconType] || info} alt="" srcset="" />
          <h2>{title}</h2>
        </div>
        <div
          className="cross-close"
          onClick={() => {
            if (goto != "") {
              navigate(`/${goto}`);
            }
            modalDisable(false);
          }}
        >
          <h2 className="modal-x">X</h2>
        </div>
      </section>
      <section className="dialog-content">{children}</section>
    </dialog>,
    document.body
  );
}
