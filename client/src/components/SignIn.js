// Packages
import { Form, Icon, Message, Popup } from 'semantic-ui-react';
import { useState, useEffect } from 'react';
import axios from 'axios';

// Styles

// Backend
const axiosInstance = axios.create({
    baseURL: 'http://192.168.1.51:9000/users', // Set the base URL
    headers: {
      'Content-Type': 'application/json'
    }
  });

// Component
export default function SignIn({ signInSegState }) {
    const [fontSize, setFontSize] = useState('');

    useEffect(() => {
        const element = document.querySelector('.fill-fields-msg');
        const computedStyles = window.getComputedStyle(element);
        const fontSize = computedStyles.getPropertyValue('--normal-text');
        setFontSize(fontSize);
    }, []);

    const [formData, setFormData] = useState({
        identityName: {value: '', error: ''},
        password: {value: '', error: ''},
    });

    const [showPswd, setShowPswd] = useState(false);
    const [formHasError, setFormHasError] = useState(true);

    const handleInputChange = (e) => {
        setFormHasError(false);
        const { name, value } = e.target;
        const newFormData = {
            ...formData,
            [name]: {
                value,
                error: '',
            },
        };
    
        if (newFormData.identityName.value.length === 0) {
            newFormData.identityName.error = 'This field is required!';
            setFormHasError(true);
        } else if (newFormData.identityName.value.length < 5 && !newFormData.identityName.value.includes("@")) {
            newFormData.identityName.error = 'All usernames are greater than 4 characters!';
            setFormHasError(true);
        }
    
        if (newFormData.password.value.length < 4) {
            newFormData.password.error = 'Password must be greater than 4 characters!';
            setFormHasError(true);
        }
    
        // Update the Form Data with the New Form Data
        setFormData(newFormData);
    }
    

    const clearForm = () => {
        setFormData({
            identityName: {value: '', error: ''},
            password: {value: '', error: ''},
        });
        setShowPswd(false);
    }

    const handleSubmit = async () => {
        try {
            const response = await axiosInstance.post(`/login`, formData, {
                headers: {
                    'Content-Type': 'application/json',
                }
            });

            if (response.data.status === 'not clear') {
                
            }
        } catch (e) {
            console.error("Error requesting login:", e);
        }
    }

    if (signInSegState === false) {
        clearForm();
    }

    return (
        <div className="ES-signin">
            <Message className='fill-fields-msg' color='purple' content={<span style={{ 'fontWeight':'bold', 'fontSize': fontSize }}>* Denotes a required field. We won't let you go!</span>} icon={<Icon name='info' size='mini'/>}/>
            <Form size='large' inverted>
                <Form.Input 
                    type='text' 
                    placeholder='BillyBobJoe OR billy@bob.joecom' 
                    label='Username or Email' 
                    name='identityName' 
                    value={formData.identityName.value} 
                    onChange={handleInputChange}
                    style={{ 'width':'100%' }}
                    error={formData.identityName.error ? formData.identityName.error : null}
                />
                <Form.Input 
                    type={showPswd ? 'text' : 'password'} 
                    label='Password' 
                    name='password' 
                    value={formData.password.value} 
                    iconPosition='right' 
                    icon={<Icon name={showPswd ? 'eye' : 'eye slash'} link onClick={() => setShowPswd(!showPswd)}/>}
                    onChange={handleInputChange}
                    error={formData.password.error ? formData.password.error : null}
                />
                {formHasError ? (<Popup 
                wide 
                content='This will not do anything until all your errors have been handled. Thank you!'
                position='left center'
                trigger={<Form.Button type='submit' color='violet' onClick={formHasError ? null : handleSubmit}>Sign In</Form.Button>}/>) : (
                <Form.Button type='submit' color='violet' onClick={formHasError ? null : handleSubmit}>Sign In</Form.Button>)}
            </Form>
        </div>
    )
}