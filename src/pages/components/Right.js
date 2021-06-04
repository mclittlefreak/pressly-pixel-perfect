import React, { useState } from "react"

export default function Right() {
  const [login, setLogin] = useState("")
  const [password, setPassword] = useState("")

  function handleInputL(e) {
    e.preventDefault()
    setLogin(e.target.value)
  }
  function handleInputP(e) {
    e.preventDefault()
    setPassword(e.target.value)
  }
  function alertLP(e) {
    e.preventDefault()
    alert("Login: " + login + " Password: " + password)
    setLogin("")
    setPassword("")
  }

  return (
    <div className="right">
      <div className="right__form">
        <form className="text-center">
          <label>
            <input
              type="text"
              onChange={handleInputL}
              value={login}
              placeholder="Adres e-mail lub number telefonu"
            />
          </label>
          <label>
            <input
              type="password"
              onChange={handleInputP}
              value={password}
              placeholder="Hasło"
            />
          </label>
          <button type="button" onClick={alertLP}>
            Zaloguj się
          </button>
        </form>
        <a className="right__pwd" href="https://facebook.com/">
          Nie pamiętasz hasła?
        </a>
        <div className="right__break"></div>
        <a className="right__register" href="https://facebook.com/">
          Utwórz nowe konto
        </a>
      </div>
      <div className="right__cta">
        <p>
          <a href="https://facebook.com/">Utwórz stronę</a>
          <span> dla gwiazdy, zespołu lub firmy</span>
        </p>
      </div>
    </div>
  )
}
