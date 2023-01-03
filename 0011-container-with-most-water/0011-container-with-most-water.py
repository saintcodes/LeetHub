class Solution:
    def maxArea(self, height: List[int]) -> int:
        
        left = 0
        right = len(height)-1
        max = 0
        
    
        while left < right:
            lowest = min(height[left], height[right])
            length = right-left
            current = length*lowest
            print(height[left], height[right], lowest, current)
            if current > max:
                max = current
            if height[left] < height[right]:
                left +=1
            else:
                right -=1
        return max