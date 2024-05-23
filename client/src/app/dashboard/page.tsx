'use client'
import React, { useEffect } from 'react'
import { useLoginActions } from '@/providers/authProvider';

const Dashboard =()=>{

    const {getUserDetails} =useLoginActions();

    useEffect(()=>{
        if(getUserDetails){
            getUserDetails();
        }
    },[])
    return (
       <h1>Dashboard</h1>
    )
}

export default Dashboard;