# Function memoization

This is a self-memoizing function -> function that can remember previous computed values

## How it works 

First we declare a function we wish to have the *memoization feature*, in this example 
we want to memoize prime numbers ```function isPrime(num) {}```. 

~~~~~~~~~~~~~~~~~~~~~~~~

The first part of this function is an if statement in order to create our *answers cache*
as an object in which we will store the prime number answers. This is created on the first 
call to the ```isPrime()``` function and will persist for as long as the function lives.

We can create a property on a function due to functions being *first class objects* within JS. Which allows us to have this capability within this function :).

```
if (!isPrime.answers) {
    isPrime.answers = {}
}
```
~~~~~~~~~~~~~~~~~~~~~~~~

The next code block checks this cache we've just created to see if the number passed as an argument to the function has been calculated before.

If it has then its value will be returned and code exec will stop. 

```
if (isPrime.answers[num] !== undefined) {
        return isPrime.answers[num]
    }
```

~~~~~~~~~~~~~~~~~~~~~~~~

```var prime = num !== 1``` is a crucial part of this function as it creates a truthy value as long as the number passed to it is not === 1 if it is === 1 then prime = false else 
prime === true

This piece of code could also be written as:

```
if (num === 1) {
    prime = false
} else {
    prime = true
}
```

So if you were to ```console.log(prime)``` after this variable it will always evaluate to 
true (unless num === 1).

*We dont use the if statement as it is much more code.*

~~~~~~~~~~~~~~~~~~~~~~~~

If the number passed to the function is not in the cache then the following logic will check
to see if that number is or is not a prime number.

```
for (var i = 2; i < num; i++) {
        if (num % i === 0) {
            prime = false
            break
        }
    }
```

This logic just checks to see if the number is not prime. If the number is not prime then 
```prime = false``` else prime = true 

~~~~~~~~~~~~~~~~~~~~~~~~

Finally we ```return isPrime.answers[num] = prime```. This returns the value to the answers
cache we created all the way at the top of the function. This number is stored with the key being the number arguument and the value is either true or false.

## HOORAY we have just made a function that can remember its previous values. 



