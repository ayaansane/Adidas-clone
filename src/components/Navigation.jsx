const Navigation = () => {
  return (
    <>
      {/* Top Bar */}
      <div className="topbar">
        <p>FAST, FREE DELIVERY WITH PRIME</p>
      </div>

      {/* Main Navbar */}
      <nav>
        <div className="logo">
          <img src="adddidasss.png" alt="logo" height="60px" width="80px" />
        </div>

        <ul>
          <li><a href="#"><b>Mens</b></a></li>
          <li><a href="#"><b>Womens</b></a></li>
          <li><a href="#"><b>Kids</b></a></li>
          <li><a href="#">Back To School</a></li>
          <li><a href="#">Sale</a></li>
          <li><a href="#">New & Trending</a></li>
        </ul>

        <button className="login">Login</button>
      </nav>
    </>
  );
};

export default Navigation;
