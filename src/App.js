import './App.css';
function App() {
  return (
    <div>
      <body>
        <div class="outerbox">
          <div class="firstDiv">
            <h1 className='topHeading'>
              Website Name
            </h1>
          </div>
          <div className='navbar'>
            <span className='eachNavbar'>
              Home
            </span>
            <span className='eachNavbar'>
              About Us
            </span>
            <span className='eachNavbar'>
              Gallery
            </span>
            <span className='eachNavbar'>
              Contact Us
            </span>
            <span className='eachNavbar'>
              Home
            </span>
          </div>
          <div className='mainDiv'>
            <div className='leftSide'>
              <h2>
                Sub Heading
              </h2>
              <div className='textBox'>
                <p>
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                </p>
                <p>
                  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently.
                </p>
              </div>
            </div>
            <div className='rightSide'>
              <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Gallery</li>
                <li>Contact Us</li>
              </ul>
            </div>
          </div>
          <div className='footer'>
            <p className='footerText'>Website Name@Copyright</p>
          </div>
        </div>
      </body>
    </div>
  );
}
export default App;
