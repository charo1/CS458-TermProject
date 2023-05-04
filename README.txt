These are the steps you must follow to run the application

Step 1: Install nvm
We used version 0.39.3

Step 2: Install node.js
https://nodejs.org/en/download

Step 3: Change npm version to 16.16.0

Step 4: Install truffle framework
terminal Command: npm install --g truffle@5.1.39

Step 5: Install ganache personal blockchain
https://trufflesuite.com/ganache/

Step 6: Install metamask extension on google chrome

Step 7: Start client side app
~/path/to/project $ npm run start

Step 8: Run this command in a seperate terminal window
~/path/to/project $ truffle migrate --reset

Step 9: Make sure ganache app is open and click on quickstart. Make sure that metamask is installed

Step 10: In metamask, create a custom rpc/network. Call it ganache

Step 11: Copy and paste the RPC URL from ganache app into metamask's New RPC URL field. 
And add the following values to the chain id and symbol field:
Chain ID: 1337
Symbol: ETH

In metamask, make sure to connect to the newly created ganache network.

Step 12: Import a new account on metamask. Import the first address's private key in the list from ganache into metamask by copying the address 
and paste the private key in the private key field on metamask. Name it anything. 

The app should be running by now. 

