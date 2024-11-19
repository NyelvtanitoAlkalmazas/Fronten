const Nav = ({ onClickLink }) => {
  return (
    <div className="nav">
      <a onClick={() => onClickLink(1)}>Válaszd ki!</a>
      <a onClick={() => onClickLink(2)}>Egészítsd ki!</a>
      <a onClick={() => onClickLink(3)}>Rakd sorba!</a>
    </div>
  );
};

export default Nav;
