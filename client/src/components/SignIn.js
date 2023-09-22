// Packages
import { Button, Form, Icon } from 'semantic-ui-react';
import { useState } from 'react';

// Styles

// Component
export default function SignIn({ signInSegState }) {
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
            <Form size='large'>
                <Form.Input 
                    type='text' 
                    placeholder='BillyBobJoe OR billy@bob.joecom' 
                    label='Username or Email' 
                    name='identityName' 
                    value={formData.identityName} 
                    onChange={handleInputChange}
                    style={{ 'width':'500px' }}
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