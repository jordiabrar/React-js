function Header(){
    return (
      <div className="header">
        <nav class="navbar">
          <a href="#" class="logo-navbar">Gym<span>Rat</span></a>

          <div class="navbar-nav">
            <a href="#home">Home</a>
            <a href="#about">Tentang Kami</a>
            <a href="#tools">Alat Gym</a>
            <a href="#contact">Contact Us</a>
          </div>

          <div class="navbar-extra">
            <a href="#" id="search"><i data-feather="search"></i></a>
            <a href="{{ url_for('membership') }}" id="shopping-cart">
                <i data-feather="shopping-cart"></i>
            </a>
            <a href="#" id="menu"><i data-feather="menu"></i></a>
          </div>
        </nav>
      </div>
    );

}



export default Header