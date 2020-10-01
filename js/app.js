'use strict'
var counter = 0

var userName = prompt('Please enter your name');
var greeting = 'Welcome to Andrews about me ' + userName;
document.write(greeting);

var andrewKitchen = prompt('Has Andrew worked in kitchens?');

if (andrewKitchen.toLowerCase() === 'yes' || andrewKitchen.toLowerCase() === 'y') {
    counter++
    alert('you are correct!');
    // console.log('you are correct')
} else {
    alert('Andrew has worked in kitchens')
    // console.log('Andrew has worked in kitchens');
}

var andrewSober = prompt('Is Andrew in Recovery?');

if (andrewSober.toLowerCase() === 'yes' || andrewSober.toLowerCase() === 'y') {
    counter++;
    alert('you are right!');
    // console.log('you are right!');
} else {
    alert('Andrew has over 5 years sober');
    // console.log('Andrew has over 5 years sober');
}

var andrewInstrument = prompt('Can Andrew play a musical instrument?');

if (andrewInstrument.toLowerCase() === 'yes' || andrewInstrument.toLowerCase() === 'y') {
    counter++;
    alert('Yes, he can play 5 instruments!')
    // console.log('Yes, he can play 5 instruments!');
} else {
    alert('Andrew has been playing instruments since the age of 7 and can play 5 of them');
    // console.log('Andrew has been playing instruments since the age of 7 and can play 5 of them');
}

var andrewDnd = prompt('Does Andrew play Dungeons and Dragons?');

if (andrewDnd.toLowerCase() === 'yes' || andrewDnd.toLowerCase() === 'y') {
    counter++
    alert('Yep! Every Thursday');
    // console.log('Yep! Every Thursday');
} else {
    alert('Sorry, Its one of his favorite hobbies');
    // console log('Sorry, It's one of his favorite hobbies');
}

var andrewHorror = prompt('Does Andrew like Horror movies?');

if (andrewHorror.toLowerCase() === 'yes' || andrewHorror.toLowerCase() === 'y') {
    counter++
    alert('you are correct,' + ' ' + userName)
    // console.log('you are correct,' + ' ' + userName);
} else {
    alert('Andrew loves horror movies' + ' ' + userName);
    // console.log('Andrew loves horror movies' + ' ' + userName);
}
var answer = '7';

for (var i = 1; i <= 4; i++) {
    var userGuess = prompt('Pick a number between 1 and 10');
    if (userGuess === answer) {
        counter++
        alert('You are correct!');
        break;
    }
    else {
        if (userGuess < answer) {
            alert('Too Low');
        }
        else {
            alert('Too High');

        }
        if (i === 4) {
            alert('The correct answer was 7')
        }
    }

}



var favoriteFoods = ['Risotto', 'Duck', 'Tagliatelle', 'Gnocchi', 'Ribeye Steak', 'Crab', 'Brick Oven Pizza', 'Gumbo', 'Jambalaya', 'Cheesecake'];

for (var i = 1; i <= 6; i++) {
    var userGuess = prompt('What is one of Andrews favorite food to cook?');
    if (userGuess === favoriteFoods[i]) {
        counter++
        alert('You are right!');
        break
    }
    else {
        if (userGuess !== favoriteFoods[i]){
            alert('Try Again');
        }
        if (i === 6) {
            alert('Sorry, the correct answers were Risotto, Duck, Tagliatelle, Gnocchi, Ribeye Steak, Crab, Brick Oven Pizza, Gumbo, Jambalaya, and Cheesecake')
        }
    }
}
alert('congrats ' + userName + ' you got ' + counter + ' correct!')
