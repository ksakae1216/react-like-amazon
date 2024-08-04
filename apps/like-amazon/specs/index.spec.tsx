
import { render } from '@testing-library/react';
import Index from '../src/app/page';

describe('Index', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Index />);
    expect(baseElement).toBeTruthy();
  });

  it('should contain the Amazon logo', () => {
    const { getByText } = render(<Index />);
    const logoElement = getByText('Amazon');
    expect(logoElement).toBeTruthy();
  });
});
