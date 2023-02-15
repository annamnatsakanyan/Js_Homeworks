// grouped anagram words array

let arr = ["arc", "angel", "night", "players", "grab", "thngi", "cra", "rsealpy", "lgean", "brag"]

let words = ""
let groupedArr = []
let sortedArr = []
for ( let i = 0; i < arr.length; i++ ) {
    words = arr[i].split("").sort().join("")
    sortedArr.push(words)
}

for (let i = 0; i < sortedArr.length; i++) {
    for (let j = i + 1; j < sortedArr.length; j++) {
        if (sortedArr[i] === sortedArr[j]) {
            groupedArr.push(sortedArr[i], sortedArr[j])
        }
    }
}
console.log(groupedArr)


// capitalize first letters of sentence

let sentence = "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source."
let firstLettersUpper = []
let array = sentence.split(" ")

for (let i = 0; i < array.length; i++) {
    array[i] = array[i].charAt().toUpperCase() + array[i].slice(1)
}

firstLettersUpper = array.join(" ")
console.log(firstLettersUpper)
