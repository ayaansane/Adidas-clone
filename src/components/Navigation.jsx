const Navigation = () => {
  return (
    <>
      
      {/* Main Navbar */}
      <div className="navigationbar">
        <nav>
        <div className="logo">
          <img src="adidas.png" alt="logo" height="60px" width="80px" />
        </div>

        <ul>
          <li><a href="#"><b>Mens</b></a></li>
          <li><a href="#"><b>Womens</b></a></li>
          <li><a href="#"><b>Kids</b></a></li>
          <li><a href="#">Back To School</a></li>
          <li><a href="#">Sale</a></li>
          <li><a href="#">New & Trending</a></li>
        </ul>
        <div>

          <button className="login">Login</button>
        <button className="login">Signup</button>

        </div>
        <div>

        </div>
      </nav>
      </div>

      <div className="midbar"> <p> Save up to 40% on tons of styles.</p> </div>
    </>
  );
};

export default Navigation;
