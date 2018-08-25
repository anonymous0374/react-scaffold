## 2018-08-23

1. Design Dashboard
   --> Dashboard the default page of the AMS for both Guest and VIP users.
   --> For Guest, it displays introduction messages and some general data.
   --> For VIP, it displays his(her) own analytical data
### end of day lookback
  --> Dashboard design not finished yet, not even finished half
  --> Find that I have to think out the business first, that is  what 
    this program is going to provide to the user.

## 2018-08-24

1. Learn G2 to implement the charts of the Dashboard

### end of day lookback 
  (1) time not spent on G2, but still working on some UI details such as 
  the header, logout, link styles and so on...

## 2018-08-25

1. Think about the business this app is doing.
  It's an Asset Management System. What actually does it "manage"?
  -> Assets
    --> Real Estate
    --> Bank Accounts Balance
    --> Jewellery
    --> Cash
    --> Yu'er Bao
    --> And any other type of assets that the user can add on his / her own
  -> Investment
    --> Stocks
    --> Funds
    --> P2P
    --> And any other type of assets that the user can add on his / her own
  -> Cashflow
    --> define "calendar events" on a month basis
    --> and the user can log an flow-event anytime
    --> the "calendar events" and user logged flow-event merged into a whole
    cashflow
    --> and the user can view the cashflow from past into future
  --> debt management
  --> Daily cashflow log
 The AMS also provides some utilities such as interest rate calculator,
 ROI calculators and so on...
2. Work on the simpliest part: Daily cashflow log first
  --> Designed schema for a flow event
