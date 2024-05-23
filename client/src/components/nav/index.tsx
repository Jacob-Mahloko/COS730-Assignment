'use client'
import React,{FC, useEffect, useState} from 'react';
import { Col, Row,Drawer } from 'antd';
import {useStyles} from "./styles";
import Image from 'next/image';
import Logo from '../../../public/logo.jpg'
import { useRouter } from 'next/navigation';
import { useLoginState } from '@/providers/authProvider';


const Nav : FC = ()=>{

  const router=useRouter();
  const {styles}=useStyles();
  const state=useLoginState();
  const {open,onClose,showDrawer}=useDrawer();

  const [loggedin,setLogIn]=useState(false)

  useEffect(()=>{
    
    if(localStorage.getItem('accessToken')!=null ){
      setLogIn(true)
    }else{
      setLogIn(false);
    }
  })
  
  return (
      <Row className={styles.row}>
      <Col 
        className={styles.logo}
        key='logo'
        xs={{ flex: '100%' }}
        sm={{ flex: '50%' }}
        md={{ flex: '40%' }}
        lg={{ flex: '20%' }}
        xl={{ flex: '15%' }}>
       <Image className={styles.logoImage} src={Logo} height={50} width={120} alt='logo' onClick={()=> router.push('/')}/>
      </Col>
      
      {!loggedin&&<>      <Col
        className={styles.nav}
        key='logout'
        xs={{ flex: '100%' }}
        sm={{ flex: '50%' }}
        md={{ flex: '40%' }}
        lg={{ flex: '20%' }}
        xl={{ flex: '15%' }}
        onClick={()=>{ router.push('/login')
        }}
      >
        Login
      </Col>
      <Col
        className={styles.nav}
        key='logout'
        xs={{ flex: '100%' }}
        sm={{ flex: '50%' }}
        md={{ flex: '40%' }}
        lg={{ flex: '20%' }}
        xl={{ flex: '15%' }}
        onClick={()=>{ router.push('/register')
        }}
      >
        Register
      </Col></>}
      {loggedin&&<>
      <Col
        className={styles.nav}
        key='logout'
        xs={{ flex: '100%' }}
        sm={{ flex: '50%' }}
        md={{ flex: '40%' }}
        lg={{ flex: '20%' }}
        xl={{ flex: '15%' }}
        onClick={()=>{ router.push('/login')
        }}
      >
        Logout
      </Col>
      {open?
        <Drawer title="Profile Details" onClose={onClose} open={open}>
          {/* <Profile/> */}
        </Drawer>
        :
        <Col className={styles.navUser} onClick={showDrawer}>{state.currentUser?.userName}</Col>
      }</>}
  </Row>
  );
}

export default Nav;

export const useDrawer=()=>{
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
      setOpen(true);
    };
  
    const onClose = () => {
      setOpen(false);
    };
  return {open,showDrawer,onClose}
}