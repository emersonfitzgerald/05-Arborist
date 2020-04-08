//create an array with 4 trees listed
const trees = ['oak', 'Pine', 'aspen', 'Bald Cypress']
const errorElement = document.querySelector('#error')
const displayResults = document.querySelector('#displayResults')

//Display the list of trees inside the displayResults div
const listTrees = () => {
    let treeList = ''
    trees.forEach(tree => {
        treeList += `${tree} <br>`
    })
    displayResults.innerHTML = `${treeList} <span>${trees.length} elements long</span>`
}

listTrees()

document.querySelector('#add_redwood').onclick = () => {
    trees.push('redwood')
    listTrees()
    CheckIfZero()
}

//add pear to the start

document.querySelector('#add_pear').onclick = () => {
    trees.unshift('Pear')
    listTrees()
    CheckIfZero()
}

document.querySelector('#remove_tree1').onclick = () => {
    if (trees.length > 0) {
        trees.shift()
        listTrees()
    } else {
        // errorElement.textContent = 'I cannot remove the first tree cause there are no trees'
        CheckIfZero('I cannot remove the first tree cause there are no trees', 0)
    }
}

document.querySelector('#remove_tree2').onclick = () => {
    if (trees.length > 1) {
        trees.splice(1, 1)
        listTrees()
        console.log(trees.length)

    }
    else {
        // errorElement.textContent = 'I cannot remove the second tree cause there are no trees'
        CheckIfZero('I cannot remove the second tree because there is less than two trees', 2)
    }
}


document.querySelector('#remove_treeLast').onclick = () => {
    if (trees.length > 0) {
        trees.pop()
        listTrees()
    } else {
        // errorElement.textContent = 'I cannot remove the last tree cause there are no trees'
        CheckIfZero('I cannot remove the last tree cause there are no trees', 0)
    }
}

document.querySelector('#sortTrees').onclick = () => {
    if (trees.length > 0) {
        trees.sort()
        listTrees()
    } else
        CheckIfZero('I cannot sort the trees because there are no trees', 0)
}

document.querySelector('#lowerTrees').onclick = () => {
    if (trees.length > 0) {
        console.log("click")
        var sorted = [];
        for (var i = 0; i < trees.length; i++) {
            sorted.push(trees[i].toLowerCase());
            trees.splice(i, 1, sorted[i])
        }

        sorted.sort();
        listTrees()
        // console.log(sorted)
    } else
        CheckIfZero('I cannot make all the trees lowercase because there are no trees', 0)
}

document.querySelector('#showName3').onclick = () => {
    console.log(trees)
    if (trees.length > 1) {
        // trees[2]
        listTrees()
        document.getElementById("numberThree").innerHTML = trees[2];
    } else 
    console.log('hello')
    CheckIfZero('I cannot give the third tree because there is less than three trees',2);
    // document.getElementById("numberThree").innerHTML = undefined;
    // document.getElementById("numberThree").innerHTML = no third tree;
}

document.querySelector('#showName4').onclick = () => {
    console.log(trees)
    if (trees.length > 2) {
        // trees[3]
        listTrees()
        document.getElementById("numberFour").innerHTML = trees[3];
    } else 
    console.log('hi')
    CheckIfZero('I cannot give the fourth tree because there is less than four trees',3);
    // document.getElementById("numberFour").innerHTML = undefined;
    // document.getElementById("numberFour").innerHTML = no fourth tree;
}



    function CheckIfZero(errorMessage, numberToCheck) {

        if (trees.length <= numberToCheck) {
            errorElement.textContent = errorMessage

        } else {
            errorElement.textContent = ""
        }

    }