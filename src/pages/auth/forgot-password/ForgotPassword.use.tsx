import React, { useEffect, useState } from 'react';

export default function useForgotPassword() {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
  }, []);

  return { isLoading };
}
