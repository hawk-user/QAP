import { render, screen } from '@testing-library/react';

const WelcomeToQAP: React.FC = () => {
	return  <>Bienvenue sur la page QAP</>;
}

describe('Welcome Component', () => {
  	it('renders the welcome message', () => {
    	render(<WelcomeToQAP />);
    	expect(screen.getByText('Bienvenue sur la page QAP')).toBeInTheDocument();
  	});
});