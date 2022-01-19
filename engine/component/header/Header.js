import S from "./Header.module.scss";

function Header() {
  console.log(S);
  return (
    <header className={S.wrapper}>
      <div className={S.content}>
        <h1 className={S.title}>My heart in my art</h1>

        <div className={S.nav_right}>
          {/* Change language */}

          <div className={S.select_lang}>
            <select>
              <option>FR</option>
              <option>EN</option>
            </select>
          </div>

          {/* Signin and Signup btn */}

          <div className={S.user_account}>
            <button className={`${S.btn} ${S.signin}`}>Connexion</button>
            <button className={`${S.btn} ${S.signup}`}>inscription</button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
