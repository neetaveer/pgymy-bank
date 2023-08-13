import React, { useState } from 'react';
import { MenuFoldOutlined, MenuUnfoldOutlined, WalletOutlined } from '@ant-design/icons';
import applogo from '../components/img/logo.png';

import { Outlet } from 'react-router-dom';
import { AiFillDashboard, AiOutlineMedium,  AiOutlineRocket, AiOutlineFileDone, AiOutlineBook, AiOutlineDollarCircle, AiOutlineUser, AiOutlineHome, AiOutlineUserAdd,AiOutlineLogout   } from 'react-icons/ai';
import { useNavigate } from "react-router-dom";

import { Layout, Menu, theme } from 'antd';
import './commonsidebar.css';

const { Header, Sider, Content } = Layout;

const CommonSidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const navigate = useNavigate();

  const toggleMenu = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Layout style={{ minHeight: '100vh' }} >
      <Sider className='Sidebar w-1' trigger={null} collapsible collapsed={collapsed}  style={{ backgroundColor: 'white' } } width={300} >
      <div className="logo" style={{ backgroundColor: 'white' }}>
  <h2 className='text-white fs-5 text-center py-3 mb-0  d-flex justify-center'>
    <span className='sm-logo'><img src={applogo} alt="App Logo" style={{width:70}}/></span>
    <span className='lg-logo'><img src={applogo} alt="App Logo" style={{width:120}}/></span>
  </h2>
</div>

        <div className="sidebar-wrapper" >
          <div className="sidebar-menu" >
            <Menu
            
              theme="light"
              mode="inline"
              defaultSelectedKeys={['']}
              onClick={({ key }) => {
                if (key === "signout") {
                } else {
                  navigate(key)
                }
              }}
          items={[
            {
              key: '',
              icon: <AiFillDashboard/>,
              label: 'Dashboard',
            },
            {
              key: 'Account Management',
              icon: <AiOutlineUser />,
              label: 'Account Management',
              children :[
                {
                key: 'createaccount',
                icon: <AiOutlineUserAdd/>,
                label: 'Create Account',
               },
               {
                key: 'viewaccount',
                icon: <AiOutlineUserAdd/>,
                label: 'View Account',
               }
            ],  
            },
            {
              key: 'loanManagement',
              icon: <AiOutlineRocket/>,
              label: 'Loan Management',
              children :[
                {
                key: 'createLoanAccount',
                icon:<AiOutlineRocket/>,
                label: 'Create Loan Account',
               },
               {
                key: 'viewLoanAccount',
                icon: <AiOutlineRocket/>,
                label: 'View Loan Account',
               },
               {
                key: 'loanAccountStatus',
                icon: <AiOutlineRocket/>,
                label: 'Loan Account Status',
               },
            ],  
            },

    

            {
              key: 'employee',
              icon: <WalletOutlined />,
              label: 'Employee',
              children :[
                {
                key: 'createNewEmployee',
                icon: <WalletOutlined />,
                label: 'Create New Employee',
               },
               {
                key: 'viewEmployee',
                icon:<WalletOutlined />,
                label: 'View Employee',
               },
               {
                key: 'empStatus',
                icon: <WalletOutlined />,
                label: 'Employee Status',
               },
            ],  
            },



              {
              key: 'transaction',
              icon: <AiOutlineDollarCircle/>,
              label: 'Transaction',
              children :[
                {
                key: 'viewTransactions',
                icon: <AiOutlineDollarCircle/>,
                label: 'View Transactions',
               },
               {
                key: 'depositWithdraw',
                icon: <AiOutlineDollarCircle/>,
                label: 'Deposit/Withdraw',
               },
               {
                key: 'statement',
                icon: <AiOutlineDollarCircle/>,
                label: 'Statement',
               },
            ],  
            },

            {
              key: 'reports',
              icon: <AiOutlineFileDone/>,
              label: 'Reports',
              children :[
                {
                key: 'accountReports',
                icon: <AiOutlineFileDone/>,
                label: 'Account Reports',
               },
               {
                key: 'loanReports',
                icon: <AiOutlineFileDone/>,
                label: 'Loan Reports',
               },
               {
                key: 'status',
                icon: <AiOutlineFileDone/>,
                label: 'Status',
               },
            ],  
            },









            {
              key: 'logout',
              icon: <AiOutlineLogout /> ,
              label: 'Logout',
            },
           





          ]}
        />
      </div>
        </div>
      </Sider>
      <Layout className='site-layout'>
        <Header 
        className='d-flex justify-content-between ps-1 pe-5 align-items-center'
        style={{
            paddingTop:'15px',
          padding: 0,
          backgroundColor: '#EAF1FF',
        }}>
          {React.createElement(
            collapsed ? MenuFoldOutlined : MenuUnfoldOutlined,
            {
              className: "trigger",
              onClick: () => setCollapsed(!collapsed)
            }
          )}
          <div className='d-flex gap-3 align-items-center'>
            <div></div>
            <div className='d-flex gap-3 justify-content-between align-items-center'>
              <div>
              <img className='profimg' src='https://cdn-icons-png.flaticon.com/512/3135/3135715.png' alt=''/>
                            </div>
              <div className='profdetail '>
                <h5 className='name mb-0'>Neeta</h5>
                <p className='name1 mb-0'>Admin@gmail.com</p>
              </div>
            </div>
          </div>
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          <Outlet/>
        </Content>
      </Layout>
    </Layout>
  );
};

export default CommonSidebar;