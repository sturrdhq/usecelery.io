import { renderHook, act } from '@testing-library/react';
import { useWaitlist } from '../use-waitlist';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BASE_URL } from '@/lib/constants';

global.fetch = jest.fn();

const createWrapper = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });
  
  const Wrapper = ({ children }: { children: React.ReactNode }) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
  
  return Wrapper;
};

describe('useWaitlist', () => {
  it('initializes with empty email', () => {
    const { result } = renderHook(() => useWaitlist(), { 
      wrapper: createWrapper() 
    });
    
    expect(result.current.email).toBe('');
  });

  it('updates email', () => {
    const { result } = renderHook(() => useWaitlist(), { 
      wrapper: createWrapper() 
    });
    
    act(() => {
      result.current.onChangeEmail({
        target: {
          value: 'test@example.com',
        },
      } as React.ChangeEvent<HTMLInputElement>);
    });
    
    expect(result.current.email).toBe('test@example.com');
  });

  it('subscribes successfully', async () => {
    (global.fetch as jest.Mock).mockResolvedValueOnce({
      json: async () => ({ success: true }),
    });

    const { result } = renderHook(() => useWaitlist(), { wrapper: createWrapper() });

    act(() => {
      result.current.onChangeEmail({ target: { value: 'test@example.com' } } as React.ChangeEvent<HTMLInputElement>);
    });

    await act(async () => {
      await result.current.subscribe();
    });

    expect(global.fetch).toHaveBeenCalledWith(
      `${BASE_URL}/waitlist/subscribe?emailtest@example.com`,
      expect.objectContaining({
        method: 'POST',
      }),
    );
    expect(result.current.isSuccess).toBe(true);
  });

  it('handles subscription error', async () => {
    (global.fetch as jest.Mock).mockRejectedValue(new Error('Network error'));

    const { result } = renderHook(() => useWaitlist(), { wrapper: createWrapper() });

    act(() => {
      result.current.onChangeEmail({ target: { value: 'test@example.com' } } as React.ChangeEvent<HTMLInputElement>);
    });

    await act(async () => {
      const res = await result.current.subscribe();
      expect(res.error).toBe('Network error');
    });

    expect(result.current.isSuccess).toBe(false);
  });
});
