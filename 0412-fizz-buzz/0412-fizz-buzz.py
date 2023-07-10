class Solution:
    def fizzBuzz(self, n: int) -> List[str]:
        i = 1
        arr = []
        while i in range(n+1):
            if i % 3 == 0 and i % 5 == 0:
                arr.append("FizzBuzz")
            elif i % 3 == 0:
                arr.append("Fizz")
            elif i % 5 == 0:
                arr.append('Buzz')
            else:
                arr.append(str(i))
            i+=1
        return arr
    
    
