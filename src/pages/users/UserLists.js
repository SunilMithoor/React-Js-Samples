import React, { useEffect } from "react";
import useFetchUsers from "../../hooks/useFetchUsers";
import UserCardList from "./UserListsCard";
import ErrorUI from "../../components/error/Error";
import SpinnerLoadingScreen from "../../components/loaders/spinnerLoader/SpinnerLoadingScreen";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UserList = () => {
  const { data: users, isLoading, error } = useFetchUsers();
  console.log("Loading:", isLoading, "Users:", users, "Error:", error);

  useEffect(() => {
    if (!isLoading) {
      if (users) {
        toast.success("Users loaded successfully!");
      } else if (error) {
        toast.error(`Error: ${error.message}`);
      }
    }
  }, [isLoading, users, error]);

  return (
    <div className="users-list">
      {/* Toast Notification */}
      {/* <ToastContainer /> */}

      {/* Loading UI */}
      {isLoading && (
        <div className="loading-container">
          <SpinnerLoadingScreen />
        </div>
      )}

      {/* Error UI */}
      {!isLoading && error && (
        <div className="error-container">
          <ErrorUI errorCode={error.code} errorMessage={error.message} />
          <button onClick={() => window.location.reload()}>Retry</button>
        </div>
      )}

      {/* Success UI */}
      {!isLoading && !error && <UserCardList users={users} />}
    </div>
  );
};

export default UserList;
