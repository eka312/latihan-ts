import Navbar from "../komponen/Navbar"
import Footer from "../komponen/Footer";
import Tutors from "../komponen/Tutors";
import Patners from "../komponen/Patners";
import Kontak from "../komponen/Kontak";
import '../style/Home.css';
import parse from 'html-react-parser';
import { homeSection } from "../data/HomeSection";
import { coursesSection } from "../data/CoursesSection";
import { tutorsSection } from "../data/TutorsSection";
import { tutorsList } from '../data/TutorsSection';
import { patnersSection } from "../data/PatnersSection";
import { patnersList } from '../data/PatnersSection';
import { kontakSection } from "../data/KontakSection"; 




function Home() {
  return (
    <>
      <Navbar/>

      <div className="wrapper" >

        {/* home */}
        <section id="home">
          <img src={homeSection.image} />
          <div className="kolom">
            {parse(homeSection.content)}
          </div>
        </section>

        {/* courses */}
        <section id="courses">
          <div className="kolom">
            {parse(coursesSection.content)}
          </div>
          <img src={coursesSection.image} />

        </section>

        {/* tutors */}
        <section id="tutors">
          <div className="tengah">
            <div className="kolom">
              {parse(tutorsSection.content)}
            </div>
            <Tutors tutorsList={tutorsList} />
            

          </div>
        </section>

        {/* patners */}
        <section id="patners">
          <div className="tengah">
            <div className="kolom">
              {parse(patnersSection.content)}
            </div>
            <Patners patnersList={patnersList} />
          </div>
        </section>
        
        <Kontak kontakSection={kontakSection} />
        
        <Footer/>


      </div>

    </>
  )
}

export default Home