import "./App.css";
import pikachu from './pikachu.png'

function App() {
  return (
    <div className="App">
      <div className="testi">
        <h5>TESTIMONIALS</h5>
      </div>

      <div className="feedback">
        <h2>What Our Clients Are Saying</h2>
      </div>
      <div className="container">
        <div className="qucontainer">
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <div className="pe">
            <p>
              A digital agency is a business you hire to outsource your digital
              marketing efforts, instead of handling in-house. They can provide
              your business with a variety of digital solutions to promote your
              product or service online and help you.
            </p>
          </div>

          <img className='circular_image' src={pikachu} />
          <div className="name">
            <h4>Alan Martí</h4>
          </div>

          <div className="pr">
            <h6>Meta Inc.</h6>
          </div>
        </div>
        <div className="qucontainer2">
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <div className="pe">
            <p>
              A digital agency is a business you hire to outsource your digital
              marketing efforts, instead of handling in-house. They can provide
              your business with a variety of digital solutions to promote your
              product or service online and help you.
            </p>
          </div>
          <img className="circular_image" src={pikachu} />
          <div className="name">
            <h4>Alan Martí</h4>
          </div>
          <div className="pr">
            <h6>Meta Inc.</h6>
          </div>
        </div>
      </div>
      <div className="container1">
        <div className="qucontainer1">
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <div className="pe">
            <p>
              A digital agency is a business you hire to outsource your digital
              marketing efforts, instead of handling in-house. They can provide
              your business with a variety of digital solutions to promote your
              product or service online and help you.
            </p>
          </div>

          <img className="circular_image" src={pikachu} />
          <div className="name">
            <h4>Alan Martí</h4>
          </div>
          <div className="pr">
            <h6>Meta Inc.</h6>
          </div>
        </div>
        <div className="qucontainer1">
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <span className="fa fa-star checked"></span>
          <div className="pe">
            <p>
              A digital agency is a business you hire to outsource your digital
              marketing efforts, instead of handling in-house. They can provide
              your business with a variety of digital solutions to promote your
              product or service online and help you.
            </p>
          </div>
          <img className="circular_image" src={pikachu} />
          <div className="name">
            <h4>Alan Martí</h4>
          </div>
          <div className="pr">
            <h6>Meta Inc.</h6>
          </div>
        </div>
      </div>
      <div className="btn">
        <button className="button">See All</button>
      </div>
    </div>
  );
}

export default App;
