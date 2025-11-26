import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

type OnChangeValue = (_value: string) => void;

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function createOnChangeHandler(onChange: OnChangeValue) {
  return (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };
}