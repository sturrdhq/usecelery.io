import { cn } from "../utils";

describe('test utils', () => {
    test('merges unrelated classNames', () => {
        const result = cn('bg-red-500', 'text-white');
        expect(result).toBe('bg-red-500 text-white');
    })

    test('merges overlapping classNames', () => {
        const result = cn('bg-red-500', 'text-white', 'bg-blue-500');
        expect(result).toBe('text-white bg-blue-500');
    })
})