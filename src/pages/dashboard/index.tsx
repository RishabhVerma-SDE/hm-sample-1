import { AuthContext, useCount } from "@/contexts/AuthContext";
import { useContext } from "react";

const DashboardPage = () => {
  const {userState, updateUserState} = useCount();

  return <div>{userState.count}
    <button onClick={() => {
        updateUserState({ type: "INCREMENT" })
      }}>Hi Click Me</button>
  </div>;
};

export default DashboardPage;
