import { useState, useEffect } from 'react';
import { Logo, FormRow, Alert } from '../components';
import Wrapper from '../assets/wrappers/RegisterPage';
import { useAppContext } from '../context/appcontext';

const initialState = {
  businessName: '',
  contactNumber: '',
  email: '',
  address: '',
  businessType: '',
  password: '',
  rePassword: '',
  isMember: true,
};

const Register = () => {
  const [values, setValues] = useState(initialState);
  // global state and useNavigate
  const { isLoading, showAlert, displayAlert,alertText } = useAppContext();

  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember });
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const {
      businessName,
      contactNumber,
      email,
      address,
      businessType,
      password,
      rePassword,
      isMember,
    } = values;
    if (
      !email ||
      !password ||
      (!isMember &&
        (!businessName || !contactNumber || !address || !rePassword))
    ) {
      displayAlert();
      return;
    }
    if(password !== rePassword)
    {
      //alertText='your password is different'
       displayAlert();
    }
    console.log(values);
  };

  return (
    <Wrapper className='full-page'>
      <form className='form' onSubmit={onSubmit}>
        <Logo />
        <h3> {values.isMember ? 'Login' : 'Register'} </h3>
        {showAlert && <Alert />}
        {/* business name input  */}
        {!values.isMember && (
          <FormRow
            type='text'
            name='businessName'
            labelText='business Name'
            value={values.businessName}
            handleChange={handleChange}
          />
        )}

        {/* contact number input  */}
        {!values.isMember && (
          <FormRow
            type='text'
            name='contactNumber'
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
            name='rePassword'
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
