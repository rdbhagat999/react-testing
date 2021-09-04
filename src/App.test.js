import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  // const linkElement = screen.getByText('Learn React');
  const linkElement = screen.getByRole('link', {name: 'Learn React'});
  expect(linkElement).toBeInTheDocument();
});

test('button has correct initial color', () => {

  render(<App />);

  const btnElement = screen.getByRole('button', { name: 'Change to blue' });

  expect(btnElement).toBeEnabled();

  expect(btnElement).toHaveStyle({ backgroundColor: 'red' });

});

test('button turns blue when clicked', () => {

  render(<App />);
  
  const btnElement = screen.getByRole('button', { name: 'Change to blue' });

  fireEvent.click(btnElement)

  expect(btnElement).toHaveStyle({ backgroundColor: 'blue' });

  expect(btnElement.textContent).toBe('Change to red');

});

test('button turns disbaled when checked', () => {

  render(<App />);
  
  const btnElement = screen.getByRole('button', { name: 'Change to blue' });
  const checkboxElement = screen.getByRole('checkbox', { name: 'Disable button' });
  
  expect(checkboxElement).not.toBeChecked();

  fireEvent.click(checkboxElement);

  expect(checkboxElement).toBeChecked();
  expect(btnElement).toBeDisabled();

});