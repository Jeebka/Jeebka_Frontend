import { useRouter } from 'next/router';
import { useState } from 'react';
import { onAuthStateChanged } from '../../lib/auth/auth.services';

export default function ProtectedRoute( {child, redirectRoute} ) {
  const router = useRouter();
  let toRender = child;

  const authStateChangeCallback = (user) => {
    if (!user) {
      router.push(redirectRoute);
      toRender = null;
    }
  }

  onAuthStateChanged(authStateChangeCallback);
  
  return (
    <>
      {toRender}
    </>
  );
};