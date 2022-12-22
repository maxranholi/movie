import { Containerheader, Title } from "./HeaderStyled";
import { useNavigate } from "react-router";

const Header = () => {
  const navigate = useNavigate();

  const goToHomePage = () => {
    navigate(`/home`);
  };

  return (
    <Containerheader>
      <Title>
        <h3 onClick={() => goToHomePage()}>TMDB</h3>
        <input />
      </Title>
    </Containerheader>
  );
};

export default Header;
