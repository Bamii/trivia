import React from 'react';
import { Provider } from 'react-redux';
import userEvent from "@testing-library/user-event";
import '@testing-library/jest-dom'
import App from './App'
import { render, fireEvent, screen, waitFor, act, cleanup } from './tests-config/test-utils';
import { store } from './app/store';
import { server } from './tests-config/mocks/server.js'

// API mocking
beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

// setups and cleanup
// beforeEach(async () => {
//   render(<App />);
  
//   await waitFor(() => screen.getByText(/let's trivia/i)) 
// })
afterEach(cleanup)

test('renders homepage', async () => {
  render(<App />);
  await waitFor(() => screen.getByText(/let's trivia/i)) 
  expect(screen.getByText(/let's trivia/i)).toBeInTheDocument();
});

test('fetches & receives a user after clicking the fetch user button', async () => {
  render(<App />)

  await act(async () => {

    // const { location } = render(<App />);
    // location.push('/game')
    // await waitFor(() => screen.getByText(/please wait a second, we're loading your trivia questions/i))
  
    fireEvent.click(screen.getByText(/start new game/i))
    expect(screen.getByText(/please wait a second, we're loading your trivia questions/i)).toBeInTheDocument();
    // expect(screen.getByText(/question 1 of 10/i)).toBeInTheDocument();
  })
}) 
 






const renderWithRouter = async (ui, {route = '/'} = {}) => {
  window.history.pushState({}, 'Test page', route)
  const you = render(ui, {wrapper: BrowserRouter});

  await waitFor(() => screen.getByText(/let's trivia/i)) 

  return {
    user: userEvent.setup(),
    ...you
  }
}