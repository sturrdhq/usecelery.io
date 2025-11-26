import { cn } from "../utils";

describe('test utils', () => {
    test('merges classNames properly', () => {
        const result = cn('bg-red-500', 'text-white');
        expect(result).toBe('bg-red-500 text-white');
    })
})