import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Greeting from './Greeting';

// testing suite
describe('Greeting component', () => {
    test('User is greeted', () => {
        // Arrange
        render(<Greeting />);
    
        // Act
        // not really antyhing for this test
    
        // Assert
        const greetingEl = screen.getByText(/this is a greeting/i, {exact: false});
    
        expect(greetingEl).toBeInTheDocument();
    });

    test('Unchanged text is correct', () => {
        render(<Greeting />);

        const greetingP = screen.getByText(/you have been successfully greeted/i, {exact: false});

        expect(greetingP).toBeInTheDocument();
    });

    test('Changed text is correct', () => {
        // Arrange
        render(<Greeting />);

        // Act
        const buttonEl = screen.getByRole('button');

        userEvent.click(buttonEl);

        // Assert
        const greetingP = screen.getByText(/this text has been changed/i, {exact: false});
        const greetingPGone = screen.queryByText(/you have been successfully greeted/i, {exact: false});

        expect(greetingP).toBeInTheDocument();
        expect(greetingPGone).toBeNull();
    });
});
