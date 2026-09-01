import { useState, useCallback } from 'react';

const SESSION_KEY = 'csi_workshop_admin';

function checkSession() {
  try {
    return sessionStorage.getItem(SESSION_KEY) === 'true';
  } catch {
    return false;
  }
}

export function useAdminSession() {
  const [isAdmin, setIsAdmin] = useState(checkSession);

  const login = useCallback((username, password) => {
    const validUser = import.meta.env.VITE_ADMIN_USERNAME;
    const validPass = import.meta.env.VITE_ADMIN_PASSWORD;

    if (!validUser || !validPass) {
      return { success: false, error: 'Admin credentials are not configured.' };
    }

    if (username === validUser && password === validPass) {
      try {
        sessionStorage.setItem(SESSION_KEY, 'true');
      } catch {
        // sessionStorage unavailable — still allow login for this session
      }
      setIsAdmin(true);
      return { success: true };
    }

    return { success: false, error: 'Incorrect username or password.' };
  }, []);

  const logout = useCallback(() => {
    try {
      sessionStorage.removeItem(SESSION_KEY);
    } catch {
      // ignore
    }
    setIsAdmin(false);
  }, []);

  return { isAdmin, login, logout };
}
