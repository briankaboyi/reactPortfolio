import { useState } from "react"
export function Aside() {
    const [clicked,setClicked]= useState("About");
    function handleClick(e){
        setClicked(e.target.innerText)

    }
       console.log(clicked)

    return (
<aside className="side closed">
             {/* burger component */}
             <div className="burger">
                 <div className="line"></div>
                 <div className="line"></div>
                 <div className="line"></div>
             </div>
             {/*  */}
             <div className="name">Brian Mongo</div>
             {/*  */}
             <div className="list">
                 <p className="list-item">Frontend Dev</p>
                 <p className="list-item">Backend Dev</p>
                 <p className="list-item">UI UX</p>
             </div>
             {/*  */}
             <ol id="nav" onClick={(e)=>handleClick(e)}>
                 <li  id="about-btn">
                     <a class="nav-item about" href="#">
                         <p>About</p>
                     </a>
                 </li>
                 <li id="skills-btn ">
                     <a class="nav-item skills" href="#">
                         <p>Skills</p>
                     </a>
                 </li>

                 <li  id="contact-btn">
                     <a class="nav-item contact" href="#">
                         <p>Contact Me</p>
                     </a>
                 </li>
             </ol>
             {/*  */}
             <div className="social">
                 <img src="../assets/images/avatar.png" alt="profile-picture" className="avatar" />
                 <a href="https:github.com/briankaboyi" target="_blank"
                 ><svg
                     xmlns="http:www.w3.org/2000/svg"
                     height="1em"
                     viewBox="0 0 480 512"
                 >

                         <path
                             d="M186.1 328.7c0 20.9-10.9 55.1-36.7 55.1s-36.7-34.2-36.7-55.1 10.9-55.1 36.7-55.1 36.7 34.2 36.7 55.1zM480 278.2c0 31.9-3.2 65.7-17.5 95-37.9 76.6-142.1 74.8-216.7 74.8-75.8 0-186.2 2.7-225.6-74.8-14.6-29-20.2-63.1-20.2-95 0-41.9 13.9-81.5 41.5-113.6-5.2-15.8-7.7-32.4-7.7-48.8 0-21.5 4.9-32.3 14.6-51.8 45.3 0 74.3 9 108.8 36 29-6.9 58.8-10 88.7-10 27 0 54.2 2.9 80.4 9.2 34-26.7 63-35.2 107.8-35.2 9.8 19.5 14.6 30.3 14.6 51.8 0 16.4-2.6 32.7-7.7 48.2 27.5 32.4 39 72.3 39 114.2zm-64.3 50.5c0-43.9-26.7-82.6-73.5-82.6-18.9 0-37 3.4-56 6-14.9 2.3-29.8 3.2-45.1 3.2-15.2 0-30.1-.9-45.1-3.2-18.7-2.6-37-6-56-6-46.8 0-73.5 38.7-73.5 82.6 0 87.8 80.4 101.3 150.4 101.3h48.2c70.3 0 150.6-13.4 150.6-101.3zm-82.6-55.1c-25.8 0-36.7 34.2-36.7 55.1s10.9 55.1 36.7 55.1 36.7-34.2 36.7-55.1-10.9-55.1-36.7-55.1z"
                         />
                     </svg>
                     Github</a>
                
                 <a href="mailto:briankaboyi0@gmail.com">
                     <svg
                         xmlns="http:www.w3.org/2000/svg"
                         height="1em"
                         viewBox="0 0 512 512"
                     >

                         <path
                             d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"
                         />
                     </svg>
                     Email</a>
                
             </div>
         </aside>
    )
}
