<template>
    <div>
        <iframe src="/assets/documents/res2020.pdf" width="700px" height="800px"></iframe>
        <Header></Header>
        <div class="row project-tile">
            <div class="col-sm-6">
                <p class="fwP"><strong>My First Website</strong><br/><br/>The first website that I create included basic HTML, CSS, and JS. 
                    The web page was created for my first IT class at Brigham Young University. Some JS is used to create a comments page and a 
                    simple game.<br/> The web page was only an HTML file without running it in a server.</p>
            </div>
            <div class="col-sm-6">
                <a href="http://www.ecatala.com/" target="blank"><img src="../assets/fw2.png" class="fwImg" width="500"></a>
            </div>
        </div>
        <div class="row project-tile">
            <div class="col-sm-6">
                <p class="fwP"><strong>Register and Login System</strong><br/><br/>The login and register system was based on a LAMP server.
                    The website also consisted on creating content that only loged in users could see. Front-end was pure HTML and CSS. Script language used was
                    Java Script. This was run in a local host server</p>
            </div>
            <div class="col-sm-6">
                <img src="../assets/fw.png" class="fwImg" width="500">
            </div>
        </div>
        <div class="row project-tile">
            <div class="col-sm-6">
                <p class="fwP"><strong>Photography Website</strong><br/><br/>This web project was done in a Digital Ocean docker. Front end is all done using HTML and CSS.
                No JS was implemented. The purpose of the project was to implement Bootstrap and learn how to use GitHub in order to push changes to the directory in
                the server </p>
            </div>
            <div class="col-sm-6">
                <a href="http://138.197.219.90/Lab1/lab-1-esdraszx/index.html" target="blank"><img src="../assets/fw3.png" class="fwImg" width="500"></a>
            </div>
        </div>
        <br/><br/><br/>
    </div>
</template>

<script>
import Header from '../components/Header'

export default {
    components: {
        'Header': Header,
    },
}
</script>

<style scoped>
    .project-tile {
        margin: 20px !important;
        padding: 10px;
        box-shadow: 0px 2px 4px rgba(0,0,0,0.1), -3px 2px 4px rgba(0,0,0,0.1), 3px 2px 4px rgba(0,0,0,0.1);
        background-color: white;
        z-index: 1;
    }
</style>