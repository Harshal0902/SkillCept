import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Index from '../pages/index';
import { useRouter } from 'next/router';

jest.mock('next/router', () => ({
  useRouter: jest.fn(), 
}));

describe('Index Page', () => {
  it('renders without errors', () => {
    useRouter.mockImplementation(() => ({
      locale: 'en',
    }));

    render(<Index />);
    expect(screen.getByText('SkillCept')).toBeInTheDocument();
    expect(screen.getByText('SkillCept')).toHaveClass('text-5xl');
  });
});
