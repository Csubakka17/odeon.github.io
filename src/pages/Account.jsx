import React, { useState } from 'react';
import '../assets/css/account.css';

export default function Account() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [registerEmail, setRegisterEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleRegister = () => {
    setMessage('Regisztrációs email elküldve (a Firebase integráció szükséges).');
  };

  const handleSignin = () => {
    setMessage('Bejelentkezés sikeres (a Firebase integráció szükséges).');
  };

  const handlePasswordReset = () => {
    setMessage('Jelszó visszaállítási email elküldve (a Firebase integráció szükséges).');
  };

  return (
    

    <div className="page-content container">
      <div className="account-form">
        <div className="login-form">
          <h2>Bejelentkezés</h2>
          <div className="input-row">
            <label htmlFor="email">Email cím:</label>
            <input
              type="email"
              placeholder="Email cím"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="password-container">
            <label htmlFor="password">Jelszó:</label>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Jelszó"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span onClick={() => setShowPassword(!showPassword)} className="toggle-password">
              {showPassword ? '🙈' : '👁️'}
            </span>
          </div>
          <div className="remember-me">
            <input type="radio" id="rememberMe" name="rememberMe" />
            <label htmlFor="rememberMe">Emlékezz rám</label>
          </div>
          <button onClick={handleSignin}>Belépés</button>
          <a href="#" onClick={handlePasswordReset}>Elfelejtett jelszó?</a>
        </div>
        <div className="register-form">
          <h2>Regisztráció</h2>
          <label htmlFor="registerEmail">Email cím:</label>
          <input
            type="email"
            placeholder="Email cím"
            value={registerEmail}
            onChange={(e) => setRegisterEmail(e.target.value)}
          />
          <p>
            Regisztrációval a fiók létrejön és email-ben elküldjük a linket, amivel beállítható a jelszó.<br />
            A személyes adatokat a weboldalon történő vásárlási élmény fenntartásához, a fiókhoz való hozzáférés kezeléséhez és más célokra használjuk, melyeket a <a href="#">Adatkezelési tájékoztató</a> tartalmaz.
          </p>
          <button onClick={handleRegister}>Regisztráció</button>
        </div>
      </div>
      
   </div>

  );
}
