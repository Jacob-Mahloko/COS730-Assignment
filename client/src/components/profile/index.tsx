'use client'
import React,{FC, useEffect, useState} from 'react';
import Image from 'next/image';
import Logo from '../../../public/Logo.jpg'
import { useStyles } from './styles';
import {Card,Row,Col,Tag,Button,Modal} from 'antd';
import { useLoginState,useLoginActions } from '@/providers/authProvider';
import { useRouter } from 'next/navigation';


const Profile:FC =()=>{
    
    const router=useRouter();
    
    const {styles} =useStyles();
    
    const state=useLoginState();
    const {getUserDetails}=useLoginActions();

    useEffect(()=>{
        if(getUserDetails){
            getUserDetails();
        }
    },[])

    return (<>
            <div className={styles.ProfileImageWrapper}>
                <Image className={styles.ProfileImage} src={Logo} alt='profile picture' width={160} height={160}/>
            </div>
            <Card hoverable className={styles.cardStyle} title='User Details'>
                    <Row style={{padding:10,marginTop:-10}}>
                        <Col span={12}>
                            First Name
                        </Col>
                        <Col span={12}>
                            Last Name
                        </Col>
                    </Row>
                    <Row style={{padding:10}}>
                        <Col span={12}>
                            {state.currentUser?.name}
                        </Col>
                        <Col span={12}>
                        {state.currentUser?.surname}
                        </Col>
                    </Row>
                    <Row style={{padding:10}}>
                        <Col span={12}>
                            Email Address:
                        </Col>
                        <Col span={12}>
                           {state.currentUser?.emailAddress/*email address mapping*/} 
                        </Col>
                    </Row>
                    <Row style={{padding:10}}>
                        <Col span={12}>
                            Username:
                        </Col>
                        <Col span={12}>
                           {state.currentUser?.userName}
                        </Col>
                    </Row>
                
            </Card>
            <div style={{display:'flex',justifyContent:'center'}}>
                <Button style={{backgroundColor:'red',color:'white',position:'fixed',textAlign:'center',bottom:20,width:'300px'}} onClick={()=>router.push('/login')}>Logout</Button>
            </div>   
        </>
    )
}

export default Profile;