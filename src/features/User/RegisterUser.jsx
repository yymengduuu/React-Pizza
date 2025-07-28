import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import bgPizza from '../../assets/bg-pizza.jpg';

export default function Register() {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: '',
    phone: '',
    address: '',
  });

  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    try {
      const res = await fetch('/api/users/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error('Failed to register');
      const data = await res.json();
      setSuccess('Registration successful!');
      navigate('/LoginUser');
    } catch (err) {
      setError(err.message || 'Registration failed');
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
      <form
        onSubmit={handleSubmit}
        className="mx-auto mt-10 max-w-md space-y-4 border-b pb-4"
      >
        <h2 className="mb-4 border-b pb-4 text-2xl font-bold">
          Create an Account
        </h2>
        <p>
          Hey! It's quick and easy to set up a Firepie Express Pizza account.
        </p>
        {error && <p className="text-red-500">{error}</p>}
        {success && <p className="text-green-500">{success}</p>}

        {[
          'first_name',
          'last_name',
          'email',
          'password',
          'phone',
          'address',
        ].map((field) => (
          <input
            key={field}
            name={field}
            type={field === 'password' ? 'password' : 'text'}
            value={formData[field]}
            onChange={handleChange}
            placeholder={field.replace('_', ' ')}
            required
            className="w-full rounded-xl border-2 border-orange-400 px-3 py-2 text-sm focus:border-orange-600 focus:outline-none"
          />
        ))}

        <button
          type="submit"
          className="mr-4 min-w-[120px] rounded-full bg-orange-400 px-4 py-3 text-center text-sm uppercase text-white hover:bg-orange-500"
        >
          Register
        </button>
      </form>
      <h3 className="mb-4 mt-8 text-xl font-bold">Already Have an Account?</h3>
      <button
        type="submit"
        className="mr-4 min-w-[120px] rounded-full border-2 border-orange-400 bg-white px-4 py-3 text-center text-sm uppercase text-orange-400"
        onClick={() => navigate('/LoginUser')}
      >
        Sign in
      </button>
    </div>
  );
}
