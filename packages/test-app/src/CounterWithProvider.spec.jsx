import React from 'react';
import {render, screen, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom';
import Counter from './CounterWithProvider'; // Adjust the import path as needed

describe('CounterWithProvider', () => {
    test.failing('uses provider from jotai', () => {
        render(<Counter/>);
        screen.logTestingPlaygroundURL();
        fireEvent.click(screen.getByRole('button', {name: /increment inner \(workspace dependency\)/i}));
        fireEvent.click(screen.getByRole('button', {name: /increment inner \(workspace dependency\)/i}));
        fireEvent.click(screen.getByRole('button', {name: /increment inner \(direct dependency\)/i}));
        fireEvent.click(screen.getByRole('button', {name: /increment outer/i}));
        fireEvent.click(screen.getByRole('button', {name: /increment outer/i}));
        fireEvent.click(screen.getByRole('button', {name: /increment outer/i}));
        // Expected
        const headings = screen.getAllByRole('heading')
        expect(headings[2]).toHaveTextContent('Counter inner (direct dependency): 1');
        expect(headings[1]).toHaveTextContent('Counter inner (workspace dependency): 2'); // fails. Actual: 5
        expect(headings[0]).toHaveTextContent('Counter outer: 3'); // fails. Actual: 5
        // Actual: workspace and outer are set to 5 because there are two jotai modules loaded
    });
});
