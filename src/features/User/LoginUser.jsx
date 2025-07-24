import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import bgPizza from '../../assets/bg-pizza.jpg';
import { useDispatch } from 'react-redux';
import { setUser } from './userSlice';

export default function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const res = await fetch('api/users/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const { error } = await res.json();
        throw new Error(error || 'Login failed');
      }

      const userData = await res.json();
      dispatch(setUser(userData.user));
      console.log('userData:', userData);
      navigate('/Menu');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div
      className="min-h-screen w-full bg-cover bg-center bg-no-repeat px-4 py-16 text-center font-serif"
      style={{
        backgroundImage: `url(${bgPizza})`,
        backgroundColor: 'rgba(255,255,255,0.85)',
        backgroundBlendMode: 'lighten',
      }}
    >
      <form onSubmit={handleLogin} className="mx-auto max-w-md space-y-4 py-10">
        <h2 className="mb-4 text-2xl font-bold">Login</h2>
        {error && <p className="text-red-500">{error}</p>}

        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          required
          className="w-full rounded-xl border-2 border-orange-400 px-3 py-2 text-sm focus:border-orange-600 focus:outline-none"
        />
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
          required
          className="w-full rounded-xl border-2 border-orange-400 px-3 py-2 text-sm focus:border-orange-600 focus:outline-none"
        />
        {error && <p className="text-sm text-red-500">{error}</p>}
        <button
          className="mr-4 min-w-[120px] rounded-full bg-orange-400 px-4 py-3 text-center text-sm uppercase text-white hover:bg-orange-500"
          type="submit"
        >
          Login
        </button>
        <p className="px-3 py-2 text-lg">
          Don't have an account?{' '}
          <Link to="/RegisterUser" className="text-orange-500 hover:underline">
            Register here
          </Link>
        </p>
      </form>
    </div>
  );
}
