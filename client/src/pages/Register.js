import { useState, useEffect } from 'react';
import { Logo, FormRow, Alert } from '../components';
import Wrapper from '../assets/wrappers/RegisterPage';

const initialState = {
  businessName: '',
  contactNumber: '',
  email: '',
  address: '',
  businessType: '',
  password: '',
  rePassword: '',
  isMember: true,
  showAlert: false,
};

const Register = () => {
  const [values, setValues] = useState(initialState);
  // global state and useNavigate
  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember });
  };

  const handleChange = (e) => {
    console.log(e.target);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);
  };
  return (
    <Wrapper className='full-page'>
      <form className='form' onSubmit={onSubmit}>
        <Logo />
        <h3> {values.isMember ? 'Login' : 'Register'} </h3>
        {values.showAlert && <Alert />}
        {/* business name input  */}
        {!values.isMember && (
          <FormRow
            type='text'
            name='name'
            labelText='business Name'
            value={values.businessName}
            handleChange={handleChange}
          />
        )}

        {/* contact number input  */}
        {!values.isMember && (
          <FormRow
            type='text'
            name='contact'
            labelText='Contact Number'
            value={values.contactNumber}
            handleChange={handleChange}
          />
        )}

        {/* email input  */}
        <FormRow
          type='email'
          name='email'
          labelText='Email'
          value={values.email}
          handleChange={handleChange}
        />
        {/* Address  input  */}
        {!values.isMember && (
          <FormRow
            type='text'
            name='address'
            labelText='Address'
            value={values.address}
            handleChange={handleChange}
          />
        )}

        {/* business type */}
        {!values.isMember && (
          <div className='form-row'>
            <label htmlFor='businessType'>Business Type </label>
            <select name='businessType' id='businessType'>
              <option value='Private'>Private</option>
              <option value='government'>Government</option>
            </select>
          </div>
        )}
        {/* password  input  */}
        <FormRow
          type='password'
          name='password'
          labelText='password'
          value={values.password}
          handleChange={handleChange}
        />
        {/* RePassword input  */}
        {!values.isMember && (
          <FormRow
            type='password'
            name='password'
            labelText='confirm password'
            value={values.rePassword}
            handleChange={handleChange}
          />
        )}
        <button className='btn btn-block'>Submit</button>
        <p>
          {values.isMember ? 'Not a member yet ?' : 'Already a member?'}
          <button type='button' onClick={toggleMember} className='member-btn'>
            {values.isMember ? 'Register' : 'Login'}
          </button>
        </p>
      </form>
    </Wrapper>
  );
};

export default Register;
