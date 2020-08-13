<template>
    <div class="content">
        <Header></Header>
        <!-- <h2>Algorithm Visualization</h2>
        <br/> -->

        <div class="options">
            <span @click="handleToggleOption(true)" v-bind:class="{active: toggleOption}">Sorting Algorithms</span>&nbsp;
            <span @click="handleToggleOption(false)" v-bind:class="{active: !toggleOption}">Pathfind Algorithms</span>
        </div>

        <div v-if="toggleOption !== false">
            <div class="algoList">    
                <button v-bind:class="{ activeAlgo: componentName === 'MergeSort'}" @click="handleShowComponent('MergeSort')">Merge Sort</button>
                <button v-bind:class="{ activeAlgo: componentName === 'QuickSort'}">Quick Sort</button>
                <button v-bind:class="{ activeAlgo: componentName === 'BubbleSort'}">Bubble Sort</button>
            </div>

            <div v-if="componentName !== ''" class="algoComponent">
                <component v-bind:is="componentName"></component>
            </div>
            <div v-else>
                <br/>
                <h3>Sorting Algorithms</h3>
                <p> Sorting algorithms explanation and a brief description of how I got the idea.</p>
            </div>
        </div>
        <div v-else>
            <div class="algoList">
                <h3>Pathfinding coming soon</h3>
            </div>
            <br/>
            <p>
                The project is to show how a path finding algorithm works by using a series of animations based on the data collected from the algorithm.
                The objective is to show how the shortest path to a point is found and how the algorithm picks the short option and keeps track of the options that weren't the best
            </p>
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
            toggleOption: true,
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
    padding: 2px 10px 2px 10px;
    margin: 10px;
    border: 2px solid transparent;
    cursor: pointer;
}

.options span:hover {
    border: 2px solid var(--dark-blue);
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

.algoList h3, p {
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

.activeAlgo {
    color: white;
    background-color: var(--dark-blue) !important;
}

.algoComponent {
    margin: 25px auto auto 0%;
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
    border-bottom: 2px solid var(--dark-blue) !important;
}

</style>