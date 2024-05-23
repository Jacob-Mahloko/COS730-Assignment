
'use client'
//import { validateEscapeScequence, validatePhoneNumber } from "@/utilis/validator/validator";
import { Button, Col, Form, Input, Row, Select,message, Space, type FormProps } from 'antd';
import { useRouter } from 'next/navigation';
import React, { Suspense } from "react";
import { IUser } from "../../../models/interface";
import { useStyles } from "./styles";
import { useUser } from "@/providers/authProvider";


const Register: React.FC  = () =>{
  
    const {styles}=useStyles();
    const router = useRouter();
    const [form] = Form.useForm();
    const {createUser}=useUser();
   

    const onFinish :FormProps<IUser>["onFinish"] =(values:any)=>{
        console.log(values)
      if(createUser){
        createUser({...values})
        //form.resetFields();
      }
    }

    const onFinishFailed:FormProps<IUser>["onFinishFailed"] = (error) =>{
      console.log(error)
      message.error("failed")

    }
   
    return (
      <Suspense fallback={<h1>Registration Failed</h1>}>
        <div className={styles.container}>
           
              <Row className={styles.rowCss}>
               
                <Col className={styles.loginForm}>
                <h1 className={styles.loginFormH1}>Register Below</h1>

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
                 
                 <Form.Item label="Fullname">
                        <Space className={styles.space}>
                        <Form.Item<string>
                            name="name"
                            rules={[{ required: true, message: 'Please input your name!' }]}
                            key='name'
                        >
                        <Input placeholder="name" />
                        </Form.Item>

                        <Form.Item<string>
                          name="surname"
                          rules={[{ required: true, message: 'Please input your surname!' }]}
                          key='surname'
                        >
                          <Input placeholder='surname'/>
                        </Form.Item>
                        </Space>
                    </Form.Item>
                    
                    <Form.Item
                      name="username"
                      label="username"
                      tooltip="What do you want others to call you?"
                      rules={[{ required: true, message: 'Please input your username!', whitespace: true }]}
                      style={{marginTop:-10}}
                      key='username'
                    >
                      <Input placeholder="username"/>
                    </Form.Item>

                    <Form.Item
                      name="phoneNumber"
                      label="phone number"
                      tooltip="Please enter your phone number?"
                      rules={[{ required: true, message: 'Please input your cellphone number!', whitespace: true }]}
                      style={{marginTop:-10}}
                      key='phonenumber'
                    >
                      <Input placeholder="011-011-6123"/>
                    </Form.Item>

                    <Form.Item
                    name="email"
                    label="E-mail"
                    rules={[
                      {
                        type: 'email',
                        message: 'The input is not valid E-mail!',
                      },
                      {
                        required: true,
                        message: 'Please input your E-mail!',
                      },
                    ]}
                    key='email'
                    >
                    <Input placeholder="example@gmail.com"/>
                    </Form.Item>

                    <Form.Item
                      name="password"
                      label="Password"
                      rules={[
                        {
                          required: true,
                          message: 'Please input your password!',
                        },
                      ]}
                      hasFeedback
                      key='password'
                    >
                      <Input.Password />
                    </Form.Item>
                  
                    <Form.Item
                      name="confirm"
                      label="Confirm Password"
                      dependencies={['password']}
                      hasFeedback
                      rules={[
                        {
                          required: true,
                          message: 'Please confirm your password!',
                        },
                        ({ getFieldValue }) => ({
                          validator(_, value) {
                            if (!value || getFieldValue('password') === value) {
                              return Promise.resolve();
                            }
                            return Promise.reject(new Error('The new password that you entered do not match!'));
                          },
                        }),
                      ]}
                      key='cpassword'
                    >
                      <Input.Password />
                    </Form.Item>
                  
                    <Form.Item
                      name="gender"
                      label="Gender"
                      rules={[{ required: true, message: 'Please select gender!' }]}
                      key='gender'
                    >
                      <Select placeholder="select your gender">
                        <Select.Option value="1">Male</Select.Option>
                        <Select.Option value="2">Female</Select.Option>
                        <Select.Option value="3">Other</Select.Option>
                      </Select>
                    </Form.Item>
                    
                    <Form.Item wrapperCol={{ offset: 8, span: 16 }} key='button'>
                      <Button type="primary" htmlType="submit">
                        Register
                      </Button>
                    </Form.Item>
                </Form>
                </Col>
              </Row>
            
        </div>
        </Suspense>
    );
}

export default Register;
