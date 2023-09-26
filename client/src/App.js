// Packages
import { Button, Header, Grid, Icon, Divider, List } from 'semantic-ui-react';
import { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Switch } from '@headlessui/react'

// Components
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';

// Styles
import './styles/App.css';
import './styles/style.css';
import './dist/output.css';

// Functions
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

// Component
function App() {
  const [signIn, setSignIn] = useState(true);
  const [agreed, setAgreed] = useState(false);

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
                <Button.Group style={{ 'marginRight':'31%' }}>
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
              <br/>
              We encrypt any app password so they will be very secure.
            </p>
          </div>
        </div> 

        <Divider horizontal section color='blue'>
          <Header as='h1' style={{ 'fontFamily':'Mali' }}>
            <Icon name='chat' />
            Contact Us
          </Header>
        </Divider>

        <div className='contact-us-container'>
          <div className='contact-us'>
          <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8 br:10px">
      <div
        className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
        aria-hidden="true"
      >
        <div
          className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      <div className="mx-auto max-w-2xl text-center">
        <p className="mt-2 text-lg leading-8 text-gray-600">
          We will help you with anything you need.
        </p>
      </div>
      <form action="#" method="POST" className="mx-auto mt-16 max-w-xl sm:mt-20">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900">
              First name
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="first-name"
                id="first-name"
                autoComplete="given-name"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-gray-900">
              Last name
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="last-name"
                id="last-name"
                autoComplete="family-name"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="company" className="block text-sm font-semibold leading-6 text-gray-900">
              Company
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="company"
                id="company"
                autoComplete="organization"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
              Email
            </label>
            <div className="mt-2.5">
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="phone-number" className="block text-sm font-semibold leading-6 text-gray-900">
              Phone number
            </label>
            <div className="relative mt-2.5">
              <div className="absolute inset-y-0 left-0 flex items-center">
                <label htmlFor="country" className="sr-only">
                  Country
                </label>
                <select
                  id="country"
                  name="country"
                  className="h-full rounded-md border-0 bg-transparent bg-none py-0 pl-4 pr-9 text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                >
                  <option>US</option>
                  <option>CA</option>
                  <option>EU</option>
                </select>
                <ChevronDownIcon
                  className="pointer-events-none absolute right-3 top-0 h-full w-5 text-gray-400"
                  aria-hidden="true"
                />
              </div>
              <input
                type="tel"
                name="phone-number"
                id="phone-number"
                autoComplete="tel"
                className="block w-full rounded-md border-0 px-3.5 py-2 pl-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
              Message
            </label>
            <div className="mt-2.5">
              <textarea
                name="message"
                id="message"
                rows={4}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                defaultValue={''}
              />
            </div>
          </div>
          <Switch.Group as="div" className="flex gap-x-4 sm:col-span-2">
            <div className="flex h-6 items-center">
              <Switch
                checked={agreed}
                onChange={setAgreed}
                className={classNames(
                  agreed ? 'bg-indigo-600' : 'bg-gray-200',
                  'flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                )}
              >
                <span className="sr-only">Agree to policies</span>
                <span
                  aria-hidden="true"
                  className={classNames(
                    agreed ? 'translate-x-3.5' : 'translate-x-0',
                    'h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out'
                  )}
                />
              </Switch>
            </div>
            <Switch.Label className="text-sm leading-6 text-gray-600">
              By selecting this, you agree to our{' '}
              <a href="#" className="font-semibold text-indigo-600">
                privacy&nbsp;policy
              </a>
              .
            </Switch.Label>
          </Switch.Group>
        </div>
        <div className="mt-10">
          <button
            type="submit"
            className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Let's talk
          </button>
        </div>
      </form>
    </div>
          </div>
          </div>
        </div>
      </div>
  );
}

export default App;