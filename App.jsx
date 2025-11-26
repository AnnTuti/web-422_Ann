import React, { useState } from 'react';

function AuthComponent() {
  const [isLogin, setIsLogin] = useState(true);
  const [users, setUsers] = useState([]);
  const [message, setMessage] = useState('');

  // Обработка входа
  const handleLogin = (login, password) => {
    const user = users.find(u => u.login === login && u.password === password);
    if (user) {
      setMessage(`Добро пожаловать, ${user.login}!`);
    } else {
      setMessage('Некорректный логин или пароль.');
    }
  };

  // Обработка регистрации
  const handleRegister = (login, password, repeatPassword) => {
    if (password !== repeatPassword) {
      setMessage('Пароли не совпадают.');
      return false;
    }
    if (users.find(u => u.login === login)) {
      setMessage('Пользователь с таким логином уже существует.');
      return false;
    }
    const newUser = { login, password };
    setUsers(prev => [...prev, newUser]);
    setMessage('Регистрация прошла успешно! Теперь можете войти.');
    return true;
  };

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh', // Полная высота экрана
      backgroundColor: '#f0f0f0' // светлый фон
    }}>
      <div style={{
        maxWidth: '400px',
        width: '100%',
        padding: '20px',
        border: '1px solid #f7c5d0',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.05)',
        backgroundColor: '#ffe4e1', // нежно-розовый фон
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center'
      }}>
        {isLogin ? (
          <LoginForm
            onLogin={handleLogin}
            onSwitch={() => { setIsLogin(false); setMessage(''); }}
            message={message}
          />
        ) : (
          <RegisterForm
            onRegister={handleRegister}
            onSwitch={() => { setIsLogin(true); setMessage(''); }}
            message={message}
          />
        )}
      </div>
    </div>
  );
}

function LoginForm({ onLogin, onSwitch, message }) {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(login, password);
  };

  return (
    <div style={{ width: '100%' }}>
      <h2 style={{ marginBottom: '20px' }}>Войти</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <input
          type="text"
          placeholder="Логин"
          value={login}
          onChange={(e) => setLogin(e.target.value)}
          style={{
            padding: '10px',
            border: '1px solid #ccc',
            borderRadius: '4px'
          }}
          required
        />
        <input
          type="password"
          placeholder="Пароль"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            padding: '10px',
            border: '1px solid #ccc',
            borderRadius: '4px'
          }}
          required
        />
        <button type="submit" style={{
          padding: '10px',
          border: 'none',
          borderRadius: '4px',
          backgroundColor: '#f7c5d0',
          cursor: 'pointer'
        }}>Войти</button>
      </form>
      <p style={{ marginTop: '10px' }}>
        Нет аккаунта? <button onClick={onSwitch} style={{
          background: 'none',
          border: 'none',
          color: 'blue',
          cursor: 'pointer',
          padding: 0,
          textDecoration: 'underline'
        }}>Зарегистрироваться</button>
      </p>
      {message && <p style={{ color: 'red' }}>{message}</p>}
    </div>
  );
}

function RegisterForm({ onRegister, onSwitch, message }) {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onRegister(login, password, repeatPassword);
  };

  return (
    <div style={{ width: '100%' }}>
      <h2 style={{ marginBottom: '20px' }}>Регистрация</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <input
          type="text"
          placeholder="Логин"
          value={login}
          onChange={(e) => setLogin(e.target.value)}
          style={{
            padding: '10px',
            border: '1px solid #ccc',
            borderRadius: '4px'
          }}
          required
        />
        <input
          type="password"
          placeholder="Пароль"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            padding: '10px',
            border: '1px solid #ccc',
            borderRadius: '4px'
          }}
          required
        />
        <input
          type="password"
          placeholder="Повторите пароль"
          value={repeatPassword}
          onChange={(e) => setRepeatPassword(e.target.value)}
          style={{
            padding: '10px',
            border: '1px solid #ccc',
            borderRadius: '4px'
          }}
          required
        />
        <button type="submit" style={{
          padding: '10px',
          border: 'none',
          borderRadius: '4px',
          backgroundColor: '#f7c5d0',
          cursor: 'pointer'
        }}>Зарегистрироваться</button>
      </form>
      <p style={{ marginTop: '10px' }}>
        Уже есть аккаунт? <button onClick={onSwitch} style={{
          background: 'none',
          border: 'none',
          color: 'blue',
          cursor: 'pointer',
          padding: 0,
          textDecoration: 'underline'
        }}>Войти</button>
      </p>
      {message && <p style={{ color: 'red' }}>{message}</p>}
    </div>
  );
}

export default AuthComponent;