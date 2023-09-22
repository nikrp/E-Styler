// Packages
import { Form, Icon, Message } from 'semantic-ui-react';
import { useState, useEffect } from 'react';

// Styles

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
        identityName: '',
        password: '',
    });

    const [showPswd, setShowPswd] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    }

    const clearForm = () => {
        setFormData({
            identityName: '',
            password: '',
        });
        setShowPswd(false);
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
                    value={formData.identityName} 
                    onChange={handleInputChange}
                    style={{ 'width':'100%' }}
                />
                <Form.Input 
                    type={showPswd ? 'text' : 'password'} 
                    label='Password' 
                    name='password' 
                    value={formData.password} 
                    iconPosition='right' 
                    icon={<Icon name={showPswd ? 'eye' : 'eye slash'} link onClick={() => setShowPswd(!showPswd)}/>}
                    onChange={handleInputChange}
                />
                <Form.Button type='submit' color='violet'>Sign In</Form.Button>
            </Form>
        </div>
    )
}