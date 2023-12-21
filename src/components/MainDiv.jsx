export function MainDiv(){
    return (
        <main id="main-div">
        <div id="one" class="content-box">

          <p class="title">Unleashing Code and Chaos</p>
          <div class="about-content">
            <h2>What I Do</h2>
            <p>
              Im not your average developer; I'm the cool cat who makes websites
              dance and servers sing. <br /><br />From crafting pixel-perfect
              UIs to taming wild databases, I’m the superhero your code
              deserves.
            </p>
          </div>
          <div class="about-content">
            <h2>Skills:</h2>
            <p>
              JavaScript, HTML, CSS – I speak these languages fluently. React
              and Sass? Consider them my sidekicks. <br /><br />Java, Elixir – I
              wield these like a coding ninja. And databases? I speak MongoDB's
              language, like a data whisperer.
            </p>
          </div>
          <div class="about-content">
            <h2>Why Choose Me:</h2>
            <p>
              I bring humor to error messages and joy to debugging sessions.
              <br /><br />When the code gets tough, I get coding—while cracking
              jokes that make even servers laugh. 🤖😂
            </p>
          </div>
          <div class="about-content">
            <h2>Fun Facts:</h2>
            <ul>
              <li>
                My coding style is 90% coffee, 10% magic. <br />
                <br />
                I break for memes and believe that laughter is the best
                debugging tool.
              </li>

              <li>Linux is not just an OS; it's my spirit animal.</li>

              <li>
                Let's turn your digital dreams into reality, one witty line of
                code at a time.
              </li>

              <li>Ready for the fun? Let's code and conquer together!</li>
            </ul>
          </div>
        </div>
        <div id="two" class="content-box hidden">
          {/* <img class="html-img" src="./images/space.png" alt="" />  */}
          <p class="title">What I Tinker With</p>
          <div class="skill-list">
            <div class="details">
              <p class="tag">FRONTEND</p>
              <p class="name">HTML</p>
              <p class="description">
                Building web pages like a boss with the magic of tags and
                elements!
              </p>
            </div>
            <img src="./images/html.png" alt="" class="skill-img htmlImg" />
          </div>

          <div class="skill-list">
            <div class="details">
              <p class="tag">FRONTEND</p>
              <p class="name">CSS</p>
              <p class="description">
                Styling the web, making it look cooler than a penguin in shades.
              </p>
            </div>
            <img src="./images/css.png" alt="" class="skill-img" />
          </div>

          <div class="skill-list">
            <div class="details">
              <p class="tag">JS</p>
              <p class="name">JavaScript</p>
              <p class="description">
                Making websites dance and sing with the power of dynamic
                scripting.
              </p>
            </div>
            <img src="./images/js.png" alt="" class="skill-img" />
          </div>

          <div class="skill-list">
            <div class="details">
              <p class="tag">FRONTEND</p>
              <p class="name">SASS</p>
              <p class="description">
                CSS on steroids! Keeping stylesheets fancy and organized with
                SASS.
              </p>
            </div>
            <img src="./images/sass.png" alt="" class="skill-img" />
          </div>

          <div class="skill-list">
            <div class="details">
              <p class="tag">FRONTEND</p>
              <p class="name">REACT</p>
              <p class="description">
                Building user interfaces like a ninja with the React
                superpowers.
              </p>
            </div>
            <img src="./images/react.png" alt="" class="skill-img" />
          </div>

          <div class="skill-list">
            <div class="details">
              <p class="tag">BACKEND</p>
              <p class="name">JAVA</p>
              <p class="description">
                Brewing code like coffee, making applications robust and
                jitter-free.
              </p>
            </div>
            <img src="./images/java.png" alt="" class="skill-img" />
          </div>

          <div class="skill-list">
            <div class="details">
              <p class="tag">BACKEND</p>
              <p class="name">C</p>
              <p class="description">
                The granddaddy of languages, coding like a boss since the '70s.
              </p>
            </div>
            <img src="./images/c.png" alt="" class="skill-img" />
          </div>

          <div class="skill-list">
            <div class="details">
              <p class="tag">BACKEND</p>
              <p class="name">ELIXIR</p>
              <p class="description">
                Potion crafting for scalable, fault-tolerant, and magical
                backend systems.
              </p>
            </div>
            <img src="./images/elixir.png" alt="" class="skill-img" />
          </div>

          <div class="skill-list">
            <div class="details">
              <p class="tag">DESIGN</p>
              <p class="name">Figma</p>
              <p class="description">
                Designing interfaces together, making collaboration as smooth as
                butter.
              </p>
            </div>
            <img src="./images/figma.png" alt="" class="skill-img" />
          </div>

          <div class="skill-list">
            <div class="details">
              <p class="tag">DESIGN</p>
              <p class="name">Adobe XD</p>
              <p class="description">
                Crafting user experiences with the finesse of a digital Picasso.
              </p>
            </div>
            <img src="./images/xd.png" alt="" class="skill-img" />
          </div>
        </div>

        <div id="three" class="content-box hidden">
          <p class="title">Connect With Me</p>
          <p class="quote">
            Let's make the internet a better place, one line of code at a time.
          </p>
          <p class="description">
            Reach out on <a href="#">Github</a>, shoot me an email at <br />
            <a href="#">briankaboyi@gmail.com</a> , or lets connect on
            <a href="#">LinkedIn</a>
          </p>
          <p>Cheers to coding and creating wonders together!</p>
          <div class="end">
            <p>Happy coding,</p>
            <p>Brian Kaboyi</p>
          </div>

          <div class="social">
            <a href="https://github.com/briankaboyi"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 480 512"
              >
                <path
                  d="M186.1 328.7c0 20.9-10.9 55.1-36.7 55.1s-36.7-34.2-36.7-55.1 10.9-55.1 36.7-55.1 36.7 34.2 36.7 55.1zM480 278.2c0 31.9-3.2 65.7-17.5 95-37.9 76.6-142.1 74.8-216.7 74.8-75.8 0-186.2 2.7-225.6-74.8-14.6-29-20.2-63.1-20.2-95 0-41.9 13.9-81.5 41.5-113.6-5.2-15.8-7.7-32.4-7.7-48.8 0-21.5 4.9-32.3 14.6-51.8 45.3 0 74.3 9 108.8 36 29-6.9 58.8-10 88.7-10 27 0 54.2 2.9 80.4 9.2 34-26.7 63-35.2 107.8-35.2 9.8 19.5 14.6 30.3 14.6 51.8 0 16.4-2.6 32.7-7.7 48.2 27.5 32.4 39 72.3 39 114.2zm-64.3 50.5c0-43.9-26.7-82.6-73.5-82.6-18.9 0-37 3.4-56 6-14.9 2.3-29.8 3.2-45.1 3.2-15.2 0-30.1-.9-45.1-3.2-18.7-2.6-37-6-56-6-46.8 0-73.5 38.7-73.5 82.6 0 87.8 80.4 101.3 150.4 101.3h48.2c70.3 0 150.6-13.4 150.6-101.3zm-82.6-55.1c-25.8 0-36.7 34.2-36.7 55.1s10.9 55.1 36.7 55.1 36.7-34.2 36.7-55.1-10.9-55.1-36.7-55.1z"
                />
              </svg>
              Email
            </a>
            <a href="mailto:briankaboyi0@gmail.com">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 512 512"
              >
                <path
                  d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"
                />
              </svg>
              Github
            </a>
          </div>
        </div>
      </main>
    )
}