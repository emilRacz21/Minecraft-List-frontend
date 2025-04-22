import "./Create.scss";
import Navbar from "../Navbar/Navbar";
import { login } from "../../content";
import { useRef, useState, useEffect } from "react";
import { postUserName, postLogin } from "../Api/Api.jsx";
import ShowModal from "../ShowModal/ShowModal.jsx";

const initialLogin = { name: "", lastname: "" };
const initialUser = { username: "", password: "", user: null };

const InputField = ({ label, value, onChange, type }) => (
  <>
    <label>{label}</label>
    <input value={value} onChange={onChange} type={type} />
  </>
);

const isStrongPassword = (password) => {
  const regex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&[\]{}()\-_=+<>.,])[A-Za-z\d@$!%*?&[\]{}()\-_=+<>.,]{8,}$/;
  return regex.test(password);
};

export default function Create() {
  const containerRef = useRef(null);
  const [loginData, setLoginData] = useState(initialLogin);
  const [userData, setUserData] = useState(initialUser);
  const [repeatPassword, setRepeatPassword] = useState("");
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [userID, setUserID] = useState(null);
  const [errorMsg, setErrorMsg] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const validateFields = (...fields) =>
    fields.every((f) => f && f.trim() !== "");

  const handleLoginAccount = () => {
    if (validateFields(loginData.name, loginData.lastname)) {
      postUserName(loginData, setUserID);
      setShowCreateForm(true);
    } else {
      setErrorMsg("Please fill in your name and lastname.");
      setIsModalOpen(true);
    }
  };

  const handleCreateAccount = () => {
    const { username, password } = userData;

    if (!validateFields(username, password, repeatPassword)) {
      setErrorMsg("Please fill in all fields.");
      setIsModalOpen(true);
      return;
    }

    if (password !== repeatPassword) {
      setErrorMsg("Passwords do not match.");
      setIsModalOpen(true);
      return;
    }

    if (!isStrongPassword(password)) {
      setErrorMsg(
        "Password too weak. It must be at least 8 characters long and include a lowercase letter, uppercase letter, number, and special character."
      );
      setIsModalOpen(true);
      return;
    }
    setErrorMsg("");
    postLogin(userData, setErrorMsg);
    setIsModalOpen(true);
  };

  useEffect(() => {
    if (userID !== null) {
      setUserData((prev) => ({ ...prev, user: userID }));
    }
  }, [userID]);

  return (
    <Navbar title={["login", "New account"]}>
      <ShowModal
        modalStatus={isModalOpen}
        modalDisable={setIsModalOpen}
        title={errorMsg ? "You have an error!" : "User added successfully!"}
        closeModal={setIsModalOpen}
        goto={
          userData.username && userData.password && !errorMsg ? "login" : ""
        }
      >
        {errorMsg && errorMsg.length > 0 ? (
          <p>{errorMsg}</p>
        ) : (
          <p>
            Thank you,{" "}
            <strong style={{ color: "green" }}>
              {loginData.name} {loginData.lastname}.
            </strong>{" "}
            Your account has been successfully created and added to our
            database. We appreciate your trust in our platform!
          </p>
        )}
      </ShowModal>
      <section className="account-container" ref={containerRef}>
        <section className="account-section">
          <form>
            {showCreateForm ? (
              <>
                <InputField
                  label="Your Username"
                  value={userData.username}
                  onChange={(e) =>
                    setUserData({ ...userData, username: e.target.value })
                  }
                  type={login.userLabel.type}
                />
                <InputField
                  label="Your Password"
                  value={userData.password}
                  onChange={(e) =>
                    setUserData({ ...userData, password: e.target.value })
                  }
                  type={login.passwordLabel.type}
                />
                <InputField
                  label="Repeat Password"
                  value={repeatPassword}
                  onChange={(e) => setRepeatPassword(e.target.value)}
                  type={login.passwordLabel.type}
                />
              </>
            ) : (
              <>
                <InputField
                  label="Your Name"
                  value={loginData.name}
                  onChange={(e) =>
                    setLoginData({ ...loginData, name: e.target.value })
                  }
                  type={login.userLabel.type}
                />
                <InputField
                  label="Your Lastname"
                  value={loginData.lastname}
                  onChange={(e) =>
                    setLoginData({ ...loginData, lastname: e.target.value })
                  }
                  type={login.userLabel.type}
                />
              </>
            )}
          </form>

          <section className="create-button">
            <button
              onClick={
                showCreateForm ? handleCreateAccount : handleLoginAccount
              }
            >
              {showCreateForm ? "Create Account" : "Next"}
            </button>
          </section>
        </section>
      </section>
    </Navbar>
  );
}
