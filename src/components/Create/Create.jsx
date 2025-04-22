import "./Create.scss";
import Navbar from "../Navbar/Navbar";
import ShowModal from "../ShowModal/ShowModal";
import { login } from "../../content";
import { useRef, useState, useEffect } from "react";
import { postUserName } from "../Api/Api.jsx";

const loginObj = {
  name: "",
  lastname: "",
};

export default function Create() {
  const containerRef = useRef(null);
  const [getID, setGetID] = useState(null);
  const [passwd, setPasswd] = useState(loginObj);
  const [isModalOpen, setIsModalOpen] = useState(false);
  function triggerError() {
    if (containerRef.current) {
      containerRef.current.classList.add("error-message");

      setTimeout(() => {
        containerRef.current?.classList.remove("error-message");
      }, 2000);
    }

    setPasswd(loginObj);
  }

  function handleLoginAccount() {
    const { name, lastname } = passwd;

    if (name && lastname !== "") {
      postUserName(passwd, setGetID);
      setIsModalOpen(true);
    } else {
      triggerError();
    }
  }

  useEffect(() => {
    if (getID !== null) {
      console.log(getID);
    }
  }, [getID]);

  return (
    <Navbar title={["Getting started", "New account"]}>
      <ShowModal
        modalStatus={isModalOpen}
        modalDisable={setIsModalOpen}
        title="User added sucessfully!"
        closeModal={setIsModalOpen}
        goto="login"
      >
        <p>
          Thank you,{" "}
          <strong style={{ color: "green" }}>
            {passwd.name} {passwd.lastname}
            {". "}
          </strong>
          Your account has been successfully created and added to our database.
          We appreciate your trust in our platform!
        </p>
      </ShowModal>
      <section className="account-container" ref={containerRef}>
        <section className="account-section">
          <form>
            <label>Your Name</label>
            <input
              value={passwd.name}
              onChange={(e) => {
                setPasswd((prev) => {
                  return { ...prev, ["name"]: e.target.value };
                });
              }}
              type={login.userLabel.type}
            />
            <label>Your Lastname</label>
            <input
              value={passwd.lastname}
              onChange={(e) => {
                setPasswd((prev) => {
                  return { ...prev, ["lastname"]: e.target.value };
                });
              }}
              type={login.userLabel.type}
            />
          </form>
          <section className="login-button">
            <button onClick={handleLoginAccount}>Next</button>
          </section>
        </section>
      </section>
    </Navbar>
  );
}
