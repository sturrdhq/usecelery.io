import { BASE_URL } from '@/lib/constants';
import { ApiResponse } from '@/lib/types';
import { createOnChangeHandler } from '@/lib/utils';
import { useCallback, useState } from 'react';
import { useMutation } from 'react-query';

export function useWaitlist() {
  const [email, setEmail] = useState('');
  const onChangeEmail = createOnChangeHandler(setEmail);

  const subscribeToWaitListApi = useCallback(async () => {
    const res = await fetch(`${BASE_URL}/waitlist/subscribe?email${email}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    return await res.json();
  }, [email]);

  const { mutateAsync, isLoading, isError, isSuccess } = useMutation<ApiResponse>({
    mutationFn: subscribeToWaitListApi,
    mutationKey: '',
  });

  const subscribe = async () => {
    try {
      return await mutateAsync();
    } catch {
      return { error: 'Network error', message: 'Failed to subscribe' };
    }
  };

  return {
    email,
    onChangeEmail,
    subscribe,
    isLoading,
    isError,
    isSuccess,
  };
}
