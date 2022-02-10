import React from "react";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../store/store";
import {initAuthStateType} from "../../store/reducers/auth-reducer";
import {Navigate} from "react-router-dom";

export const Cards = () => {

  const {isLoggedIn} = useSelector<AppRootStateType, initAuthStateType>(state => state.auth)


  if(!isLoggedIn){
    return <Navigate to={'/login'} />
  }else return (
      <div>CARDS</div>
  )
}