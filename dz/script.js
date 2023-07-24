// const text = 'Привет! Как дела! Давно мы с тобой не виделись.';


// function checkTextOnErrorSymbol (text,errorSymbol,successCallback, errorCallback){
//     const textIndexOf = text.indexOf(errorSymbol)
//     if(textIndexOf === -1){
//         successCallback("В данном тексте нет запрещенных символов")
//     }else(
//         errorCallback(`Найден запрещенный символ "${errorSymbol}" под индексом ${textIndexOf}.`)
//     )
// }
// checkTextOnErrorSymbol(text,"в",showErrorMessage,showSuccessMessage)
// function showSuccessMessage (message){  
//     console.log(message)
// }
// function showErrorMessage (message){
//     console.log(message)
// }




// const hero = {
//     name: 'Batman',
//     health: 100,
//     }
// const enemy = {
//     name: 'Joker',
//     health: 100,
// }
// const health = 10
// while(enemy.health >=0||hero.health >= 0 ){
//     function getRandomNumberInRange(min, max) {
//         return Math.floor(Math.random() * (max - min + 1)) + min;
// }const res = getRandomNumberInRange(0,1)
// enemy.health--;
// hero.health--;
// if(res ===1){
//     if(enemy.health >=0){
//         console.log(enemy)
//     }
// }else if(res===0){
//     if(hero.health >=0){
//         console.log(hero)
//     }
// }
// }
// function itog (hero,enemy,heroname,enemyname){
//     if(hero ===0){
//         alert(`${heroname} победил! У него осталось ${hero} здоровья`)
//     }else if(enemy===0)(
//         alert(`${enemyname} победил! У него осталось ${enemy} здоровья`)        
//     )
// }
// itog(hero.health,enemy.health,hero.name,enemy.name)



// let people1 = ['Samuel', 'Jack', 'Thomas','Henry','Leo','Connor','David','Ryan'];
// let people2 = ['Connor','Stanley','Leo', 'Albert','Owen','Oliver','Ethan','Thomas'];

//3.1

// function people1text (text){
//     const methods = people1.indexOf(text)
//     const methodsd = people1.at(methods)
//     const massmet = people2.push(methodsd)
//     console.log(people2)
// }

// people1text('Samuel')


//3.2
// function people1text(text){
//     const people2IndexOf = people2.indexOf(text)
//     const people2Slice = people2.splice(people2IndexOf,people2IndexOf +1)
//     console.log(people2)
// }

// people1text('Connor')
// 3.3
// function people1text(text){
//     const people3 = people1.concat(people2)
//     let uniq = [];
//     for (let i = 0; i < people3.length; i++) {
//         for (let j = 0; j < i; j++)
//         if (people3[j] === people3[i]) {
//             uniq.push(people3[i])
//         }
//     }
//     console.log(uniq)
// }   
// people1text()

//3.4
        // const people3 = people1.concat(people2)
        // console.log(people3)
        // function reras (text){
        //     for (let i = 0; i < people3.length; i++) {
        //         for (let j = 0; j < i; j++)
        //         if (people3[j] === people3[i]) {
        //         const splice = people3.splice([j],[j]+1)
        //         }
        //     }
//4

// let gets = 0
// const number = document.querySelector('.number');
// number.textContent = gets;
//         const button1 = document.querySelector(".button")
// button1.addEventListener("click",()=>{
//         let gets = getRandomNumberInRange(0,100)
//         console.log(gets)
//         function getRandomNumberInRange(min, max) {
//                 return Math.floor(Math.random() * (max - min + 1)) + min;
//                 }
// const number = document.querySelector('.number');
// number.textContent = gets;
// })






