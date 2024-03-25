// Write your solution here!
let cats =[ "Milo","Otis","Garfield"]

before(function(){
    cats.length = 0
    cats.push("Milo","Otis","Garfield")
})

function destructivelyAppendCat(name){
    cats.push(name)
}
destructivelyAppendCat(Ralph)

function destructivelyRemoveLastCat(){
    cats.pop()
}
destructivelyRemoveLastCat()

function destructivelyPrependCat(name){
    cats.unshift(name)
}
destructivelyPrependCat(Bob)

function destructivelyRemoveFirstCat(){
    cats.shift()
}
destructivelyRemoveFirstCat()

function appendCat(){
    let newCats = [... cats,"Broom"]
    return newCats
}

function prependCat(){
    let newCats = ["Arnold",... cats]
    return newCats
}

function removeLastCat(){
    return cats.slice(0,-1)

}

function removeFirstCat(){
    return cats.slice(1)
}


