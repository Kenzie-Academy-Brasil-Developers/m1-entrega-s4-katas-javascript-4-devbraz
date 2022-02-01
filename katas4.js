const gotCitiesCSV = "King's Landing,Braavos,Volantis,Old Valyria,Free Cities,Qarth,Meereen";

const lotrCitiesArray = ["Mordor","Gondor","Rohan","Beleriand","Mirkwood","Dead Marshes","Rhun","Harad"];

const bestThing = "The best thing about a boolean is even if you are wrong you are only off by a bit";

function showResults(arr, title) {

    const result = document.getElementById('results')

    result.innerHTML = ""

    const titleKata = document.createElement('h2')
    titleKata.innerHTML = title

    const paragraphResult = document.createElement('p')
    paragraphResult.innerHTML =  JSON.stringify(arr)

    result.appendChild(titleKata)
    result.appendChild(paragraphResult)

}

function kata1() {

    let replaced = gotCitiesCSV.replaceAll(',', '$& ') 
    let re = /\s*;\s*/
    let nameList = replaced.split(re)

    showResults(nameList, 'Kata 1')

}

const buttonKata1 = document.getElementById('kata1')
buttonKata1.addEventListener('click', kata1)

function kata2() {

    let splited = bestThing.split(' ')

    showResults(splited, 'Kata 2')

}

const buttonKata2 = document.getElementById('kata2')
buttonKata2.addEventListener('click', kata2)

function kata3() {

    let replaced = gotCitiesCSV.replaceAll(',', '.,') 
    let re = /\s*;\s*/
    let nameList = replaced.split(re)

    showResults(nameList, 'Kata 3')

}

const buttonKata3 = document.getElementById('kata3')
buttonKata3.addEventListener('click', kata3)

function kata4() {

    let string = lotrCitiesArray.toString()
    let replaced = string.replaceAll(',', ', ') 

    showResults(replaced, 'Kata 4')

}

const buttonKata4 = document.getElementById('kata4')
buttonKata4.addEventListener('click', kata4)

function kata5() {
    
    let fiveFirstCities = lotrCitiesArray.slice(0, 5)


    showResults(fiveFirstCities, 'Kata 5')

}

const buttonKata5 = document.getElementById('kata5')
buttonKata5.addEventListener('click', kata5)

function kata6() {
    
    let fiveLastCities = lotrCitiesArray.slice(3)


    showResults(fiveLastCities, 'Kata 6')

}

const buttonKata6 = document.getElementById('kata6')
buttonKata6.addEventListener('click', kata6)

function kata7() {
    
    let cities = lotrCitiesArray.slice(2, 5)


    showResults(cities, 'Kata 7')

}

const buttonKata7 = document.getElementById('kata7')
buttonKata7.addEventListener('click', kata7)


function kata8() {
    
    lotrCitiesArray.splice(2, 1)

    showResults(lotrCitiesArray, 'Kata 8')

    lotrCitiesArray.splice(2, 0, 'Rohan')

}

const buttonKata8 = document.getElementById('kata8')
buttonKata8.addEventListener('click', kata8)

function kata9() {
    
    lotrCitiesArray.splice(6, 2)

    showResults(lotrCitiesArray, 'Kata 9')

    lotrCitiesArray.splice(6, 0, "Rhun","Harad")

}

const buttonKata9 = document.getElementById('kata9')
buttonKata9.addEventListener('click', kata9)

function kata10() {
    
    lotrCitiesArray.splice(2, 1)
    lotrCitiesArray.splice(2, 0, 'Rohan')

    showResults(lotrCitiesArray, 'Kata 10')

}

const buttonKata10 = document.getElementById('kata10')
buttonKata10.addEventListener('click', kata10)

function kata11() {
    
    lotrCitiesArray.splice(5, 1)
    lotrCitiesArray.splice(5, 0, 'Deadest Marshes')

    showResults(lotrCitiesArray, 'Kata 11')

}

const buttonKata11 = document.getElementById('kata11')
buttonKata11.addEventListener('click', kata11)

function kata12() {
    
    let slice = bestThing.slice(0, 14)

    showResults(slice, 'Kata 12')

}

const buttonKata12 = document.getElementById('kata12')
buttonKata12.addEventListener('click', kata12)

function kata13() {
    
    let slice = bestThing.slice(bestThing.length-12, bestThing.length)

    showResults(slice, 'Kata 13')

}

const buttonKata13 = document.getElementById('kata13')
buttonKata13.addEventListener('click', kata13)

function kata14() {
    
    let slice = bestThing.slice(23, 38)

    showResults(slice, 'Kata 14')

}

const buttonKata14 = document.getElementById('kata14')
buttonKata14.addEventListener('click', kata14)

function kata15() {
    
    let sub = bestThing.substring(bestThing.length-12, bestThing.length)

    showResults(sub, 'Kata 15')

}

const buttonKata15 = document.getElementById('kata15')
buttonKata15.addEventListener('click', kata15)

function kata16() {
    
    let sub = bestThing.substring(23, 38)

    showResults(sub, 'Kata 16')

}

const buttonKata16 = document.getElementById('kata16')
buttonKata16.addEventListener('click', kata16)

function kata17() {
    
    let pop = lotrCitiesArray.pop()

    showResults(lotrCitiesArray, 'Kata 17')

    lotrCitiesArray.push(pop)

}

const buttonKata17 = document.getElementById('kata17')
buttonKata17.addEventListener('click', kata17)

function kata18() {
    
    let pop = lotrCitiesArray.pop()
    lotrCitiesArray.push(pop)

    showResults(lotrCitiesArray, 'Kata 18')

}

const buttonKata18 = document.getElementById('kata18')
buttonKata18.addEventListener('click', kata18)

function kata19() {
    
    let shift = lotrCitiesArray.shift()
    

    showResults(lotrCitiesArray, 'Kata 19')

    lotrCitiesArray.unshift(shift)

}

const buttonKata19 = document.getElementById('kata19')
buttonKata19.addEventListener('click', kata19)

function kata20() {
    
    let shift = lotrCitiesArray.shift()
    lotrCitiesArray.unshift(shift)

    showResults(lotrCitiesArray, 'Kata 20')

}

const buttonKata20 = document.getElementById('kata20')
buttonKata20.addEventListener('click', kata20)