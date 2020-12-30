<template>
    <div>
        <div>
					<!-- <input type='number' placeholder='# elements' id='number-elements'/> -->
					<div class="header" style="display: flex;">
						<h3>Unsorted Array 0 - 299: </h3>
					</div>
					<ul ref='problem' id="problem">
						<li v-for="pro in problem" :key="pro" :id="pro" :style="{height: `${pro}px`,}"></li>
					</ul>
					<button id='create-elements' @click="createArray()">Mix Array</button>&nbsp;
					<button ref='merge-sort' @click="triggerSort()">Merge Sort</button>
					<br/>
					
					<h3 ref='time'>Solution Execution time: {{ time }}</h3>
					<p>The animation time is independent from the algorithm time</p>
					<div id="solution">
						<span v-for="val in solution" :key="val"> {{val}} </span>
					</div>
        </div>
    </div>
</template>

<script>

export default {
  name: 'MergeSort',
  data(){
		return {
			problem: [],
			solution: [],
			time: '',
			arrayElements: 300,
			arrayOfSplit: [],
			arrayOfArrays: [],
			arrayone: new Set(),
			stopRun: false,
		}
  },
	mounted(){
		this.createArray()
	},
	methods: {
		triggerSort(){
			window.console.log('trigger sort')
			//INITIAL ARRAY IS THE ONE THAT GOT CREATED BY CREATE ARRAY
			let tempArray = Array.from(this.arrayone)
			this.stopRun = false
			//console.time()
			
			//TIME DATA IS TO KEEP TRACK OF HOW MANY SECONDS THE ALGORITHM TAKES TO EXECUTE
			let begin = Date.now(); 
			let sorted = this.mergeSort(tempArray) //CALL MERGE SORT 
			let end = Date.now();

			let timeSpent=`${(end-begin)/1000}secs`;  
			//console.timeEnd()
			this.time = timeSpent
			
			this.solution = sorted

			//AFTER MERGE SORT HAS FINISHED WE PROCEED WITH THE ANIMATION TO VISUALIZE HOW IT DID IT
			this.draw(this.arrayOfArrays, this.arrayOfSplit)
		},
		createArray(){
			this.stopRun = true
			window.console.log('create array')
			var highestTimeoutId = setTimeout(";");
			for (var i = 0 ; i < highestTimeoutId ; i++) {
					clearTimeout(i); 
			}
			//CREATES ARRAY OF RANDOM NUMBERS FROM 0 to 500
			this.arrayOfSplit = []
			this.arrayOfArrays = []
			this.problem = []
			this.solution = []
			this.arrayone.clear()
			this.time = ''
			let counter = 0;
			let columns = 300;
			if(window.innerWidth < 1000){
				this.arrayElements = 100
				columns = 100
			}
			while(counter < this.arrayElements){

				let ranNumber = parseInt(Math.random()*(columns - 0) + 0)
				this.arrayone.add(ranNumber)
				counter = this.arrayone.size
				//window.console.log(counter)
			}

			this.arrayone.forEach(element => {
				//window.console.log(element)
				this.problem.push(element)
			});
		},
		mergeSort(array){
			//MERGE SORT SPLIT ARRAY INTO TWO DIFFERENT ARRAYS UNTIL ARRAY SIZES ARE OF ONE, 
			//THIS CAN BE DONE BY CALLING RECURSIVELY THE MERGE SORT FUNCTION AND ANALYZING THE TWO CHILD ARRAYS
			
			
			//STEP ONE. ANALYZE ARRAY
			if(array.length < 2){
					//THERE IS ONE SINGLE ELEMENT IN THE ARRAY SO IT IS CONSIDERED SORTED
					return array;
			}

			//STEP TWO, SPLIT ARRAY IN THE MIDDLE
			let middle = Math.floor(array.length / 2)

			let leftArray = array.slice(0, middle)
			let rightArray = array.slice(middle)

			//THIS IS TO KEEP TRACK OF ALL THE STEPS SO WE CAN DO THE ANIMATION LATER AND WE DO NOT DELAY THE SORTING TIME
			this.arrayOfSplit.push(leftArray)
			this.arrayOfSplit.push(rightArray)

			//CALLING RETURN MERGE ( MERGESORT(PARAM1), MERGESORT(PARAM2) ) MEANS THAT THIS IS GOING TO BE RECURSIVE AND THAT BEFORE RETURNING THE
			//MERGED ARRAYS IT WILL FIRST SPLIT THEM UNTIL IT CAN'T SPLIT ANY MORE AND THEN IT WILL RETURN THE MERGED ARRAYS.
			//THIS WOULD WORK SOMETHING LIKE THIS

			// MERGESORT
			// MERGESORT MERGESORT
			// MERGESORT MERGESORT MERGESORT MERGESORT
			// MERGE MERGE MERGE MERGE
			// MERGE MERGE
			// MERGE
			return this.merge(this.mergeSort(leftArray), this.mergeSort(rightArray))
		},
		merge(left, right){
			//ANALYZE BOTH ARRAYS
			let sortedChilds = []
			let leftIndex = 0
			let rightIndex = 0

			//FIND THE SMALLEST VALUE OF EACH OF THE ARRAYS
			while(leftIndex < left.length && rightIndex < right.length){
				
				if(left[leftIndex] <= right[rightIndex]){
					// console.log(`${left[leftIndex]} is smaller than ${right[rightIndex]}`)
					sortedChilds.push(left[leftIndex])

					leftIndex++
				}
				else {
					// console.log(`${right[rightIndex]} is smaller than ${left[leftIndex]}`)
					sortedChilds.push(right[rightIndex])
					
					rightIndex++
					}
			}
			//RETURN AN ARRAY THAT IS SORTED. THIS MOST LIKELY WILL RETURN A SINGLE NUMBER AND THEN THE NEXT RECURSIVE CYCLE IT WILL 
			//MERGE THAT NUMBER WITH ANOTHER SINGLE NUMBER. AS ARRAYS GET N > 1 THE ARRAYS WILL BE SORTED AND THE BY THE WHILE LOOP

			//IN CASE THAT THERE WAS A NUMBER LEFT IN EITHER LEFT OR RIGHT ARRAY WE CONCAT THOSE INTO THE RESULTING ARRAY
			let merged = sortedChilds.concat(left.slice(leftIndex)).concat(right.slice(rightIndex))

			this.arrayOfArrays.push(left)
			this.arrayOfArrays.push(right)
			this.arrayOfArrays.push(merged)

			return merged
		},
		draw(sorted, unsorted){

			// window.console.log(document.getElementById('problem').getElementsByTagName('li'))
			// window.console.log('%c sorted', 'color: red;', sorted)
			// window.console.log('%c unsorted', 'color: blue;', unsorted)

			let problemArray = document.getElementById('problem')

			//FIRST WE NEED TO SHOW HOW WE LOOK AT THE ARRAYS AND IN WHICH ORDER WE LOOKED AT THEM
			//SO FOR EVERY ARRAY THAT WE SPLIT WE MAKE IT HIGHLIGHT RED
			for (let i = 0; i < unsorted.length; i++) {
				setTimeout(() => {
					unsorted[i].forEach((col, j)=> {
						setTimeout(() => {
						document.getElementById(`${col}`).style.animationName = 'changeColor' 
						}, j * 300);    
					});
				}, i*30);
			}

			//AFTER THE ANALYZE THE ARRAYS WE START TO MOVE THEM FROM ONE PLACE TO THE OTHER. SO WE NEED TO ANIMATE THE INDEX CHANGE OF VALUE "X"
			//VALUE "X" IS MOVED FROM INDEX n TO INDEX m SO WE NEED TO KNOW WHICH IS n AND WHICH IS m SO WE CAN ANIMATE THE CHANGE 
			setTimeout(() => {
				for (let i = 0; i < sorted.length; i++) {
					if(this.stopRun !== false){
						return 0
					}
					setTimeout(() => {
						sorted[i].forEach((col, j)=> {
							setTimeout(() => {
								//FROM THE CURRENT STATE GET THE CURRENT POSITIONS FOR EACH ELEMENT IN THE ARRAY
								let currState = Array.from(problemArray.getElementsByTagName('li'))
								//WE FIND THE INDEX THAT MATCHES THE VALUE THAT WE ARE LOOKING AT
								let index = currState.findIndex(item => parseInt(item.id) === parseInt(col))
								//WE FIND THE NEXT INDEX AND IF THAT NEXT INDEX CONTAINS A VALUE LESS THAN OUR VALUE AT INDEX WE NEED TO SWAP THEM
								let nextIndex = currState.findIndex(item => parseInt(item.id) === parseInt(sorted[i][j + 1]))       
								
								if(index > nextIndex && nextIndex !== -1 && index !== -1){
									problemArray.getElementsByTagName('li')[index].style.animationName = 'changeColorBlue'
									
									problemArray.getElementsByTagName('li')[index].after(problemArray.getElementsByTagName('li')[nextIndex])
								}         
							}, j * 10);
						
						});
					}, i * 50);
				}
			}, 500)
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

	input:focus, button:focus {
	outline: none !important;
	}

	.header {
		position: relative;
		margin: auto;
		justify-content: center;
		align-items: center;
	}

	.header span {
		position: absolute;
		right: 30px;
	}

	#solution {
		font-size: 15px;
		text-align: left;
		padding: 2px;
	}

	ul {
		width: 90%;
		height: 300px;
		list-style: none;
		transition: .2s ease;
		display: flex;
	}

	li {
		width: 2px;
		margin-left: 1px;
		transition: 2s ease;
		position: relative;
		animation-duration: 2s;
		background-color: var(--blue);
	}

	button {
		background-color: var(--blue);
		border: 2.5px solid var(--blue);
		width: 120px;
		cursor: pointer;
		transition: .5s ease;
		font-weight: 600;
	}

	button:hover {
		border: 2.5px solid var(--light-blue);
	}

	@media only screen and (max-width: 600px){
		ul {
			height: 100px;
		}
	}
</style>
