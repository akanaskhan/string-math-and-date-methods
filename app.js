////----------------------Chapter no.21 - 25----------------------

////---------------------------Q1---------------------------
// var firstName = prompt("Enter your first name: ");
// var lastName = prompt("Enter your last name: ");
// var fullName = firstName + " " + lastName;
// alert(`Welcome ${fullName}`);

////---------------------------Q2---------------------------
// var favMobileModel = prompt('Enter your favourite mobile phone model');
// document.write(`My favourite mobile phone is: ${favMobileModel} <br> Length of string: ${favMobileModel.length}`);

////---------------------------Q3---------------------------
// var word = 'Pakistani';
// var wordIndex = word.indexOf('n');
// document.write(`String: ${word}<br> Index of 'n': ${wordIndex}`);

////---------------------------Q4---------------------------
// var word = 'Hello World';
// var wordIndex = word.lastIndexOf('l');
// document.write(`String: ${word}<br> Index of 'l': ${wordIndex}`);

////---------------------------Q5---------------------------
// var word = 'Pakistani';
// var wordIndex = word.charAt(3);
// document.write(`String: ${word}<br> Character at index 3: ${wordIndex}`);

////---------------------------Q6---------------------------


////---------------------------Q7---------------------------
// var city = 'Hyderabad';
// var newCity = city.replace('Hyder', 'Islam');
// document.write(`City: ${city}<br>After replacement: ${newCity}<br>`);

////---------------------------Q8---------------------------
// var message = 'Ali and Sami are best friends. They play cricket and football together.';
// var replaceMessage = message.replace('and','&');
// document.write(replaceMessage + '<br>')

////---------------------------Q9---------------------------
// var stringNumber = '472'
// var convertString = Number(stringNumber)
// document.write(`Value: ${stringNumber} <br> Type:${typeof stringNumber}<br>Value: ${convertString} <br> Type:${typeof convertString}<br>`);

////---------------------------Q10---------------------------
// var userInput = prompt('Enter a word');
// var covertCapital = userInput.toUpperCase();
// document.write(`User input: ${userInput}<br>Upper case: ${covertCapital}<br>`)

////---------------------------Q11---------------------------
// var userInput = prompt('Enter a word');
// var firstLetter = userInput.slice(0,1).toUpperCase();
// var remainingletter = userInput.slice(1).toLowerCase();
// var final = firstLetter + remainingletter;
// // var covertCapital = userInput.toLocaleUpperCase();
// document.write(`User input: ${userInput}<br>Title case: ${final}<br>`);

////---------------------------Q12---------------------------
// var num = 36.32;
// var str = Math.floor(num).toString();
// document.write(`Number: ${num}<br>String: ${str}`)

////---------------------------Q13---------------------------
// var username = prompt('Enter a username: ');
// if(username.includes('@') || username.includes('!') || username.includes('.') || username.includes(',')){
//     alert(`${username} is not valid.\n Please enter a valid username`);
// }else{
//     alert(`Username is valid`);
// }

////---------------------------Q14---------------------------
// var items = ["cake","apple pie","cookie","chips","patties"]
// var user = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?").toLowerCase();
// var match = false;

// for(i=0; i<=items.length; i++){
//     if(user == items[i]){
//         document.write(`${user} is available at index ${i}`);
//         match = true
//         break
//     }
// }if(!match){
//     document.write(`We are sorry ${user} is not available in our bakery`);
// }
// document.write("<br><br>")

////---------------------------Q15---------------------------
// function validatePassword() {
//     let password;
//     do {
//         password = prompt("Enter your password:");
//         if (/^[a-zA-Z]\w{5,}$/.test(password)) {
//             alert("Password is valid.");
//             break;
//         } else {
//             alert("Invalid password. Please make sure your password meets the following requirements:\n1. It should contain alphabets and numbers\n2. It should not start with a number\n3. It must be at least 6 characters long");
//         }
//     } while(true);
// }

// validatePassword();

////---------------------------Q16---------------------------
// var arr = 'University Of Karachi';
// for(i=0; i<arr.length; i++){
//     document.write(arr[i] + "<br>")
// }

////---------------------------Q17---------------------------
// var user = prompt('Enter a word');
// var lastCharacter = user.charAt(user.length-1);
// document.write(`User Input: ${user}<br>Last Character of input: ${lastCharacter}`);

////---------------------------Q18---------------------------
// var text = "The quick brown fox jumps over the lazy dog";
// var words = text.split(" ");
// var count = 0;
// for (let i = 0; i < words.length; i++) {
//     if (words[i] === "the" || words[i] === "The") {
//         count++;
//     }
// }
// document.write(`There are ${count} occurrence(s) of the word 'the'.`);





////----------------------Chapter no.26 - 30----------------------

////---------------------------Q1---------------------------
// var num = 3.45214;
// document.write(`<br>number: ${num}`);
// document.write(`<br>Round of value: ${Math.round(num)}`);
// document.write(`<br>Floor value: ${Math.floor(num)}`);
// document.write(`<br>Ceil value: ${Math.ceil(num)}`);

////---------------------------Q2---------------------------
// var num = -2.673;
// document.write(`<br>number: ${num}`);
// document.write(`<br>Round of value: ${Math.round(num)}`);
// document.write(`<br>Floor value: ${Math.floor(num)}`);
// document.write(`<br>Ceil value: ${Math.ceil(num)}`);

////---------------------------Q3---------------------------
// var num1 = -4;
// var num2 = 5;
// document.write(`<br>The absolute value of ${num1} is ${Math.abs(num1)}`);
// document.write(`<br>The absolute value of ${num2} is ${Math.abs(num2)}`);

////---------------------------Q4---------------------------
// var randomNum = Math.random()*6;
// document.write(`Random dice value: ${randomNum.toFixed(0)}`);

////---------------------------Q5---------------------------
// var heads = prompt('Enter player one name')
// var tails = prompt('Enter player two name')
// var toss = Math.random()*2;
// var convert = Math.floor(toss)
// if(convert == 0){
//     alert(heads + ' heads wins')
// }else{
//     alert(tails + ' tails wins')
// }

////---------------------------Q6---------------------------
// var randomNum = Math.random()*100;
// document.write(`Random number between 1 and 100: ${randomNum.toFixed(0)}`);

////---------------------------Q7---------------------------
// var weight1 = 50;
// var weight2 = '50kgs';
// var weight3 = '50.2kgs';
// var weight4 = '50.2kilograms';
// var userInputOfWeight = prompt('Enter your weight');
// if(userInputOfWeight == weight1 || userInputOfWeight == weight2 || userInputOfWeight == weight3 || userInputOfWeight == weight4){
//     document.write(`The weight of user is ${userInputOfWeight}`)
// }

////---------------------------Q8---------------------------
// var randomNumber = Math.random()*10;
// var secretNumber = randomNumber.toFixed(0)
// var userInput = prompt('Enter a secret number between 1-10');
// if(userInput == secretNumber){
//     alert('Congratulations you win')
// }else{
//     alert('You loss')
// }





////----------------------Chapter no.31 - 34----------------------

////---------------------------Q1---------------------------
// var date = new Date();
// document.write(date)

////---------------------------Q2---------------------------
// var montharr = ["January", "February", "March", "April", "May", "June", "July", "August", "Septenter", "October", "November","December"]
// var Currentmonth = montharr[new Date().getMonth()]
// document.write(`Current month: ${Currentmonth}`)

////---------------------------Q3---------------------------
// var dayarray = ['Sun','Mon','Tue','Wed','Thur','Fri','Sat']
// var day = dayarray[new Date().getDay()]
// document.write(`Today is ${day}`);

////---------------------------Q4---------------------------
// var day1 = 'Saturday';
// var day2 = 'Sunday';
// var dayarray = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
// var currentDay = dayarray[new Date().getDay()]
// if(currentDay == day1 || currentDay == day2){
//     document.write('Its fun day')
// }

////---------------------------Q5---------------------------
// var day = new Date().getDay();
// if(day < 16){
//     document.write('first fifteen days of month')
// }else{
//     document.write('last fifteen days of month')
// }

////---------------------------Q6---------------------------

////---------------------------Q7---------------------------
// var currentHour = new Date().getHours();
// if(currentHour < 12){
//     alert('Its AM')
// }else{
//     alert('Its PM')
// }
