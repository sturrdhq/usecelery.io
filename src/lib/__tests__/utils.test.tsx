import { cn } from "../utils";
import { render, screen } from "@testing-library/react";

describe('test utils', () => {
    test('merges unrelated classNames', () => {
        const result = cn('bg-red-500', 'text-white');
        expect(result).toBe('bg-red-500 text-white');
    })

    test('merges overlapping classNames', () => {
        const result = cn('bg-red-500', 'text-white', 'bg-blue-500');
        expect(result).toBe('text-white bg-blue-500');

        render(<button className = {cn("text-white", "bg-blue-500")}>hello</button>);

        const button = screen.getByRole('button');
        expect(button).toBeInTheDocument();
        expect(button).toHaveTextContent('hello');
        expect(button).toHaveClass('text-white bg-blue-500');
    })
})