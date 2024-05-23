'use client'
import { useLoginActions } from "@/providers/authProvider";
import { Button, Card, Checkbox, Col, Form, Input, Row, message, type FormProps } from 'antd';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from "react";
import { ILogin } from "../../../models/interface";
import { useStyles } from "./styles";



const Login: React.FC  = () =>{

    const {login,logOutUser} = useLoginActions();
    const {styles, cx}=useStyles();
    const router = useRouter();
    const [form] = Form.useForm();
    const [disabler,setDisable]=useState(false);

    useEffect(()=>{
      localStorage.clear();
      if(logOutUser){
        logOutUser();
      }
    },[])
    const onFinish :FormProps<ILogin>["onFinish"] =(values:ILogin)=>{
      setDisable(true)
       if(login){
         login(values);
      
         form.resetFields();
         setTimeout(async ()=>{setDisable(false)},8000)
       }
    }

    const onFinishFailed:FormProps<ILogin>["onFinishFailed"] = (error) =>{
      
      message.error("failed")

    }

   
    return (
        <div className={styles.container}>
            
            <Row className={styles.rowCss}>
                <Col className={styles.loginForm}>
                
                <h1 className={styles.loginFormH1}>Welcome back</h1>
                <Form
                    form={form}
                    name="basic"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    style={{ maxWidth: 600 }}
                    initialValues={{ isLibrarian:false,remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >     
                           
                    <Form.Item<string>
                      label="Username"
                      name="userNameOrEmailAddress"
                      rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                      <Input />
                    </Form.Item>

                    <Form.Item<string>
                      label="Password"
                      name="password"
                      rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                      <Input.Password />
                    </Form.Item>

                    <Form.Item<string>
                      name="remember"
                      valuePropName="checked"
                      wrapperCol={{ span: 30 }}
                    >
                      <div className={styles.RememberMeStyle}>
                        <Checkbox defaultChecked={true}>Remember me</Checkbox>
                        <p className={styles.notregistered} onClick={()=> router.push('/registration?type=student')}>Not Registered?</p>
                      </div>
                    </Form.Item>
                    
                    <Form.Item  wrapperCol ={{span:24}}style={{display:'flex',justifyContent:'right'}}>
                      <div style={{display:'flex',flexDirection:'row',justifyContent:'space-evenly',width:'100%'}}>
                        <Button style={{width:100}} type="primary" htmlType="submit" disabled={disabler}>Submit</Button>
                      </div>
                    </Form.Item>
                    
                </Form>
                </Col>
                
                </Row>
        
        </div>
    );
}

export default Login;