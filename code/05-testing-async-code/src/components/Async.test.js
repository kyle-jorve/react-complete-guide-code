import { render, screen } from '@testing-library/react';
import Async from './Async';

describe('Async component', () => {
  test('renders posts', async () => {
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: async () => [{
        id: 'p1',
        title: 'First Post'
      }]
    });
    render(<Async />);

    const lis = await screen.findAllByRole('listitem');

    expect(lis).not.toHaveLength(0);
  });
})