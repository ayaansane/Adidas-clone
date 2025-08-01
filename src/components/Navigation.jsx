const Navigation = () => {
  return (
    <>
      {/* Main Navbar */}
      <div className="navigationbar">
        <nav>
          <div className="logoleft">
            <img src="adidas.png" alt="logo" height="60px" width="80px" />
          </div>

          <div className="navmenu">
            <ul>
              <li><a href="#"><b>Mens</b></a></li>
              <li><a href="#"><b>Womens</b></a></li>
              <li><a href="#"><b>Kids</b></a></li>
              <li><a href="#">Back To School</a></li>
              <li><a href="#">Sale</a></li>
              <li><a href="#">New & Trending</a></li>
            </ul>
          </div>

          <div className="creds">
            <button className="login">Login</button>
            <button className="login">Signup</button>
          </div>
        </nav>
      </div>

      <div className="midbar">
        <p>Save up to 40% on tons of styles.</p>
      </div>
    </>
  );
};

export default Navigation;
