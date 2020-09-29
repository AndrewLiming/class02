'use strict'

var userName = prompt('Please enter your name');
var greeting = 'Welcome to Andrews about me ' + userName; 
  document.write(greeting);

var andrewKitchen=prompt('Has Andrew worked in kitchens?');

if(andrewKitchen.toLowerCase() === 'yes' || andrewKitchen.toLowerCase() === 'y'){
    alert('you are correct!')
} else {
    alert('Andrew has worked in kitchens');
}

var andrewSober=prompt('Is Andrew in Recovery?');

if(andrewSober.toLowerCase() === 'yes' || andrewSober.toLowerCase() === 'y'){
    alert('you are right!')
} else {
    alert('Andrew has over 5 years sober');
}

var andrewInstrument=prompt('Can Andrew play a musical instrument?');

if(andrewInstrument.toLowerCase() === 'yes' || andrewInstrument.toLowerCase() === 'y'){
    alert('Yes, he can play 5 instruments!')
} else {
    alert('Andrew has been playing instruments since the age of 7 and can play 5 of them');
}

var andrewDnd=prompt('Does Andrew play Dungeons and Dragons?');

if(andrewDnd.toLowerCase() === 'yes' || andrewDnd.toLowerCase() === 'y'){
    alert('Yep! Every Thursday')
} else {
    alert('Sorry, Its one of his favorite hobbies');
}

var andrewHorror=prompt('Does Andrew like Horror movies?');

if(andrewHorror.toLowerCase() === 'yes' || andrewHorror.toLowerCase() === 'y'){
    alert('you are correct, ' + userName)
} else {
    alert('Andrew loves horror movies ' + userName);
}