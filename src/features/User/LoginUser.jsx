import { useState } from 'react';

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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    try {
      const res = await fetch('http://localhost:4000/api/users/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error('Failed to register');
      const data = await res.json();
      setSuccess('Registration successful!');
    } catch (err) {
      setError(err.message || 'Registration failed');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mx-auto mt-10 max-w-md space-y-4">
      <h2 className="mb-4 text-xl font-bold">Register</h2>
      {error && <p className="text-red-500">{error}</p>}
      {success && <p className="text-green-500">{success}</p>}

      {['first_name', 'last_name', 'email', 'password', 'phone', 'address'].map(
        (field) => (
          <input
            key={field}
            name={field}
            type={field === 'password' ? 'password' : 'text'}
            value={formData[field]}
            onChange={handleChange}
            placeholder={field.replace('_', ' ')}
            required
            className="w-full rounded border border-gray-300 p-2"
          />
        ),
      )}

      <button
        type="submit"
        className="rounded bg-orange-500 px-4 py-2 text-white hover:bg-orange-600"
      >
        Register
      </button>
    </form>
  );
}
