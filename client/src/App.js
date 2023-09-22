// Packages
import { Button, Header, Grid, Icon, Divider, List } from 'semantic-ui-react';
import { useState } from 'react';

// Components
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';

// Styles
import './styles/App.css';
import './styles/style.css';

// Component
function App() {
  const [signIn, setSignIn] = useState(true);

  return (
    <div className='ES'>
      <div className='ES-header' style={{ 'marginBottom':'10px' }}>
        <Header style={{ 'fontFamily':'Mali', 'fontSize':'35px', 'color':'#EEA47F' }}>
          <center><Icon name='tint' color='blue' inverted/></center>
          Welcome to E-Styler
          <Header.Subheader style={{ 'color':'yellow', 'font-size':'1.25rem', 'text-decoration':'underline' }}>The perfect place to style your emails.</Header.Subheader>
        </Header>
      </div>
      <div className='ES-body'>
        <div className='sign-up-register-container' style={{ 'marginBottom':'2%' }}>
          <div className='sign-up-register'>
            <Grid style={{ 'border':'2px whitesmoke solid', 'border-radius':'10px', 'display':'flex', 'justify-content':'center', 'background-color':'black' }}>
              <Grid.Row horizontal attached='top'>
                <Button.Group style={{ 'marginRight':'40%' }}>
                  <Button fluid color={signIn ? 'blue' : 'white'} onClick={() => setSignIn(true)} style={{ 'fontSize':'18px' }}>Sign In</Button>
                  <Button.Or/>
                  <Button fluid color={signIn ? 'white' : 'blue'} onClick={() => setSignIn(false)} style={{ 'fontSize':'18px'}}>Register</Button>
                </Button.Group>
              </Grid.Row>
              <Grid.Row>
                {signIn ? <SignIn signInSegState={signIn}/> : <SignUp signInSegState={signIn}/>}
              </Grid.Row>
            </Grid>
          </div>
        </div>

        <Divider horizontal section color='blue'>
          <Header as='h1' style={{ 'fontFamily':'Mali' }}>
            <Icon name='lock' />
            Creating App Passwords
          </Header>
        </Divider>

        <div className='creating-app-passwords-container'>
          <div className='creating-app-password'>
            <p className='information-text' style={{ 'backgroundColor':'royalblue', 'borderRadius':'10px', 'color':'whitesmoke', 'padding':'10px' }}>
              An app password is a 16-digit passcode that gives a less secure app or device permission to access your Google Account. App passwords
              are automatically generated, not specified by the user. This automatically generated password makes it harder for an attacker to guess,
              so it's more secure.<br/><br/>

              To create an app password for you email provider, you can follow one of the links below to your respective provider (make sure you save it!):

              <List animated selection verticalAlign='middle' style={{ 'backgroundColor':'whitesmoke', 'borderRadius':'10px', 'padding':'10px' }}>
                <List.Item avatar href='https://support.google.com/mail/answer/185833?hl=en' target='_blank'>
                  <Icon name='mail'/>
                    <List.Content>
                      <List.Header style={{ 'color':'dodgerblue' }}>Gmail</List.Header>
                    </List.Content>
                </List.Item>
                <List.Item avatar href='https://help.yahoo.com/kb/SLN15241.html' target='_blank'>
                  <Icon name='mail'/>
                    <List.Content>
                      <List.Header style={{ 'color':'dodgerblue' }}>Yahoo!</List.Header>
                    </List.Content>
                </List.Item>
                <List.Item avatar href='https://support.microsoft.com/en-us/account-billing/using-app-passwords-with-apps-that-don-t-support-two-step-verification-5896ed9b-4263-e681-128a-a6f2979a7944' target='_blank'>
                  <Icon name='mail'/>
                    <List.Content>
                      <List.Header style={{ 'color':'dodgerblue' }}>Outlook</List.Header>
                    </List.Content>
                </List.Item>
              </List>
            </p>
          </div>
        </div>

        <Divider horizontal section color='blue'>
          <Header as='h1' style={{ 'fontFamily':'Mali' }}>
            <Icon name='chat' />
            Contact Us
          </Header>
        </Divider>

      </div>
    </div>
  );
}

export default App;