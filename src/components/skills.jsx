import React from "react";

export default function Skills() {
  console.log("skilllllllllllllllls");
  return (
    <>
      <div id="two" className="content-box">
        {/* <img className="html-img" src="./images/space.png" alt="" />  */}
        <p className="title">What I Tinker With</p>
        <div className="skill-list">
          <div className="details">
            <p className="tag">FRONTEND</p>
            <p className="name">HTML</p>
            <p className="description">
              Building web pages like a boss with the magic of tags and
              elements!
            </p>
          </div>
          <img src="/images/html.png" alt="" className="skill-img htmlImg" />
        </div>

        <div className="skill-list">
          <div className="details">
            <p className="tag">FRONTEND</p>
            <p className="name">CSS</p>
            <p className="description">
              Styling the web, making it look cooler than a penguin in shades.
            </p>
          </div>
          <img src="/images/css.png" alt="" className="skill-img" />
        </div>

        <div className="skill-list">
          <div className="details">
            <p className="tag">JS</p>
            <p className="name">JavaScript</p>
            <p className="description">
              Making websites dance and sing with the power of dynamic
              scripting.
            </p>
          </div>
          <img src="/images/js.png" alt="" className="skill-img" />
        </div>

        <div className="skill-list">
          <div className="details">
            <p className="tag">FRONTEND</p>
            <p className="name">SASS</p>
            <p className="description">
              CSS on steroids! Keeping stylesheets fancy and organized with
              SASS.
            </p>
          </div>
          <img src="/images/sass.png" alt="" className="skill-img" />
        </div>

        <div className="skill-list">
          <div className="details">
            <p className="tag">FRONTEND</p>
            <p className="name">REACT</p>
            <p className="description">
              Building user interfaces like a ninja with the React superpowers.
            </p>
          </div>
          <img src="/images/react.png" alt="" className="skill-img" />
        </div>

        <div className="skill-list">
          <div className="details">
            <p className="tag">BACKEND</p>
            <p className="name">JAVA</p>
            <p className="description">
              Brewing code like coffee, making applications robust and
              jitter-free.
            </p>
          </div>
          <img src="/images/java.png" alt="" className="skill-img" />
        </div>

        <div className="skill-list">
          <div className="details">
            <p className="tag">BACKEND</p>
            <p className="name">ELIXIR</p>
            <p className="description">
              Potion crafting for scalable, fault-tolerant, and magical backend
              systems.
            </p>
          </div>
          <img src="/images/elixir.png" alt="" className="skill-img" />
        </div>

        <div className="skill-list">
          <div className="details">
            <p className="tag">DESIGN</p>
            <p className="name">Figma</p>
            <p className="description">
              Designing interfaces together, making collaboration as smooth as
              butter.
            </p>
          </div>
          <img src="/images/figma.png" alt="" className="skill-img" />
        </div>

        <div className="skill-list">
          <div className="details">
            <p className="tag">DESIGN</p>
            <p className="name">Adobe XD</p>
            <p className="description">
              Crafting user experiences with the finesse of a digital Picasso.
            </p>
          </div>
          <img src="/images/xd.png" alt="" className="skill-img" />
        </div>
        <div style={{height:"190px"}}></div>
      </div>
    </>
  );
}
