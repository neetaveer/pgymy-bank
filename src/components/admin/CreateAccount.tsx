import React from 'react';
import { Button, Checkbox, Form, Input, InputNumber, Select ,  Upload, Radio, DatePicker} from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import "../admin-styles/createAccount.css"

const normFile = (e: any) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};

const { TextArea } = Input;
const { Option } = Select;

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};

const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

const CreateAccount: React.FC = () => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
  };

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select style={{ width: 70 }} defaultValue="+91">
        <Option value="+91">+91</Option>
        {/* <Option value="87">+87</Option> */}
      </Select>
    </Form.Item>
  );

  const suffixSelector = (
    <Form.Item name="suffix" noStyle>
      <Select style={{ width: 70 }} defaultValue="Rs.">
        <Option value="Rs.">₹</Option>
        {/* <Option value="CNY">¥</Option> */}
      </Select>
    </Form.Item>
  );

  const validateAadhar = (_, value) => {
    if (!value || /^\d{12}$/.test(value)) {
      return Promise.resolve();
    }
    return Promise.reject(new Error('Please enter a valid 12-digit Aadhar number'));
  };

  return (
    <Form
      {...formItemLayout}
      form={form}
      name="register"
      onFinish={onFinish}
      initialValues={{ residence: ['zhejiang', 'hangzhou', 'xihu'] }}
      style={{ maxWidth: 600 }}
      scrollToFirstError
    >
      <h1 className='heading'>Create New Account</h1>

      {/* Add First Name, Middle Name, and Last Name fields */}
      <Form.Item
        name="firstName"
        label="First Name"
        rules={[
          {
            required: true,
            message: 'Please input your first name!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="middleName"
        label="Middle Name"
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="lastName"
        label="Last Name"
        rules={[
          {
            required: true,
            message: 'Please input your last name!',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="email"
        label="E-mail"
        rules={[
          {
            type: 'email',
            message: 'The input is not a valid E-mail!',
          },
          {
            required: true,
            message: 'Please input your E-mail!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
      name='gender'
       label="Gender"
       rules={[
        {
          required: true,
          message: 'Please select gender',
        },
      ]}>
          <Radio.Group>
            <Radio value="female"> Female </Radio>
            <Radio value="male"> Male </Radio>
            <Radio value="other"> Other </Radio>

          </Radio.Group>
        </Form.Item>

        <Form.Item
        name="aadhar"
        label="Aadhar Card Number"
        rules={[
          {
            required: true,
            message: 'Please enter your Aadhar card number',
          },
          {
            validator: validateAadhar,
          },
        ]}
      >
        <Input placeholder="Enter Aadhar card number" />
      </Form.Item>

        <Form.Item 
        name="dob"
        label="Date Of Birth"
        rules={[
          {
            required: true,
            message: 'Please select Date Of Birth',
          },
        ]}
        >
          <DatePicker />
        </Form.Item>

      <Form.Item
        name="phone"
        label="Phone Number"
        rules={[{ required: true, message: 'Please input your phone number!' }]}
      >
        <Input addonBefore={prefixSelector} style={{ width: '100%' }} />
      </Form.Item>
      {/* Add Account Type, District, Taluka, Village, Country, State, Pincode, and Address fields */}
      <Form.Item
        name="accountType"
        label="Account Type"
        rules={[
          {
            required: true,
            message: 'Please select account type!',
          },
        ]}
      >
        <Select placeholder="Select account type">
          <Option value="savings">Savings</Option>
          <Option value="current">Current</Option>
        </Select>
      </Form.Item>

      <Form.Item
        name="deposit"
        label="deposit"
        rules={[{ required: true, message: 'Please input donation amount!' }]}
      >
        <InputNumber addonAfter={suffixSelector} style={{ width: '100%' }} />
      </Form.Item>

      <Form.Item 
      name="upload"
      label="Upload Passport Photo"
       valuePropName="fileList" 
       getValueFromEvent={normFile}
       rules={[
        {
          required: true,
          message: 'Please upload passport photo.',
        },
      ]}
       >
          <Upload action="/upload.do" listType="picture-card">
            <div>
              <PlusOutlined />
              <div style={{ marginTop: 8 }}>Upload</div>
            </div>
          </Upload>
        </Form.Item>

      {/* Add more fields here for District, Taluka, Village, Country, State, Pincode, and Address */}
      {/* ... */}
      

      <Form.Item
        name="country"
        label="Country"
        
        rules={[
          {
            required: true,
            message: 'please enter Country name',
          },
        ]}
      >
        <Input  defaultValue="India" />
      </Form.Item>
      <Form.Item
        name="district"
        label="District"
        rules={[
          {
            required: true,
            message: 'please enter District name',
          },
        ]}
      >
        <Input defaultValue="Parbhani" />
      </Form.Item>
      <Form.Item
        name="taluka"
        label="Taluka"
        rules={[
          {
            required: true,
            message: 'please enter Taluka name',
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="village"
        label="Village"
        rules={[
          {
            required: true,
            message: 'please enter Village name',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="address"
        label="Address"
        rules={[
          {
            required: true,
            message: 'please enter your address.',
          },
        ]}
      >
        {/* <Input  /> */}
        <TextArea rows={4} />
      </Form.Item>

      <Form.Item
        name="pincode"
        label="Pincode"
        rules={[
          { required: true, message: 'Please input your pincode!' },
          { pattern: /^\d{6}$/, message: 'Pincode must be 6 digits long.' }
        ]}
      >
        <Input />
      </Form.Item>




      {/* Rest of the form fields */}
      {/* ... */}
      <Form.Item
        name="nominee"
        label="Nominees"
        rules={[
          {
            required: true,
            message: 'Please enter nominee!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="agreement"
        valuePropName="checked"
        rules={[
          {
            validator: (_, value) =>
              value ? Promise.resolve() : Promise.reject(new Error('You must accept the agreement')),
          },
        ]}
        {...tailFormItemLayout}
      >
        <Checkbox>
          I have read the <a href="/">agreement</a>
        </Checkbox>
      </Form.Item>
      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit" className='form-btn'>
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default CreateAccount;
