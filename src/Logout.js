import React,{useEffect} from "react";
import { useNavigate } from "react-router-dom";
export default function Logout() {
    const usenavigate = useNavigate();
    useEffect(()=>{
        sessionStorage.clear();
        usenavigate('/');
    },[]);
}