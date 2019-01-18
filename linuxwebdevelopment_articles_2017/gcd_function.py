# -*- coding: utf-8 -*-
"""

@author: Justin, owner of linuxwebdevelopment.com
Made for article located at https://linuxwebdevelopment.com/how-to-find-the-gcd-of-two-integers-in-python/
"""

def gcd(x,y):
    # if y > x, then switch them
    if (y > x):
        temp1 = y
        y = x
        x = temp1

    # edge cases. If x or y are negative, if one or both of them is a 0, or if they are the same number.
    if (x == 0 and y == 0):
        return 1
    if (x == 0):
        return y
    if (y == 0):
        return x
    if (x < 0): 
        x = -x
    if (y < 0):
        y = -y
    if (x == y):
        return x

    # Using the Euclidean algorithm with x being the divisor and y being the remainder for each step after the first step
    while (y > 0):
        temp2 = y
        y = x % y
        x = temp2

    # return the divisor when the remainder is 0
    return x
