import { useEffect, useState } from 'react';
const KEY='bookstore-survey-draft-v1';
const initial={step:1,storeId:'',legal:{people:[{name:'',session:'',need:''}],none:false},packaging:{employeeId:'',name:'',waitlist:'',none:false},roles:{},submitted:false};
export function useSurvey(){
  const [data,setData]=useState(()=>{try{return {...initial,...JSON.parse(localStorage.getItem(KEY)||'{}')}}catch{return initial}});
  useEffect(()=>{localStorage.setItem(KEY,JSON.stringify(data))},[data]);
  useEffect(()=>{const warn=e=>{if(!data.submitted&&data.step>1){e.preventDefault();e.returnValue='您尚未提交資料，確定離開？'}};window.addEventListener('beforeunload',warn);return()=>window.removeEventListener('beforeunload',warn)},[data.submitted,data.step]);
  const update=patch=>setData(d=>({...d,...patch}));
  const reset=()=>{localStorage.removeItem(KEY);setData(initial)};
  return {data,update,reset};
}
