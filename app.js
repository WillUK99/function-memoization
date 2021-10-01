//See readme for breakdown

// isPrime function that will remember its computed values and store prime numbers within its cache
function isPrime(num) {
    if (!isPrime.answers) {
        isPrime.answers = {}
    }

    if (isPrime.answers[num] !== undefined) {
        return isPrime.answers[num]
    }

    var prime = num !== 1 // 1 is not a prime number...

    for (var i = 2; i < num; i++) {
        if (num % i === 0) {
            prime = false
            break
        }
    }
    return isPrime.answers[num] = prime
}



isPrime(3)
isPrime(6)
isPrime(97)
isPrime(66)
isPrime(37)

console.log(isPrime.answers)


