// Packages
import { Form, Icon, Message, Popup } from 'semantic-ui-react';
import { useState, useEffect } from 'react';
import axios from 'axios'

// Styles

// Backend
const axiosInstance = axios.create({
    baseURL: 'http://192.168.1.51:9000/users', // Set the base URL
    headers: {
      'Content-Type': 'application/json'
    }
  });

// Component
export default function SignUp({ singInSegState }) {
    const [fontSize, setFontSize] = useState('');

    useEffect(() => {
        const element = document.querySelector('.fill-fields-msg');
        const computedStyles = window.getComputedStyle(element);
        const fontSize = computedStyles.getPropertyValue('--normal-text');
        setFontSize(fontSize);
    }, []);

    const [formData, setFormData] = useState({
        fName: {value: '', error: ''},
        lName: {value: '', error: ''},
        email: {value: '', error: ''},
        username: {value: '', error: ''},
        password: {value: '', error: ''},
        appPassword: {value: '', error: ''},
    });

    const [showPswd, setShowPswd] = useState(false);
    const [showAppPswd, setShowAppPswd] = useState(false);
    const [formHasError, setFormHasError] = useState(true);

    const handleInputChange = (e) => {
        setFormHasError(false);
        // Change the Values
        const { name, value } = e.target;
        const newFormData = {
            ...formData,
            [name]: { ...formData[name], value: value },
        };
    
        // Check Each Input
        if (newFormData.fName.value.length === 0) { // First Name Input
            newFormData.fName.error = 'This field is required!'
            setFormHasError(true);
        } else {
            newFormData.fName.error = ''
        }
    
        if (newFormData.email.value.length === 0) { // Email Input - NOTE: Need to add server request for checking dupe emails
            newFormData.email.error = 'This field is required!'
            setFormHasError(true);
        } else if (!newFormData.email.value.includes("@")) {
            newFormData.email.error = 'Make sure you have an @ somewhere in your email!'
            setFormHasError(true);
        } else if (newFormData.email.value.split("@")[1].trim() === '' || newFormData.email.value.split("@")[0].trim() === '') {
            newFormData.email.error = 'Make sure you have something before and after your @ symbol!'
            setFormHasError(true);
        } else {
            newFormData.email.error = ''
        }

        if (newFormData.username.value.length < 5) { // Username Input - NOTE: Need to add server request for checking dupe usernames
            newFormData.username.error = 'Username must be greater than 4 characters!'
            setFormHasError(true);
        } else {
            newFormData.username.error = ''
        }

        if (newFormData.password.value.length < 5) {
            newFormData.password.error = 'Password must be greater than 4 characters!'
        } else {
            newFormData.password.error = ''
        }

        if (newFormData.appPassword.value.length === 0) {
            newFormData.appPassword.error = 'An App Password is required!'
        } else {
            newFormData.appPassword.error = ''
        }
    
        // Update the entire formData object
        setFormData(newFormData);
    }

    const handleSubmit = async () => {
        try {
            const response = await axiosInstance.post('/signup', formData, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            const resStatus = response.data.status;
            if (resStatus !== 'clear') {
                if (resStatus === 'dupeEmail') {
                    setFormData({
                        ...formData,
                        email: {...formData.email, error: 'There is already an account registered with this email!'}
                    });
                } else {
                    setFormData({
                        ...formData,
                        email: {...formData.email, error: ''}
                    });
                }
                if (resStatus === 'dupeUsername') {
                    setFormData({
                        ...formData,
                        username: {...formData.username, error: 'This username is taken!'}
                    });
                } else {
                    setFormData({
                        ...formData,
                        username: {...formData.username, error: ''}
                    });
                }
            } else {
                // Set Rendered Content on Home Page to User Dashboard here. Collect all user data first.
            }
        } catch (e) {
            console.log(e);
        }
    }

    const clearForm = () => {
        setFormData({
            fName: {value: '', error: ''},
            lName: {value: '', error: ''},
            email: {value: '', error: ''},
            username: {value: '', error: ''},
            password: {value: '', error: ''},
            appPassword: {value: '', error: ''},
        });
    }

    if (singInSegState === true) {
        clearForm();
    }

    return (
        <div className='ES-register'>
            <Message className='fill-fields-msg' color='purple' content={<span style={{ 'fontWeight':'bold', 'fontSize': fontSize }}>* Denotes a required field. We won't let you go!</span>} icon={<Icon name='info' size='mini'/>}/>
            <Form size='large' style={{ 'width': formHasError ? '80%' : '90%', 'marginLeft': formHasError ? '10%' : '5%' }}>
                <Form.Group widths='equal'>
                    <Form.Input type='text' placeholder='Billy' label='First Name *' name='fName' value={formData.fName.value} onChange={handleInputChange} error={formData.fName.error ? { content: formData.fName.error, pointing: 'above' } : null}/>
                    <Form.Input type='text' placeholder='Smith' label='Last Name' name='lName' value={formData.lName.value} onChange={handleInputChange} error={formData.lName.error ? formData.lName.error : null}/>
                </Form.Group>
                <Form.Input type='text' placeholder='billy@smith.com' label='Email *' name='email' value={formData.email.value} onChange={handleInputChange} style={{ 'width':'100%' }} error={formData.email.error ? formData.email.error : null}/>
                <Form.Input type='text' placeholder='itsBillySmith123' label='Username *' name='username' value={formData.username.value} onChange={handleInputChange} error={formData.username.error ? formData.username.error : null}/>
                <Form.Input type={showPswd ? 'text' : 'password'} label='Password *' name='password' value={formData.password.value} onChange={handleInputChange} icon={<Icon name={showPswd ? 'eye' : 'eye slash'} link onClick={() => setShowPswd(!showPswd)}/>} error={formData.password.error ? formData.password.error : null}/>
                <Popup basic wide position='bottom right' content='See the next section &#8595; on how to create app passwords for your email provider. YOU DO NOT CHOOSE ONE BY YOURSELF!' trigger={<Form.Input type={showAppPswd ? 'text' : 'password'} label='App Password *' name='appPassword' value={formData.appPassword.value} onChange={handleInputChange} icon={<Icon name={showAppPswd ? 'eye' : 'eye slash'} link onClick={() => setShowAppPswd(!showAppPswd)}/>} error={formData.appPassword.error ? formData.appPassword.error : null}/>}/>
                {formHasError ? (<Popup 
                wide 
                content='This will not do anything until all your errors have been handled. Thank you!'
                position='left center'
                trigger={<Form.Button type='submit' color='violet' onClick={formHasError ? null : handleSubmit}>Sign Up</Form.Button>}/>) : (
                <Form.Button type='submit' color='violet' onClick={formHasError ? null : handleSubmit}>Sign Up</Form.Button>)}
            </Form>
        </div>
    )
}