import React from 'react';
import { screen } from '@testing-library/react';
import { AddShoppingCart } from '@styled-icons/material-outlined/AddShoppingCart';
import { renderWithTheme } from 'utils/tests/helpers';
import Button from '.';

describe('<Button />', () => {
  it('should render the medium size by default', () => {
    const { container } = renderWithTheme(<Button>Design System</Button>);
    expect(screen.getByRole('button', { name: /Design System/i })).toHaveStyle({
      height: '4rem',
      'font-size': '1.4rem',
    });
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render the small size', () => {
    renderWithTheme(<Button size="small">Design System</Button>);
    expect(screen.getByRole('button', { name: /Design System/i })).toHaveStyle({
      height: '3rem',
      'font-size': '1.2rem',
    });
  });

  it('should render the large size', () => {
    renderWithTheme(<Button size="large">Design System</Button>);
    expect(screen.getByRole('button', { name: /Design System/i })).toHaveStyle({
      height: '5rem',
      padding: '0.8rem 4.8rem',
      'font-size': '1.6rem',
    });
  });

  it('should render a fullWidth version', () => {
    renderWithTheme(<Button fullWidth>Design System</Button>);
    expect(screen.getByRole('button', { name: /Design System/i })).toHaveStyle({
      width: '100%',
    });
  });

  it('should render an icon version', () => {
    renderWithTheme(
      <Button icon={<AddShoppingCart data-testid="icon" />}>
        Design System
      </Button>
    );

    expect(screen.getByText(/Design System/i)).toBeInTheDocument();
    expect(screen.getByTestId('icon')).toBeInTheDocument();
  });

  it('should render button as a link', () => {
    renderWithTheme(
      <Button as="a" href="/link">
        Design System
      </Button>
    );

    expect(
      screen.getByRole('link', { name: /Design System/i })
    ).toHaveAttribute('href', '/link');
  });

  it('should render button with loading indicator', () => {
    renderWithTheme(<Button loading>Design System</Button>);

    expect(screen.getByText(/Design System/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Design System/i })).toHaveStyle({
      'background-color': '#FF8084',
      cursor: 'not-allowed',
    });
  });
});
