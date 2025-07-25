import { render, screen, fireEvent } from '@testing-library/react';
import Home from './page';
import "@testing-library/jest-dom";

// testing the home page
describe('Home', () => {

  // rendering the component before each test
  beforeEach(() => {
    render(<Home />)
  })

  it('renders all images', () => {
    expect(screen.getByAltText('brand-logo')).toBeInTheDocument();
    expect(screen.getByAltText('gym-photo')).toBeInTheDocument();
  }) 

  it('renders all pagraphs', () => {
    expect(screen.getByText(`"A brand new self, reborn"`)).toBeInTheDocument();
    expect(screen.getByText(`© 2025 Gabriel Cezar — All rights reserved.`)).toBeInTheDocument();
  });

  it('renders all headers', () => {
    expect(screen.getByText(/diversus/i)).toBeInTheDocument();
    expect(screen.getByText(`AI-Personalized Fitness & Nutrition Platform`)).toBeInTheDocument();
  });

  it(`renders "Get Started" button and generates the right href`, () => {

    const getStartedButton = screen.getByRole('link', { name: 'Get Started' });

    expect(getStartedButton).toBeInTheDocument();

    // since it is a Link component, we just check if it passes the right href (unit test)
    expect(getStartedButton).toHaveAttribute('href', '/get-started');
  }); 
  
  
})