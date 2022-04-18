# MudraKosh

***Making more possible.***

<sub><sup>**Note**: Before visiting [MudraKosh website](https://mudrakosh-a1b1b.web.app/), kindly see the [technological issues](https://github.com/aceta-minophen/MudraKosh/edit/main/README.md#technological-issue).</sup></sub>

India is considered to be the second most unbanked nation with a statistic of 190 million unbanked adults. Due to this, and the added disadvantage of inability to offer any collateral, many individuals are unable to access loans from trustable sources at reasonable interest and sort to unreliable credit source.
Therefore, to eliminate these and consequent problems, MudraKosh aims to provide:
* Easy and quick lending accessibility without the need for banks or collateral
* 100% digital process
* Reasonable interest rates for overall profit of all parties involved
* Ensured security at all stages
## What is MudraKosh?
* A proposal for a revolutionary system to deliver fast loans to individuals/MSMEs who are part of any industrial domain, including horticulture, textile, wood, etc.
* The system acts as a direct mediator between the borrowers and lenders:
  * Borrowers apply for loan on the platform
  * MudraKosh connects with potential lenders to the borrowers and directs the creditflow in fractions (microcredit scheme)
* **Borrowers**: Individuals/MSMEs in need of loans
* **Lenders**: Large-scale organizations/interested 3rd parties looking for profitable and secure investments with assured returns
* Our additional feature also helps provide financial literacy to the targeted audience


### A Brief Overview of our Solution
* The **inflow** of credit starts with viable lenders to lend money for mutual benefit and better service returns.
* The credit details are processed and maintained by our host wallet **system**.
* Information is gathered about the borrowers on our platform in several steps by performing **KYC** and credit screening using CEBIL report.
* In case of **no assets**, **micro-staged finance** is executed to test and ensure consistent ethical lending practices.

****

## Features of MudraKosh
#### Microcredit Scheme
Reduces the requirement of collateral to almost nothing.

> *Microcredit is a common form of microfinance that involves an extremely small loan given to an individual to help them become self-employed or grow a small business.*
> 
> **Micro-staged finance scheme** entails the allotment of loan to the borrowers in installments. For example, if the total amount requested by a registered and verified borrower is Rs. 1,00,000, the borrower is not given the amount at once. The reliability of the borrower is tested by alloting them a percentage of the total amount (in this case, 10% i.e. Rs. 10,000). The maximum period for returning this amount with set interest is 1 year. As soon as this amount is returned, the next installment (of Rs. 12,500) is issued with an increment in percentage (2.5% in this case), and so on until the complete loan is allotted successfully.

The starting installment, increment, interest rate and return period for different loan amounts are specified in the table given below.

|Loan Amount (Rs.) |% issued in the first installment |Increment (%) |Interest Rate p.a |Return Period for Each Installment |Total no. of Installments |
|---|---|---|---|---|---|
|50,000-1,00,000|10%|2.5%|7.5%|1 yr|6|
|1,00,000 - 2,00,000|5%|1.25%|7.5%|1 yr|9|
|2,00,000 - 3,00,000|3.33%|0.83%|8.5%|1 yr|13|

<sub><sup>**Note**: MudraKosh allows a maximum of Rs. 3 Lakhs while applying for loans and a minimum of Rs. 50,000.</sup></sub>

#### Chatbot and UI
* User friendly interface encourages  borrowers
* 24/7 AI powered chatbot customer service available to resolve queries

#### eKYC

Authentications platform adding to system security.
> * Helps lenders perform risk assessment by identifying the previous financial history and assets owned
> * Limits fraud that result mainly due to hiding of identity
> * Prevents money laundering and other anti-social activities
> * Brings stability and investment to the country, as it makes the financial framework more trustworthy and less risky
> * Decreased uncertainty allows institutions to lend more to customers and increase their profits

#### Providing Financial Literacy
> *Financial literacy can be one of the key ways to bridge the gap between your wealth creation journey and economic growth. It essentially includes your understanding of the way accounts work, the use of credit cards and the ways to avoid debt. The absence of financial literacy will lack a strong foundation in terms of your decisions concerning savings and investment. At the same time, financial literacy will provide in-depth knowledge of financial education and strategies that are crucial for financial growth and success.*

#### Reducing Financial Burden on Customers
Provides leniency to the defaulters in case of genuine reasons and assistance to help them return loan.

### Technology Stacks and Architecture
#### ML/AI
* Python; Flask
* Logistic Regression, Support Vector Machine(SVM)
* Dialogflow 

#### Web Development
* Node.js
* HTML5; CSS3
* Bootstrap
* JavaScript

#### Miscellanious
* GitHub 
* Figma
* Twilio (SMS API)
* Firebase (Firebase Auth, Firebase Realtime Database, Firebase Storage, Firebase Hosting)


![image](https://user-images.githubusercontent.com/87569188/163832647-b5411e5f-ec35-44b0-8ada-c1ec9c600fca.png)


****
## Links

* [Flowchart](https://bit.ly/36AV5S2)
* [Wireframe](https://bit.ly/3Ivbvtw)
* [Prototype Video](https://bit.ly/36FRUbP)
* [Demo Video]()

## Features that are good to have
* We can use **blockchains** to create a centralized joint register of transaction that is extremely secured. This can eventually lead to no data redundancy and reduce chances of forging as all transactions are available.
* We can at later stage **provide deposit services** ourselves and manage financial activities.
* We can make **mobile application** of MudraKosh accessible to all.

## Constraints
> Our limitations provide us a scope for improvement.

Technical and practical constraints to be overcome:
* Lack of sufficient financial support for outreach to the lower class
* Even after applying maximum security measures, occurrence of fraud is still possible and to be expected 

### Technologies to be added (and the replacements provided to simulate them using the current techstack)
1. **Digilocker API**: After adding this API to MudraKosh, only the already verified documents (for proof of identity and proof of address) will be allowed to be uploaded by the users for eKYC. As MudraKosh is required to be an officially registered organization to use this API, we cannot impliment it in our project as of now. Instead, an eKYC form is provided to be manually filled by the users.
2. **BHIM UPI API**: To be used for allowing users to depoosit and withdraw money from MudraKosh. As of now, since this API also requires MudraKosh to be registered as an official organization, we have added a simple form to simulate the transactions. The values are being added and subtracted to and from the database on the backend.  

## Known Issues
In order to implement the system we are taking some assumption:
* Readiness of industries to invest in the progress of the disadvantaged
* Local government aid and cooperation available for smooth implementation (panchayat/ local leaders)

The lack of these services will be an issue in the implementation.

### Technological Issue
* While going through the demo, the OTP may not be delivered to the registered mobile number. This will occur due to restrictions in using public Twilio API. To continue to the next page, the 4 digit OTP will be printed in the console which can be viewed using the following keyboard command: `CTRL + Shift + I`.

## Solution Implementation and Effectiveness
The system is implementable on a large scale given that every transaction takes place digitally.
Problems arise if the assumptions are not satisfied. These can be solved by external financial aid provided by investors of MudraKosh.
Without the need for any physical presence, enriched by ML, the system can be launched to consumers at the earliest.

Provided that all parties involved are willing to work under lawful jurisdiction, the solution can be implemented effectively.
We will successfully be able to provide loans and assistance services to those in need at a faster pace than the current system.
We will essentially be able to solve every problem we set out to mitigate.
## Social Impact
Our solution will ultimately impact MSMEs and people without assets to get a secure and sufficient loan via digitalised platform, and help them in growing and industrializing rural and backward areas thereby reducing regional imbalance assuring more equitable distribution of national income and wealth, along with providing financial literacy which will inturn make the whole process more dependable.
