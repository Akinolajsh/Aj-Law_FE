import React, { PropsWithChildren } from "react";
import { Navigate } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import { userState, user } from "../Components/custom/Jotai";
import jwt_decode from "jwt-decode";

const PrivateRouter: React.FC<PropsWithChildren> = ({ children }) => {
  const value: any = useRecoilValue(userState);
  const [state, setState] = useRecoilState<any>(user);

  let myToken: any = {};
  let token: string = value;

  if (token) {
    myToken = jwt_decode(token);
    setState(myToken.id);
  }
  return (
    <div>{state ? <div>{children}</div> : <Navigate to="/sign-in" />}</div>
  );
};

export default PrivateRouter;
