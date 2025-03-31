// Define the price of the item
let price = 3.26;

// Cash in Drawer (cid) - an array representing available cash in the register
let cid = [
  ['PENNY', 1.01],
  ['NICKEL', 2.05],
  ['DIME', 3.1],
  ['QUARTER', 4.25],
  ['ONE', 90],
  ['FIVE', 55],
  ['TEN', 20],
  ['TWENTY', 60],
  ['ONE HUNDRED', 100]
];

// Get references to DOM elements
const displayChangeDue = document.getElementById('change-due');
const cash = document.getElementById('cash');
const purchaseBtn = document.getElementById('purchase-btn');
const priceScreen = document.getElementById('price-screen');
const cashDrawerDisplay = document.getElementById('cash-drawer-display');

// Function to display change due in the UI
const formatResults = (status, change) => {
  displayChangeDue.innerHTML = `<p>Status: ${status}</p>`;
  displayChangeDue.innerHTML += change
    .map(
      ([denominationName, amount]) => `<p>${denominationName}: $${amount}</p>`
    )
    .join('');
};

// Function to check if the cash register can return the correct change
const checkCashRegister = () => {
  const cashInCents = Math.round(Number(cash.value) * 100); // Convert cash to cents to avoid floating point issues
  const priceInCents = Math.round(price * 100);

  if (cashInCents < priceInCents) { // If cash given is less than the price
    alert('Customer does not have enough money to purchase the item');
    cash.value = '';
    return;
  }

  if (cashInCents === priceInCents) { // If cash given is exactly the price
    displayChangeDue.innerHTML =
      '<p>No change due - customer paid with exact cash</p>';
    cash.value = '';
    return;
  }

  let changeDue = cashInCents - priceInCents; // Calculate change due in cents

  // Reverse cid array and convert amounts to cents for easier calculations
  const reversedCid = [...cid]
    .reverse()
    .map(([denominationName, amount]) => [
      denominationName,
      Math.round(amount * 100)
    ]);

  // Denominations in cents
  const denominations = [10000, 2000, 1000, 500, 100, 25, 10, 5, 1];

  // Initialize result object
  const result = { status: 'OPEN', change: [] };
  
  // Calculate total cash in drawer
  const totalCID = reversedCid.reduce((prev, [_, amount]) => prev + amount, 0);

  if (totalCID < changeDue) { // Not enough funds to return the change
    displayChangeDue.innerHTML = '<p>Status: INSUFFICIENT_FUNDS</p>';
    return;
  }

  if (totalCID === changeDue) { // If total cash in drawer equals change due, close the register
    result.status = 'CLOSED';
  }

  // Iterate through the cash drawer to determine the change to be given
  for (let i = 0; i <= reversedCid.length; i++) {
    if (changeDue >= denominations[i] && changeDue > 0) {
      const [denominationName, total] = reversedCid[i];
      const possibleChange = Math.min(total, changeDue);
      const count = Math.floor(possibleChange / denominations[i]);
      const amountInChange = count * denominations[i];
      changeDue -= amountInChange;

      if (count > 0) {
        result.change.push([denominationName, amountInChange / 100]);
      }
    }
  }

  if (changeDue > 0) { // If there's still change due, but no available cash to cover it
    displayChangeDue.innerHTML = '<p>Status: INSUFFICIENT_FUNDS</p>';
    return;
  }

  formatResults(result.status, result.change); // Display results in UI
  updateUI(result.change); // Update cash drawer
};

// Function to check if user input is valid before running checkCashRegister
const checkResults = () => {
  if (!cash.value) {
    return;
  }
  checkCashRegister();
};

// Function to update the cash drawer display
const updateUI = change => {
  const currencyNameMap = {
    PENNY: 'Pennies',
    NICKEL: 'Nickels',
    DIME: 'Dimes',
    QUARTER: 'Quarters',
    ONE: 'Ones',
    FIVE: 'Fives',
    TEN: 'Tens',
    TWENTY: 'Twenties',
    'ONE HUNDRED': 'Hundreds'
  };
  
  // Update cid if change was given
  if (change) {
    change.forEach(([changeDenomination, changeAmount]) => {
      const targetArr = cid.find(
        ([denominationName]) => denominationName === changeDenomination
      );
      targetArr[1] =
        (Math.round(targetArr[1] * 100) - Math.round(changeAmount * 100)) / 100;
    });
  }

  // Clear input field
  cash.value = '';

  // Update UI to show total price and remaining cash in drawer
  priceScreen.textContent = `Total: $${price}`;
  cashDrawerDisplay.innerHTML = `<p><strong>Change in drawer:</strong></p>
    ${cid
      .map(
        ([denominationName, amount]) =>
          `<p>${currencyNameMap[denominationName]}: $${amount}</p>`
      )
      .join('')}
  `;
};

// Add event listener to purchase button
purchaseBtn.addEventListener('click', checkResults);

// Allow user to press Enter key to submit cash input
cash.addEventListener('keydown', e => {
  if (e.key === 'Enter') {
    checkResults();
  }
});

// Initialize UI with default values
updateUI();

