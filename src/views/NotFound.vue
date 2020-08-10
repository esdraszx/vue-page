<template>
    <div class="content">
        <Header></Header>
		<h1>WOW! Page not found: 404!</h1>
        <img src="../assets/dog.gif"/>
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
    img {
        width: 50%;
    }

    @media only screen and (max-width: 800px){
        img {
            width: 100%;
        }
    }
</style>
