import React, { useEffect, useState } from 'react';

export default function useLogin() {
  const [isLoading, setIsLoading] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    setIsLoading(true);
  }, []);

  return { isLoading, count, setCount };
}
