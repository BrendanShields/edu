Refactoring for performance optimization - GitHub Docs

[Skip to main content](#main-content)

[GitHub Docs](/en)

Version: Free, Pro, & Team

Search or ask Copilot

Search or askCopilot

Select language: current language is English

Search or ask Copilot

Search or askCopilot

Open menu

Open Sidebar

# Refactoring for performance optimization

Copilot Chat can suggest ways to speed up slow-running code.

Copy as Markdown

## In this article

Existing code may function correctly but be inefficient, leading to performance bottlenecks. Examples of coding that can adversely impact performance include inefficient loops, unnecessary computations, and excessive memory allocation.

Copilot Chat can identify performance hotspots and suggest refactoring strategies such as optimizing data structures (for example, using hashmaps instead of arrays), reducing redundant calculations, and improving algorithmic efficiency. It can also recommend caching mechanisms or parallelizing operations to improve performance.

## [Example scenario](#example-scenario)

The following Python code prints every 1000th prime number up to the 10,000th prime. It includes a timer, and prints how long the code takes to run as the last line of the output. The program takes several seconds to complete.

```python
import time

def is_prime(n):
    if n <= 1:
        return False
    for i in range(2, n):
        if n % i == 0:
            return False
    return True

def every_1000th_prime():
    primes = []
    num = 2
    while len(primes) < 10000:
        if is_prime(num):
            primes.append(num)
        num += 1
    return [primes[i] for i in range(999, 10000, 1000)]

if __name__ == "__main__":
    start_time = time.time()
    primes = every_1000th_prime()
    for prime in primes:
        print(prime)
    end_time = time.time()
    elapsed_time = end_time - start_time
    print(f"Time taken: {elapsed_time:.10f} seconds")
```

## [Example prompt](#example-prompt)

Copilot prompt[](https://github.com/copilot?prompt=import%20time%0A%0Adef%20is_prime\(n\)%3A%0A%20%20%20%20if%20n%20%3C%3D%201%3A%0A%20%20%20%20%20%20%20%20return%20False%0A%20%20%20%20for%20i%20in%20range\(2%2C%20n\)%3A%0A%20%20%20%20%20%20%20%20if%20n%20%25%20i%20%3D%3D%200%3A%0A%20%20%20%20%20%20%20%20%20%20%20%20return%20False%0A%20%20%20%20return%20True%0A%0Adef%20every_1000th_prime\(\)%3A%0A%20%20%20%20primes%20%3D%20%5B%5D%0A%20%20%20%20num%20%3D%202%0A%20%20%20%20while%20len\(primes\)%20%3C%2010000%3A%0A%20%20%20%20%20%20%20%20if%20is_prime\(num\)%3A%0A%20%20%20%20%20%20%20%20%20%20%20%20primes.append\(num\)%0A%20%20%20%20%20%20%20%20num%20%2B%3D%201%0A%20%20%20%20return%20%5Bprimes%5Bi%5D%20for%20i%20in%20range\(999%2C%2010000%2C%201000\)%5D%0A%0Aif%20__name__%20%3D%3D%20%22__main__%22%3A%0A%20%20%20%20start_time%20%3D%20time.time\(\)%0A%20%20%20%20primes%20%3D%20every_1000th_prime\(\)%0A%20%20%20%20for%20prime%20in%20primes%3A%0A%20%20%20%20%20%20%20%20print\(prime\)%0A%20%20%20%20end_time%20%3D%20time.time\(\)%0A%20%20%20%20elapsed_time%20%3D%20end_time%20-%20start_time%0A%20%20%20%20print\(f%22Time%20taken%3A%20%7Belapsed_time%3A.10f%7D%20seconds%22\)%0A%0AOptimize%20this%20code%20for%20performance)

Optimize this code for performance

import time

def is\_prime(n):
    if n <= 1:
        return False
    for i in range(2, n):
        if n % i == 0:
            return False
    return True

def every\_1000th\_prime():
    primes = \[\]
    num = 2
    while len(primes) < 10000:
        if is\_prime(num):
            primes.append(num)
        num += 1
    return \[primes\[i\] for i in range(999, 10000, 1000)\]

if \_\_name\_\_ == "\_\_main\_\_":
    start\_time = time.time()
    primes = every\_1000th\_prime()
    for prime in primes:
        print(prime)
    end\_time = time.time()
    elapsed\_time = end\_time - start\_time
    print(f"Time taken: {elapsed\_time:.10f} seconds")

Optimize this code for performance

```copilot
Optimize this code for performance
```

## [Example response](#example-response)

Copilot suggests using a sieve function to generate the prime numbers much more efficiently. If you run this program it will complete in a fraction of a second.

Note

Copilot Chat responses are non-deterministic, so you may get a different response from the one shown here.

```python
import time

def sieve_of_eratosthenes(limit):
    sieve = [True] * (limit + 1)
    sieve[0] = sieve[1] = False
    for start in range(2, int(limit**0.5) + 1):
        if sieve[start]:
            for multiple in range(start*start, limit + 1, start):
                sieve[multiple] = False
    return [num for num, is_prime in enumerate(sieve) if is_prime]

def every_1000th_prime():
    limit = 105000  # Higher than needed to ensure 10,000 primes
    primes = sieve_of_eratosthenes(limit)
    return [primes[i] for i in range(999, 10000, 1000)]

if __name__ == "__main__":
    start_time = time.time()
    primes = every_1000th_prime()
    for prime in primes:
        print(prime)
    end_time = time.time()
    elapsed_time = end_time - start_time
    print(f"Time taken: {elapsed_time:.10f} seconds")
```

## [Further reading](#further-reading)

-   [Prompt engineering for GitHub Copilot Chat](/en/copilot/using-github-copilot/prompt-engineering-for-github-copilot)
-   [Best practices for using GitHub Copilot](/en/copilot/using-github-copilot/best-practices-for-using-github-copilot)