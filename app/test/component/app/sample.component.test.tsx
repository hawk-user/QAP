import { render, screen } from '@testing-library/react';
import { WelcomeToQAP } from '@material/welcome.to.qap';

describe('Welcome Component', () => {
  	it('renders the welcome message', () => {
    	render(<WelcomeToQAP />);
    	expect(screen.getByText('Bienvenue sur la page QAP')).toBeInTheDocument();
  	});
});