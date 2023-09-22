// Packages
import { Form, Icon, Message, Popup } from 'semantic-ui-react';
import { useState, useEffect } from 'react';

// Styles

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
        fName: '',
        lName: '',
        email: '',
        username: '',
        password: '',
        appPassword: '',
    });

    const [showPswd, setShowPswd] = useState(false);
    const [showAppPswd, setShowAppPswd] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    }

    const clearForm = () => {
        setFormData({
            fName: '',
            lName: '',
            email: '',
            username: '',
            password: '',
            appPassword: '',
        });
    }

    if (singInSegState === true) {
        clearForm();
    }

    return (
        <div className='ES-register'>
            <Message className='fill-fields-msg' color='purple' content={<span style={{ 'fontWeight':'bold', 'fontSize': fontSize }}>* Denotes a required field. We won't let you go!</span>} icon={<Icon name='info' size='mini'/>}/>
            <Form size='large' inverted>
                <Form.Group widths='equal' style={{ 'width':'103%' }}>
                    <Form.Input type='text' placeholder='Billy' label='First Name *' name='fName' value={formData.fName} onChange={handleInputChange}/>
                    <Form.Input type='text' placeholder='Smith' label='Last Name' name='lName' value={formData.lName} onChange={handleInputChange}/>
                </Form.Group>
                <Form.Input type='text' placeholder='billy@smith.com' label='Email *' name='email' value={formData.email} onChange={handleInputChange} style={{ 'width':'100%' }}/>
                <Form.Input type='text' placeholder='itsBillySmith123' label='Username *' name='username' value={formData.username} onChange={handleInputChange}/>
                <Form.Input type={showPswd ? 'text' : 'password'} label='Password *' name='password' value={formData.password} onChange={handleInputChange} icon={<Icon name={showPswd ? 'eye' : 'eye slash'} link onClick={() => setShowPswd(!showPswd)}/>}/>
                <Popup basic wide position='bottom right' content='See the next section &#8595; on how to create app passwords for your email provider.' trigger={<Form.Input type={showAppPswd ? 'text' : 'password'} label='App Password *' name='appPassword' value={formData.appPassword} onChange={handleInputChange} icon={<Icon name={showAppPswd ? 'eye' : 'eye slash'} link onClick={() => setShowAppPswd(!showAppPswd)}/>}/>}/>
                <Form.Button type='submit' color='violet'>Sign Up</Form.Button>
            </Form>
        </div>
    )
}