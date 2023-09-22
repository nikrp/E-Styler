// Packages
import { Button, Header, Grid, Icon } from 'semantic-ui-react';
import { useState } from 'react';

// Components
import SignIn from './components/SignIn';

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
      <div className='ED-body'>
        <div className='sign-up-register-container'>
          <div className='sign-up-register'>
            <Grid style={{ 'border':'2px gray solid', 'border-radius':'10px', 'display':'flex', 'justify-content':'center' }}>
              <Grid.Row horizontal attached='top'>
                <Button.Group style={{ 'marginRight':'30%' }}>
                  <Button fluid color={signIn ? 'blue' : 'white'} onClick={() => setSignIn(true)}>Sign In</Button>
                  <Button.Or/>
                  <Button fluid color={signIn ? 'white' : 'blue'} onClick={() => setSignIn(false)}>Register</Button>
                </Button.Group>
              </Grid.Row>
              <Grid.Row>
                {signIn ? <SignIn signInSegState={signIn}/> : <p>Register</p>}
              </Grid.Row>
            </Grid>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;