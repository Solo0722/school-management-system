import { Modal } from "antd";
import { collection, getDocs, query, where } from "firebase/firestore";
import React, { createContext} from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "../shared/hooks/useLocalStorage";
import { db } from "../shared/utils/firebase";

export const GlobalContext = createContext();

const { confirm } = Modal;

const GlobalProvider = ({ children }) => {
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useLocalStorage("userDetails", null);

  // This function will be used to authenticate a user when he or she wants to sign in
  const getUserDetails = async (formData) => {
    const collectionRef = collection(db, formData.group);
    const q = query(
      collectionRef,
      where("authentication.username", "==", `${formData.username}`),
      where("authentication.userID", "==", `${formData.userID}`),
      where("authentication.password", "==", `${formData.password}`)
    );
    const querySnapshot = await getDocs(q);
    console.log(querySnapshot);
  };

  const showSignOutComfirmModal = () => {
    confirm({
      title: "Do you really wanna sign out?",
      content: "lorem ipsum dolor sit amet, consectetur adipiscing elit",
      onOk() {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve("done");
            navigate("/");
          }, 1000);
        });
      },
      onCancel() {},
    });
  };

  return (
    <GlobalContext.Provider value={{ showSignOutComfirmModal, getUserDetails,userDetails,setUserDetails }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
