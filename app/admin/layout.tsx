'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [checking, setChecking] = useState(true);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  useEffect(() => {
    fetch('/api/admin/auth')
      .then((res) => setIsAuthenticated(res.ok))
      .catch(() => setIsAuthenticated(false))
      .finally(() => setChecking(false));
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    const res = await fetch('/api/admin/auth', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password }),
    });
    if (res.ok) {
      setIsAuthenticated(true);
      router.refresh();
    } else {
      setError('Incorrect password');
    }
  };

  const handleLogout = async () => {
    await fetch('/api/admin/auth', { method: 'DELETE' });
    setIsAuthenticated(false);
    router.push('/admin');
  };

  if (checking) {
    return null;
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-plum-50 to-cream-100">
        <div className="bg-white p-8 rounded-2xl shadow-elevated max-w-md w-full mx-4">
          <h1 className="text-2xl font-bold text-charcoal-900 mb-6 text-center">Admin Login</h1>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-charcoal-500 mb-2">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-cream-300 focus:border-plum-500 focus:ring-2 focus:ring-plum-200 outline-none transition-all"
                placeholder="Enter admin password"
                required
              />
            </div>
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <button
              type="submit"
              className="w-full bg-gradient-button text-white px-6 py-3 rounded-xl font-semibold shadow-glow-plum/30 hover:shadow-glow-plum hover:-translate-y-0.5 transition-all duration-300"
            >
              Login
            </button>
          </form>
         </div>
      </div>
    );
  }

  return (
    <div>
      <div className="fixed top-4 right-4 z-50">
        <button
          onClick={handleLogout}
          className="bg-white border border-cream-300 text-charcoal-600 px-4 py-2 rounded-xl text-sm font-medium hover:bg-cream-50 transition-colors shadow-soft"
        >
          Logout
        </button>
      </div>
      {children}
    </div>
  );
}
