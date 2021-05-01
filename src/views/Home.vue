<!-- ICON FILL COLOR #42657d-->
<!-- 138.197.219.90 -->

<template>
  <div class="content">
    <Header></Header>
    <div id="introduction">
      <!-- Introduction -->
      <div class='smallSection'>
        <div id="about">
          <img src="../assets/icons/profileIcon.svg" width="60px" height="60px"/>
          <br />
          <h4>Esdras Catala</h4>
          <h4>Web Developer <br/> <h5>Full Stack</h5></h4>
          <h5>Provo, UT.</h5>
          <ul>
            <li>
              <a href="https://www.linkedin.com/in/e-catala/" target="_blank">
                <img src="../assets/icons/linkedIcon.svg" width="35px" height="35px" />
              </a>
            </li>
            <li>
              <a href="https://github.com/esdraszx" target="_blank">
                <img src="../assets/icons/gitIcon.svg" width="37px" height="37px" />
              </a>
            </li>
          </ul>
          <!-- <a href='about' style="bottom: -16px;" class='moreLink'><span>Learn More</span><img src='../assets/navigationIcons/arrowRight.svg' width='20px' height='20px'></a> -->
        </div>
      </div>
      <div class='smallSection'>
        <div id="education">
          <img src="../assets/icons/bookIcon.svg" width="60px" height="60px"/>
          <h5><b>Brigham Young University</b> Information Technology, <br/> <h6>Minor in Computer Science <br/> 2018-2022</h6></h5>
          <h5><b>LDS Business College</b> Associate of Business Sciences. <br/><h6> 2014-2016</h6></h5>
        </div>
      </div>
      <div class='smallSection'>
        <div id="skills">
          <img src="../assets/icons/codeIcon.svg" width="60px" height="60px"/><br/><br/>
          <p>
            <span>JavaScript</span> &nbsp;
            <span>HTML5/CSS</span> &nbsp; 
            <span>NodeJs</span> &nbsp;
            <span>Vue</span> &nbsp;
            <span>React</span> &nbsp; 
            <span>Redux</span> &nbsp;
            <span>Mongo</span> &nbsp;
            <span>SQL</span> &nbsp; 
            <span>PHP</span> &nbsp; 
            <span>Git</span> &nbsp;
            <span>Linux</span>
          </p>
          <!-- <a href='./rec2020.pdf' target='_blank' class='moreLink'><span>View Resume</span><img src='../assets/navigationIcons/arrowRight.svg' width='20px' height='20px'></a> -->
        </div>
      </div>
    </div>
    <br/>
    <div id="projects">
      <!-- Showcase projects I have worked on -->
      <h2><b>PROJECTS</b></h2>
      <h6>Most projects are restricted to BYU students or people with a BYU account.</h6>
      <br/>
      <div class='largeSection'>
        <div class='projectCard'>
          <img src='../assets/projects/algo.png' style='width: 150%; height: 100%; margin-left: -25%; position: relative; z-index: 1;'>
          <div class='cardContent'>
            <h4>Algorithm Visualization</h4>
            <h5>JavaScript</h5>
            <!-- <p class='projectCardSummary'>Website to showcase information about university events, and find current and past university awardees.</p> -->
            
            <a class='projectButton' href='/algorithm' target=''>View</a>
          </div>
        </div>
        <div class='projectCard'>
          <img src='../assets/projects/ag.jpeg' style='width: 150%; height: 100%; margin-left: -25%; position: relative; z-index: 1;'>
          <div class='cardContent'>
            <h4>Aspengrove Resort</h4>
            <h5>C.Fusion/Drupal/JS/SQL</h5>
            <!-- <p class='projectCardSummary'>Web application to showcase information about the resort and allow users to make reservations, payments, and review their orders.</p> -->
            
            <a class='projectButton' href='http://aspengrove.byu.edu' target='_blank'>View</a>
          </div>
        </div>
        <div class='projectCard'>
          <img src='../assets/projects/yvideo.png' style='width: 150%; height: 100%; margin-left: -25%; position: relative; z-index: 1;'>
          <div class='cardContent'>
            <h4>YVideo</h4>
            <h5>React / Redux</h5>
            <!-- <p class='projectCardSummary'>Video platform for professors to edit videos and create video collections. Students enrolled in a class can view the collections as part of their course work</p> -->
            
            <a class='projectButton' href='https://github.com/BYU-ODH/yvideo-client' target='_blank'>View</a>
          </div>
        </div>
      </div>
      <!-- <div class='largeSection'>
        <div class='projectCard'>
          <img src='../assets/projects/relations.jpg' style='width: 150%; height: 100%; margin-left: -25%; position: relative; z-index: 1;'>
          <div class='cardContent'>
            <h4>BYU Homecoming</h4>
            <h5>JS / Brightspot(CMS)</h5>
            <p class='projectCardSummary'>Website to showcase information about university events, and find current and past university awardees.</p>
            <br/><br/>
            <a class='projectButton' href='https://homecoming.byu.edu/' target='_black'>View</a>
          </div>
        </div>
        <div class='projectCard'>
          <img src='../assets/projects/todo.jpg' style='width: 150%; height: 100%; margin-left: -25%; position: relative; z-index: 1;'>
          <div class='cardContent'>
            <h4>Aspengrove Resort</h4>
            <h5>C.Fusion/Drupal/JS/SQL</h5>
            <p class='projectCardSummary'>Web application to showcase information about the resort and allow users to make reservations, payments, and review their orders.</p>
            <br/>
            <a class='projectButton' href='http://aspengrove.byu.edu' target='_black'>View</a>
          </div>
        </div>
        <div class='' style="background-color: #abd6f4; padding: 10px; margin: 10px; border: 1px solid black;">
           <div class='cardContent'>
            <h4 style="margin-top: 30%;">More Soon...</h4>
          </div>
        </div>
      </div> -->
    </div>
  </div>
</template>

<script>
import Header from '../components/Header'

export default {
  name: 'Home',
  data(){
    return {

    }
  },
  components: {
    Header: Header,
  }
};
</script>

<style scoped>
/* * {
    border: 1px solid black;
  } */

.smallSection .moreLink {
  display: flex; 
  position: absolute; 
  float: right; 
  text-decoration: none;
  font-size: 14px;
  padding: 0px 0px 0px 5px;
  transition: .5s ease-out;
  bottom: 0px;
  right: 0px;
}

.smallSection .moreLink span {
  margin: auto;
}

.smallSection .moreLink img {
  margin: auto;
}

.smallSection .moreLink:hover {
  color: inherit;
  background-color: var(--light-blue);
}

/*  INTRODUCTION  */
.smallSection {
  margin: auto;
  width: 33%;
  display: flex;
  overflow: hidden;
}

.smallSection div {
  width: 90%;
  padding: 10px;
  border-radius: 2px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  background-color: rgba(255, 255, 255);
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2), -2px -2px 4px rgba(0, 0, 0, 0.2);
}

#about, #education, #skills {
  width: 80%;
  min-height: 350px;
  height: 300px;
  margin: 10px auto 10px auto;
  overflow: scroll;
}

#about::-webkit-scrollbar {
  display: none;
}

#education::-webkit-scrollbar {
  display: none;
}

#skills::-webkit-scrollbar {
  display: none;
}

#about img, #education img, #skills img {
  border-radius: 50%;
  margin: 5px;
}

#about h3,h4 {
  margin: 10px 0px 10px 0px;
  padding: 5px 0px;
}

#about ul {
  width: 40%;
  list-style: none;
  margin: 15px 0px auto 30%;
  padding: 0px;
  display: flex;
}

#about li {
  margin: auto;
}

#about ul li img {
  border-radius: 50%;
}

#education h5 {
  margin: 10px 0px 10px 0px;
  padding: 5px 0px;
}

#introduction {
  width: 100%;
  margin-left: auto;
  min-height: 300px !important;
  height: auto !important;
  display: flex;
}

#skills {
  position: relative;
}

#skills p {
  line-height: 2.5rem;
}

#skills p span{
  color: black;
  margin: 2px;
  padding: .5rem;
  font-weight: bold;
  border-radius: 15px;
  background-color: white;
  border: 2px solid var(--dark);
}

/*  PROJECTS */

#projects {
  height: 30vh;
  margin-top: 30px;
}

#projects h6, h2{
  color: black;
}

#projects .largeSection {
  width: 93%;
  height: 100%;
  margin: auto;
  border-radius: 4px;
  background-color: rgba(255, 255, 255);
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2), -2px -2px 4px rgba(0, 0, 0, 0.2);
  display: grid;
  grid-template-columns: 33.333% 33.33% 33.33%;
  /* grid-template-rows: 50% 50%; */
}

#projects .largeSection .projectCard{
  width: 100%;
  height: 100%;
  text-align: center;
  position: relative;
  overflow: hidden;
}

#projects .largeSection .projectCard img {
  top: 0px;
  left: 0px;
  transition: 1s ease-in-out;
}

#projects .largeSection .projectCard:hover img {
  top: -30vh !important;
}

#projects .largeSection .projectCard:hover .cardContent {
  top: -30vh !important;
}

#projects .largeSection .projectCard .cardContent{
  position: relative;
  height: 98%;
  width: 98%;
  background-color: white;
  margin: 3px 3px 3px 3px;
  transition: 1s ease-in-out;
  top: 10px;
  left: 0px;
  padding: 10px;
  border: 4px solid;
  border-image: linear-gradient(#3f87a6 0%, #FFFFFF 25%, #FFFFFF 75%, #3f87a6 100%) 1;
  border-image: linear-gradient(0.20turn, #3f87a6 0%, #FFFFFF 25%, #FFFFFF 75%, #3f87a6 100%) 1;
}

.projectButton {
  text-decoration: none;
  width: 50px;
  height: 30px;
  border-radius: 5px;
  background-color: var(--light-blue);
  color: black !important;
  font-size: 1.5rem;
  padding: 5px 20px;
  transition: .5s ease-in-out;
}

.projectButton:hover {
  background-color: var(--dark-blue);
  box-shadow: 2px 2px 3px var(--dark-blue), -2px 0px 3px var(--dark-blue);
  color: white !important;
}

@media only screen and (max-width: 1000px) {
  .content {  
    width: 50%;
    margin: 20px auto auto auto;
    text-align: center;
    height: 2120px;
  }

  #about, #skills, #education {
    width: 80%;
    min-height: 350px;
    height: 350px;
    margin: 15px auto 15px auto;
  }

  .smallSection {
    width: 100%;
  }

  #introduction {
    display: inline-block;
  }

  #projects .largeSection {
    width: 80%;
    height: auto;
    margin: auto;
    display: inline-block;
    /* grid-template-columns: 33.333% 33.33% 33.33%; */
  }

  #projects .largeSection .projectCard {
    width: 100%;
    height: 250px;
    /* grid-template-columns: 33.333% 33.33% 33.33%; */
  }

  #projects .largeSection .projectCard:hover .cardContent {
    top: -250px !important;
    left: -0% !important;
  }

  #projects .largeSection .projectCard:hover img {
    top: -0px !important;
    left: -150% !important;
  }

  #projects .largeSection .projectCard .cardContent{
    top: -250px;
    left: 150% !important;
  }

  .projectCardSummary {
    display: none;
  }

  @media only screen and (max-width: 600px) {
    .content {  
      width: 100%;
    }
  }
}

</style>