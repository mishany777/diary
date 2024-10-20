import profileIcon from "../../../diary_project/src/assets/profileIcon.png";
export default function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li className="logo">
            <p>Лого</p>
          </li>
          <li className="name">
            <p>Название</p>
          </li>
          <li className="userProfile">
            <img src={profileIcon} alt="Профиль"></img>
          </li>
          <li className="userName">
            <p>Имя пользователя</p>
          </li>
        </ul>
      </nav>
    </header>
  );
}
