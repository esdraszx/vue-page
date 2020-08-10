<template>
    <div class="content">
        <Header></Header>
        <h2>Algorithm Visualization</h2>
        <br/>

        <div class="options">
            <span @click="handleToggleOption(true)" v-bind:class="{active: toggleOption}">Sorting Algorithms</span>&nbsp;
            <!-- <span @click="handleToggleOption(false)" v-bind:class="{active: !toggleOption}">Pathfind Algorithms</span> -->
        </div>

        <!-- <div v-if="toggleOption !== false" class="algoList"> -->
        <div class="algoList">    
            <button @click="handleShowComponent('MergeSort')">Merge Sort</button>
            <!-- <button >Quick Sort</button> -->
            <!-- <button >Bubble Sort</button> -->
        </div>
        <!-- <div v-else class="algoList">
            <p>Pathfinding soon</p>
        </div> -->

        <div v-if="componentName !== ''" class="algoComponent" >
            <component v-bind:is="componentName"></component>
        </div>

        

        <!-- <div>
            <input type='number' placeholder='# elements' id='number-elements'/>
            <button id='create-elements'>Create Array</button><span>&nbsp; Numbers from 0 to 500</span>
        
            <h2>Unsorted Array: </h2>
            <ul id='problem'></ul>
            <button id='merge-sort'>Merge Sort</button>
            <button id='quick-sort'>Quick Sort</button>
            <button id='bubble-sort'>Bubble Sort</button>
            <br/>
            
            <h1 id='time'>Solution Execution time: </h1>
            <ul id='solution-draw' style="height: 10px;">
            </ul>
            <h2 id='solution'>Solution: </h2>
        </div> -->
    </div>
</template>

<script>

import MergeSort from '../components/MergeSort'
import Header from '../components/Header'

export default {
    name: 'Algorithm',
    data (){
        return {
            toggleOption: false,
            message: 'hi there',
            componentName: '',
        }
    },
    methods: {
        handleToggleOption (bool) {
            //window.console.log('called toogl')
            this.toggleOption = bool
        },
        handleShowComponent (name) {
            //window.console.log('called toogl')
            this.componentName = name
        }
    },
    components: {
        MergeSort: MergeSort,
        Header: Header,
    },
}

</script>

<style scoped>


input:focus, button:focus {
  outline: none !important;
}

.options {
    font-size: 1.6rem;
    width: 100%;
}

.options span {
    padding: 2px;
    margin: 10px;
    border-bottom: 1px solid black;
    cursor: pointer;
}

.algoList {
    width: 80%;
    margin-left: 10%;
    margin-top: 20px;
    /* border: 1px solid red; */
    display: flex;
    height: 50px;
    transition: .5s ease;

}

.algoList p {
    margin: auto;
}

.algoList button {
    width: 140px;
    height: 40px;
    margin: auto;
    border: 2px solid var(--dark-blue);
    background-color: transparent;
    transition: .5s ease;
    font-weight: bold;
    cursor: pointer;
}

.algoList button:hover {
    color: white;
    background-color: var(--dark-blue);
    
}

.algoComponent {
    margin: 25px auto auto 0%;
    border: 1px solid yellow;
    background-color: white;
    width: 100%;
    height: 600px;
    overflow-y: scroll;
    padding-top: 25px;
    border-radius: 0px;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.3), 0px 0px 5px rgba(0, 0, 0, 0.3);
}

/* width */
.algoComponent::-webkit-scrollbar {
  width: 5px;
}

/* Track */
.algoComponent::-webkit-scrollbar-track {
  background: var(--dark-blue);
}

/* Handle */
.algoComponent::-webkit-scrollbar-thumb {
  background: var(--light-blue);
}

/* Handle on hover */
.algoComponent::-webkit-scrollbar-thumb:hover {
  background: rgb(15, 216, 223);
}

.active {
    border-bottom: 2px solid black !important;
}

</style>