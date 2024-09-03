import { useCount } from "@/contexts/AuthContext";




const Landing = () => {

      const {userState, updateUserState} = useCount();

  return <>Hii I am custom Landing
  </>;
};

export default Landing;
