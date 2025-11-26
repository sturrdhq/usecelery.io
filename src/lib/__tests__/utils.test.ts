import { cn, createOnChangeHandler } from '../utils';

describe('test utils', () => {
  it('merges unrelated classNames', () => {
    const result = cn('bg-red-500', 'text-white');
    expect(result).toBe('bg-red-500 text-white');
  });

  it('merges overlapping classNames', () => {
    const result = cn('bg-red-500', 'text-white', 'bg-blue-500');
    expect(result).toBe('text-white bg-blue-500');
  });

  it('creates onChangeHandler correctly', () => {
    const handler = jest.fn();
    const onChangeHandler = createOnChangeHandler(handler);

    onChangeHandler({ target: { value: 'test' } } as React.ChangeEvent<HTMLInputElement>);
    expect(handler).toHaveBeenCalledWith('test');
  });
});
