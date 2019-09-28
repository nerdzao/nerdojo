
for(var i = 0; i <= 100; i++) {
    if(i % 3 == 0 && i % 5 == 0) {
        console.log('FizzBuzz');
        continue;
    }

    if(i % 3 == 0) {
        console.log('Fizz');
        continue;
    }

    if(i % 5 == 0) {
        console.log('Buzz');
        continue;
    }

    console.log(i);
}
