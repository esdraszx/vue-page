let problem = document.getElementById('problem')
let solution = document.getElementById('solution')
let drawArea = document.getElementById('solution-draw')
let time = document.getElementById('time')
let arrayElements = 20

document.getElementById('number-elements').addEventListener('keyup', (e) => {
    arrayElements = e.target.value
    console.log(arrayElements)
})

let arrayOfSplit = []
let arrayOfArrays = []

let arrayone = new Set()

const createArray = () => {
    //CREATES ARRAY OF RANDOM NUMBERS FROM 0 to 500
    arrayOfSplit = []
    arrayOfArrays = []
    arrayone.clear()
    problem.innerHTML = ''
    drawArea.innerHTML = ' '
    solution.innerHTML = 'Solution: '
    let counter = 0;
    while(counter < arrayElements){

        let ranNumber = parseInt(Math.random()*(500 - 0) + 0)
        arrayone.add(ranNumber)
        counter = arrayone.size
    }

    arrayone.forEach(element => {
        problem.innerHTML += `<li id="${element}" style="height: ${element * 50 / problem.clientHeight}%; background-color: gray;"></li>` 
    });
}

const triggerSort = () => {
    
    //INITIAL ARRAY IS THE ONE THAT GOT CREATED BY CREATE ARRAY
    let tempArray = Array.from(arrayone)
    console.time()
    
    //TIME DATA IS TO KEEP TRACK OF HOW MANY SECONDS THE ALGORITHM TAKES TO EXECUTE
    let begin = Date.now(); 
    let sorted = mergeSort(tempArray) //CALL MERGE SORT 
    let end = Date.now();

    let timeSpent=`${(end-begin)/1000}secs`;  
    console.timeEnd()
    time.innerText = `Execution time: ${timeSpent}`
    sorted.forEach(element => {
        solution.innerText += ` ${element},`
    });

    //AFTER MERGE SORT HAS FINISHED WE PROCEED WITH THE ANIMATION TO VISUALIZE HOW IT DID IT
    draw(arrayOfArrays, arrayOfSplit)
}

const mergeSort = (array) => {
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
    arrayOfSplit.push(leftArray)
    arrayOfSplit.push(rightArray)

    //CALLING RETURN MERGE ( MERGESORT(PARAM1), MERGESORT(PARAM2) ) MEANS THAT THIS IS GOING TO BE RECURSIVE AND THAT BEFORE RETURNING THE
    //MERGED ARRAYS IT WILL FIRST SPLIT THEM UNTIL IT CAN'T SPLIT ANY MORE AND THEN IT WILL RETURN THE MERGED ARRAYS.
    //THIS WOULD WORK SOMETHING LIKE THIS

    // MERGESORT
    // MERGESORT MERGESORT
    // MERGESORT MERGESORT MERGESORT MERGESORT
    // MERGE MERGE MERGE MERGE
    // MERGE MERGE
    // MERGE
    return merge(mergeSort(leftArray), mergeSort(rightArray))
}

const merge = (left, right) => {
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

    arrayOfArrays.push(left)
    arrayOfArrays.push(right)
    arrayOfArrays.push(merged)

    return merged
}

const draw = async (sorted, unsorted) => {

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
            
            setTimeout(() => {
                sorted[i].forEach((col, j)=> {
                    setTimeout(() => {
                        //FROM THE CURRENT STATE GET THE CURRENT POSITIONS FOR EACH ELEMENT IN THE ARRAY
                        let currState = Array.from(problem.getElementsByTagName('li'))
                        //WE FIND THE INDEX THAT MATCHES THE VALUE THAT WE ARE LOOKING AT
                        let index = currState.findIndex(item => parseInt(item.id) === parseInt(col))
                        //WE FIND THE NEXT INDEX AND IF THAT NEXT INDEX CONTAINS A VALUE LESS THAN OUR VALUE AT INDEX WE NEED TO SWAP THEM
                        let nextIndex = currState.findIndex(item => parseInt(item.id) === parseInt(sorted[i][j + 1]))       
                        
                        if(index > nextIndex && nextIndex !== -1 && index !== -1){
                            problem.getElementsByTagName('li')[index].style.animationName = 'changeColorBlue'
                            
                            problem.getElementsByTagName('li')[index].after(problem.getElementsByTagName('li')[nextIndex])
                        }         
                    }, j * 20);
                
                });
            }, i * 100);
        }
    }, 2000);
}

document.getElementById('merge-sort').addEventListener('click', (e) => triggerSort())

document.getElementById('create-elements').addEventListener('click', (e) => createArray())

