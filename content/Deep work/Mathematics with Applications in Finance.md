---
Source: MIT Open course 18.642 | Fall 2024 | Undergraduate
Course: https://ocw.mit.edu/courses/18-642-topics-in-mathematics-with-applications-in-finance-fall-2024/
tags:
  - Finance
  - Math
---

 [[#1. Financial terms and concepts]]
	[[#1.1. Markets - Where trading happens]]
	[[#1.2. Products - What is traded]]
	[[#1.3.Participants – Who is involved]]
	[[#1.4. Objectives – Why everyone participates]]
		[[#LP (limited partner) vs GP (general partner)]]
	[[#1.5. Trader Types – How risk is transferred]]
	[[#The Big Picture (Mental Model)]]
	[[#1.6. How math is related (Financial Mathematics)]]
		[[#What is **Arbitrage**?]]
[[# 2. Time value of money, bond math]]
	[[#2.1. Compounding (FV)]]
	[[#2.2 Discounting (PV)]]
	[[#2.3. Bond pricing]]
	[[#2.4. Yield of a bond]]
	[[#2.5. Yield curve & term structure]]
	
	


# 1. Financial terms and concepts

## 1.1. Markets - Where trading happens
- Local exchanges (NASDAQ, NYSE, TSX) - mainly for stocks, ETFs, futures, options
- OTC (over the counter) - Trading happens **directly between two parties**, not on an exchange. Mainly for FX, bonds, swaps. Be aware of the counterparty risk and less transparency although it is highly customizable.
- ECN (Electronic Communication Networks) - Electronic systems that match buyers and sellers automatically. Common in FX and equities.
>👉 **Key idea:**  
  Markets exist to **match capital supply with capital demand**, under different levels of regulation, speed, and customization.


## 1.2. Products - What is traded
- Money & FX (Currencies)
- Stocks, Equity Indices, ETFs
- IPOs – Primary vs Secondary Markets
- Loans, Bonds, Credit Products
- Commodities (Physical goods (oil, gold, wheat))
- Real Estate, Mortgages, ABS
	- Real estate = long-term, capital-intensive assets
	- Mortgages = debt backed by property
	- **ABS (Asset-Backed Securities)**:
	    - Pool cash flows (mortgages, loans)
	    - Slice into tranches by risk
- Derivatives (Derivatives derive value from underlying assets)
	- Options, Futures, Forwards, Swaps, Structured Products
	- Used for: hedging, speculation, yield enhancement

## 1.3. Participants – Who is involved
- Commercial Banks
	- Core functions:
		- Take deposits
		- Make loans
		- Maturity transformation (short-term deposits → long-term loans)
👉 Backbone of the credit system

- Investment Banks
	- Equity & Fixed Income
		- Trading and market making
		- Provide liquidity
	- IBD / Corporate Finance
		- IPOs
		- M&A
		- Capital raising
👉 They **connect corporates with investors**

- Asset Management
	- Manage money on behalf of others
	- Focus on long-term returns and minimize risks
	- e.g. Pension funds, insurance companies

- Hedge funds
	- Flexible mandates
	- Use leverage, derivatives, short selling
	- Seek **absolute return**

## 1.4. Objectives – Why everyone participates

Everyone wants to maximize gain while minimizing loss, but with different perspectives:
- Investors have money, need return, can take risk in exchange for compensation
- Borrowers need money, bear risk, pay interest

Thus the trade between lender and borrower is the main driving force, the engine of the finance.

### LP (limited partner) vs GP (general partner)
At its core:
> **LP = provides money**  
> **GP = manages money**

They form a **partnership** to invest capital.
- The LP supplies **capital**
- The GP supplies **skill, time, decision-making, and risk management**
This structure exists because **capital and investing skill are rarely in the same hands**.

Who are LP:
Pension funds, insurance companies, high-net-worth individuals
LP contribute capital only, has limited liability as they can only lose invested capital.
LP want long-term stable returns, diversifications, access to opportunities they cannot manage themselves
👉 LP mindset:  “I have money but not the time, expertise, or infrastructure to deploy it optimally.”

Who are GP:
Private equity firms, hedge fund managers etc
GP contribute investment strategy, portfolio management, risk management, exit decisions.
GP have unlimited responsibilities as they bear reputation and career risk, often co-invest their own money.
GP want capital scale, long-term franchise value.
👉 GP mindset:  “I have skill and access, but need capital to scale.”

How LPs and GPs get paid:
Management fees 2% are paid to GP regardless of performance. GP get share of profits after LP gets paid first. 
👉 GP only wins **if LP wins first**.

## 1.5. Trader Types – How risk is transferred
- Hedger: want to reduce risk, so pay others to take risk
- Market marker: e.g. banking trading desk, objective is to earn the bid-offer spread
- Proprietary Trader & Fund portfolio manager: objective is to seek long-term return, they use their own capital to initialize the risk and hope that they bet the right

## The Big Picture (Mental Model)

Think of finance as:

> **A global system for pricing time, risk, and uncertainty**

- Markets → platforms
- Products → risk containers
- Participants → risk carriers
- Objectives → capital allocation
- Traders → risk redistribution

Nothing exists in isolation.

## 1.6. How math is related (Financial Mathematics)
Financial mathematics is **not about predicting the future**.  
It is about: **Pricing uncertainty, allocating risk, and surviving randomness**

- Pricing models
	- Relative value: Assets are not priced in isolation — they are priced **relative to alternatives**. Always ask “Is this cheap or expensive compared to something else?”. There is **no absolute fair price**, only **conditional value**.
	- Arbitrage-Free Pricing
- Risk management
	- Most professionals fail **not because they are wrong**, but because they **run out of capital**.
	- Managing risk is a very quantitative process, should let math speak.
- Trading Strategies
	- The “Holy Grail” Strategy
	- Perpetual Money Machine
	- Robo-Traders

### What is **Arbitrage**?
If two assets have the **same cash flows and risk**, they must have the **same price**.
Key words:
- _Risk-free_ (in theory)
- _Same or equivalent cash flows_
- _Price inconsistency_
If two things are economically identical, they **must** have the same price.  
If they don’t, arbitrage exists.

If:
- Gold costs **$2,000** in Market A
- Gold costs **$2,020** in Market B
Then arbitrage:
- Buy in A
- Sell in B
- Pocket **$20** (ignoring costs)

Arbitrage is not about profit — it is about **consistency**.
This leads to:
- **Arbitrage-free pricing**
- Law of one price
- Modern derivatives pricing

Most financial models start with: **Assume no arbitrage.**

---
# 2. Time value of money, bond math
## 2.1. Compounding (FV)
Example:
Assume initial investment 100$, annual interest rate 2%
After 1 year: $100+100*0.02$ -> $100*(1+0.02)=102$
After 2 years: $102*(1+0.02)$, which is equal to $100*(1+0.02)^2$
After n years: $100*(1+0.02)^n$

If the compounding changes from annual (m=1) to monthly (m=12):
Each month earns: $0.02/12 = 0.001667$
After 12 months: $100*(0.001667)^{12} = 102.02$
Still about **2% per year**, just slightly more due to compounding.

Equation:
Assume constant annual interest rate $r$
Assume initial principal $P$
Assume the number of compounding periods per year $m$ 
Assume investing time of year $t$
Future value as $FV$

>$P$ is the starting height, $r$ is the growth speed, $m$ is how often growth is applied, and $t$ is how long you wait.
>
> $r/m$ is growth per compounding step, $mt$ is total number of growth steps
>
>_All compounding formulas are just repeated multiplication of the principal at a constant rate over time — the symbols only make that repetition explicit._

- m = 1 → yearly
- m = 2 → semi-annual
- m = 4 → quarterly
- m = 12 → monthly
- m = 365 → daily

So _m_ answers: “How many times per year does the interest get added back to the principal?”
#### Annual compounding $(m=1)$
$$FV = P(1+r)^t$$
- start with $P$
- each year multiplies the amount by $(1+r)$
- repeat for $t$ years

#### Compounding $m$ times per year (general case)
$$FV = P\left(1 + \frac{r}{m}\right)^{mt}$$
Set m equals to 1, will find that **annual compounding is a special case** of the general formula.


## 2.2 Discounting (PV)

Discounting is compounding run backward in time.
Future money is worth less than money today because of: Time, Risk, Opportunity cost

#### Annual discounting ( $m=1$ )
$$PV=\frac{FV}{(1+r)^t}$$

#### Discounting with $m$ periods per year (general case)
$$PV = \frac{FV}{\left(1 + \frac{r}{m}\right)^{mt}}$$

## 2.3. Bond pricing
A bond is **nothing more than a sequence of promised cash flows**.
Those cash flows are:
1. **Coupons** (interest payments)
2. **Principal repayment** at maturity

👉 Pricing a bond = **discounting all future cash flows back to today**

- F = face value (par value, usually 100 or 1,000)
- C = annual coupon payment (in dollars)
- c = coupon rate (percentage of face value)
- r = yield to maturity (discount rate)
- t = time in years
- T = maturity (in years)
- P = bond price today

#### Zero-coupon bond
Zero-coupon bond is a single cash flow bond, it pays no coupon aka no interest, only pays face value at the maturity. That is to say: at time $T$, receive $F$

Pricing equation:
$$P=\frac{F}{(1+r)^T}$$
This is just a pure discounting.

#### Coupon bond
A coupon bond is many small cash flows, plus one big cash flow at maturity. So expect to receive C+C+C+C...+F.

Pricing equation:
**Each payment must be discounted to today**

$$P=\frac{C}{(1+r)} + \frac{C}{(1+r)^2} + ... \frac{C}{(1+r)^T} + \frac{F}{(1+r)^T}$$
which is:
$$P = \sum_{t=1}^{T} \frac{C}{(1+r)^t} + \frac{F}{(1+r)^T}
$$


## 2.4. Yield of a bond
The yield of a bond is the discount rate $r$ that obtains the current price of a bond.

It is wrong to think Yield = $\frac{C}{P}$, as it ignores time value of money etc, in fact this ratio is called current yield, not bond yield.

The true yield is the **Yield to maturity (YTM)**, which is the **internal rate of return (IRR)** of the bond, assuming: you hold the bond to maturity, all coupons are reinvested at the same yield, no default.

What is Yield to Maturity (YTM)?
- Full IRR, i.e. Excel function as $IRR()$
- Most commonly meant by “yield”
- Yield is the bond’s IRR — nothing else.
	- If the yield feels high → bond is cheap  
	- If the yield feels low → bond is expensive
- Take the **coupon bond pricing equation**, and **solve for r**.  **That r is the Yield to Maturity (YTM).**

With the same equation, 
- If $r$ is **given** → you compute **price**
- If $P$ is **given** → you **solve for $r$**

👉 Important clarification
	$r$ is **just a variable**, we can call it:
	- $r$ in theory
	- **$YTM$** in bond markets
	- **$IRR$** in corporate finance
	Same math. Different contexts.


#### Concrete example (numbers, no abstraction)

Assume:
- Face value F=100
- Coupon C=4
- Maturity T=3
- Market price P=97.30

We solve:
$$97.3=\frac{4}{(1+r)} + \frac{4}{(1+r)^2} + \frac{104}{(1+r)^3}$$

The solution is: r = 5%

👉 **That 5% is the bond’s yield**


Why yield includes capital gain or loss?

By decomposing total return, the cash flows are:

- Coupons received: 4+4+4=12
- Price change: 100−97.30=2.70

Total value received: 12+2.70=14.70

So Yield reflects **both**: Coupon income and Price convergence to par

#### Yield vs coupon rate $c$
Coupon rate is Fixed interest promised
Yield is market-required return

Cases:
- Coupon rate = Yield → price = par
- Coupon rate < Yield → price < par (discount bond)
- Coupon rate > Yield → price > par (premium bond)

👉 Yield is about **price**, not contract.

#### Yield vs bond price $P$
**Bond price moves inversely to yield**

$$\boxed{P \uparrow \;\Rightarrow\; YTM \downarrow} \
\boxed{YTM \uparrow \;\Rightarrow\; P \downarrow}$$
This is **not a convention** — it is a **mathematical consequence** of discounting.

##### Understand by math
As seen in the bond pricing equation, $r$ (yield) is in the denominator, the bigger the $r,$ the heavier the discounting, thus each term shrinks, thus the **sum of discounted cash flows shrinks**, so price falls.

Relation: Bond price decreases with yield and increases with coupon.
Bond prices fall when yields rise because future cash flows are discounted more heavily; 
Bond prices rise with coupons because more cash is received earlier.

##### Understand by intuition
This math discounting can be analysed from an investor human angle.

If market Yield rises,
new bonds are issued **with higher coupons**,
old bonds have **fixed lower coupons**,
to compete (attract new investors), **old bonds must fall in price** to offer the same yield. If not, people will just buy the same price new bond with higher yield.

If market Yield falls,
then new bonds pay lower coupons, 
old bonds pay higher coupons,
so investors bid up the price, as old coupons become more demanding. 

👉 In either case, price adjusts so the return matches the market.

New investors face exactly those two choices
- Choice A: **Old bond**
	- Originally issued as 10-year
	- **7 years remaining**
	- Lower price
	- Lower coupon (fixed from issuance)
    
- Choice B: **New bond**
	- Fresh **10-year**
	- Priced at par
	- Higher coupon (reflecting current yields)

Both are available **at the same time** in the secondary market. They are compared as 7-year bond vs 10-year bond as time risk matters. Someone might still prefer old bond, as shorter maturity less rate risk, lower price less capital risk. Some might prefer new bonds for its higher yield. There is **no arbitrage** — just preference.

## 2.5. Yield curve & term structure
The yield curve shows the market-required yield for bonds of the same credit risk but different maturities.
The term structure is the relationship between interest rates (yields) and time to maturity.

- The **yield curve is a plot**
- The **term structure is the underlying concept**
Same thing, different language.

The normal yield curve is upward slopping, because when you lend for longer, you face more risks, thus investors will require more payments if the money is wanted for longer.