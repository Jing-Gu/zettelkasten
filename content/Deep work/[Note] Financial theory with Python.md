Study notes of [[02-Literature Notes/CS & Development/Financial theory with Python|Financial theory with Python]] 

## Two-state economy
an economy with two relevant points in time and two uncertain future states only

**Time** is Natural number (N) in math, data type as `int`

**Money** / Currency is Real number (R) in math, data type as `float`

Combining time with currency leads to the notion of **Cash flow**. 
A cash outflow is a negative real number, a cash inflow is a positive real number.
A pair of cash flows now and then are modelled in math as an ordered pair or two-tuple, data type as `tuple` or `list`. (type tuple is immutable, type list is mutable)
```python
c0 = -9.5 # cash outflow today
c1 = 11.75 # cash inflow one year later
c = (c0, c1) # cash flow pair as tuple
c = [c0, c1] # cash flow pair as list
```

**Return** is the sum of the cash flows R = c0 + c1
The rate of return is the return R divided by absolute value of the investment outlay today.
```python
c = (-10, 12)
R = sum(c) // R = 2
r = R / abs(c[0) = 2 / 10 = 0.2
```

There is a difference between a cash flow today and a cash flow in one year. The difference results from **interest** that is being earned.

The same cash flow in one year cannot be compared directly in terms of value with a cash flow today due to the interest earned or lost, aka. [[Common Sense Economics|opportunity cost]].

To appropriately compare cash flows in one year with those of today, the present value needs to be calculated, by discounting using the fixed interest rate in the economy.

**Discounting** is a function that maps one real number (cash flow in one year) to another real number (cash flow today)
```python
i = 0.1 # fix the interest rate
def D(c1):
	return c1 / (1+i)
D(11) # 10 the present value
```

To decide whether or not to conduct an investment, one factor to look is **Net present value (NPV)**, which is the sum of cash outflow today and the present value of the cash inflow in one year.

```python
def NPV(c):
	return c[0] = D(c[1])
c = (-10.5, 12.1)
NPV(c) = -10.5 + D(12.1) = -10.5 + 11 = 0.5
```
NPV function maps a cash flow tuple to a real number. If the NPV is positive, the project should be conducted; if it is negative, then not, since the alternative of just depositing the money with a bank is more attractive.

Cash inflows from an investment project one year from now are in general **uncertainty**.
One year the economy from now might be one of the two states **u** and **d**. u means up good, d means down bad, the cash flow in one year becomes a vector with two different values representing the relevant cash flows per state of the economy.

Most commonly use Numpy array to model vectors and matrices.
```python
c0 = -10
c1 = np.array((20, 5)) # the uncertain cash inflow in one year
c = (c0, c1)
c1 * 1.5 + 2 # A linear transformation of the vector [32, 9.5] 
c1 + 1.5 * np.array((10, 4)) # A linear combination of two ndarray objects (vectors). [20, 5] + [15, 6] = [35, 11]
```

**Financial assets** are financial instruments (“contracts”) that have a fixed price today and an uncertain price in one year. 
```python
s0 = 10 # financial asset price today
s1 = np.array((12.7, 7.5)) # The uncertain price in one year as a vector
s = (s0, s1) # the price process as a tuple
```
