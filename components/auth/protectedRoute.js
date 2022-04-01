import { useRouter } from 'next/router';
import { onAuthStateChanged } from '/lib/auth/auth.services';

export default function ProtectedRoute( {children, redirectRoute} ) {
  
  const router = useRouter();
  let toRender = children;

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