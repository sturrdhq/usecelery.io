import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function createOnChangeHandler(onChange: (value: string) => void) {
  return (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };
}