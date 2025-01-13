function Home(){
    return (
      <div className="container">
        <section class="hero" id="home">
          <main class="content">
            <h1>Bigger Will <span>Bigger Muscle</span></h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit,
              voluptatum?
            </p>
            <a href="Membership.html" class="cta">Join Now!</a>
          </main>
        </section>

        <section id="about" class="about">
            <h2><span>Tentang</span> Kami</h2>

            <div class="row">
                <div class="about-img">
                    <img src="{{ url_for('static', filename='img/tentang-kami.jpg') }}" alt="Tentang Kami">
            </div>
            <div class="content">
                <h3>YOU Should Be A GymRat!</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor inventore rem sequi suscipit exercitationem quae.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam ad tenetur nemo at aliquid autem porro voluptatum quaerat odio quisquam?</p>
            </div>
            
        </section>

        <section id="tools" class="tools">
          <h2><span>Alat</span> Gym</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex voluptates nisi cupiditate assumenda unde eum laborum quasi. Suscipit, harum earum.</p>
        
        
          <div class="row">
            <div class="gym-card">
              <img src="{{ url_for('static', filename='img/BARBEL.jpg') }}" alt="Barbel">
              <h3 class="gym-card-title">
                Barbel
              </h3>
            </div>
            <div class="gym-card">
              <img src="{{ url_for('static', filename='img/dumbbell.jpg') }}" alt="dumbbell">
              <h3 class="gym-card-title">
                Dumbbell
              </h3>
            </div>
            <div class="gym-card">
              <img src="{{ url_for('static', filename='img/lat-pulldown-machine.jpg') }}" alt="lat-pulldown-machine">
              <h3 class="gym-card-title">
                Lat pulldown machine
              </h3>
            </div>
            <div class="gym-card">
              <img src="{{ url_for('static', filename='img/pec-dec.jpg') }}" alt="pec-dec">
              <h3 class="gym-card-title">
                Pec dec
              </h3>
            </div>
            <div class="gym-card">
              <img src="{{ url_for('static', filename='img/squat-rack.jpg') }}" alt="squat-rack">
              <h3 class="gym-card-title">
                Squat rack
              </h3>
            </div>
            <div class="gym-card">
              <img src="{{ url_for('static', filename='img/treadmill.jpg') }}" alt="treadmill">
              <h3 class="gym-card-title">
                Treadmill
              </h3>
            </div>
            </div>
          </div>
        </section>
        
        <section id="contact" class="contact">
          <h2><span>Contact</span> Us</h2>

          <div class="row">
            <form action="">
              <div class="in-group">
                <i data-feather="user"></i>
                <input type="text" placeholder="nama">
              </div>
              <div class="in-group">
                <i data-feather="mail"></i>
                <input type="text" placeholder="email">
              </div>
              <div class="in-group">
                <i data-feather="phone"></i>
                <input type="text" placeholder="phone number">
              </div>
              <button type="submit" class="btn">Send</button>
            </form>
          </div>
        </section>
      </div>
    );
}

export default Home