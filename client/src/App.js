import { Button, Header, Grid, Icon, Divider, List } from 'semantic-ui-react';
import { useState } from 'react';
import { Switch } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Switcher from './Switcher';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

function App() {
  const [signIn, setSignIn] = useState(true);
  const [agreed, setAgreed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setAgreed(false);
  };

  return (
    <div className='min-h-screen min-w-screen bg-slate-400 m-0'>
      <div className="mb-5 bg-royalblue p-6 sm:p-12">
        <div id="sticky-element" class="sticky w-11 h-12 ml-8 top-3 right-0 justify-end z-10 p-1 pt-1.5 pl-1 mr-4 mt-4 hover:cursor-pointer bg-sky-500 rounded-full">
          <Switcher />
        </div>
        <p className="font-Mali text-3xl sm:text-6xl text-orange-500 z-10 font-bold mb-3">
          Welcome to E-Styler<br/>
          <span className="text-yellow-500 text-xl sm:text-2xl underline">
          The perfect place to style your emails.
          </span>
        </p>
      </div>

          <div className='sign-up-register m-0'>
            <Grid className='border-2 rounded-10 flex justify-center'>
              <Grid.Row className='sm:mr-31 mx-auto'>
                <Button.Group>
                  <Button
                    fluid
                    color={signIn ? 'blue' : 'white'}
                    onClick={() => setSignIn(true)}
                    className='text-18'
                  >
                    Sign In
                  </Button>
                  <Button.Or />
                  <Button
                    fluid
                    color={signIn ? 'white' : 'blue'}
                    onClick={() => setSignIn(false)}
                    className='text-18'
                  >
                    Register
                  </Button>
                </Button.Group>
              </Grid.Row>
              <Grid.Row>
                {signIn ? <SignIn signInSegState={signIn} /> : <SignUp signInSegState={signIn} />}
              </Grid.Row>
            </Grid>
          </div>

        <Divider horizontal section color='blue'>
          <Header as='h1' className='font-Mali'>
            <Icon name='lock' />
            Creating App Passwords
          </Header>
        </Divider>

          <div className='creating-app-password bg-royalblue rounded-xl'>
            <p className='information-text bg-royalblue rounded-10 text-whitesmoke p-3 sm:p-10'>
              An app password is a 16-digit passcode that gives a less secure app or device permission to access your Google Account. App passwords are automatically generated, not specified by the user. This automatically generated password makes it harder for an attacker to guess, so it's more secure.<br /><br />

              To create an app password for your email provider, you can follow one of the links below to your respective provider (make sure you save it!):

              <List animated selection verticalAlign='middle' className='bg-whitesmoke rounded-10 p-3 sm:p-10'>
                <List.Item avatar href='https://support.google.com/mail/answer/185833?hl=en' target='_blank'>
                  <Icon name='mail' />
                  <List.Content>
                    <List.Header className='text-dodgerblue'>Gmail</List.Header>
                  </List.Content>
                </List.Item>
                <List.Item avatar href='https://help.yahoo.com/kb/SLN15241.html' target='_blank'>
                  <Icon name='mail' />
                  <List.Content>
                    <List.Header className='text-dodgerblue'>Yahoo!</List.Header>
                  </List.Content>
                </List.Item>
                <List.Item avatar href='https://support.microsoft.com/en-us/account-billing/using-app-passwords-with-apps-that-don-t-support-two-step-verification-5896ed9b-4263-e681-128a-a6f2979a7944' target='_blank'>
                  <Icon name='mail' />
                  <List.Content>
                    <List.Header className='text-dodgerblue'>Outlook</List.Header>
                  </List.Content>
                </List.Item>
              </List>
              <br />
              We encrypt any app password so they will be very secure.
            </p>
          </div>

        <Divider horizontal section color='blue'>
          <Header as='h1' className='font-Mali'>
            <Icon name='chat' />
            Contact Us
          </Header>
        </Divider>
      </div>
  );
}

export default App;
