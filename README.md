
# Budget Tracking App

A simple and efficient budget-tracking app built with React to help users manage expenses, view budgets, and stay on top of their financial goals.

## Table of Contents
- [Features](#features)
- [Demo](#demo)
- [Technologies Used](#technologies-used)
- [Setup and Installation](#setup-and-installation)
- [Usage](#usage)
- [Contributing](#contributing)

## Features
- **Add and Manage Budgets**: Create budgets with limits to organize your spending categories.
- **Track Expenses**: Easily add expenses to each budget and monitor your spending habits.
- **Dynamic Progress Bars**: Visualize budget usage with color-coded progress bars.
- **Customizable Expense Categories**: Choose from multiple budget categories to keep expenses organized.
- **Responsive Design**: The app is fully responsive and adapts to various device screens.

## Demo
You can see a live demo of the Budget Tracker [here](https://lucky-ikefe.github.io/budget-tracker)

## Technologies Used
- **Frontend**: React, React Hooks, Context API
- **Styling**: Bootstrap, CSS
- **Other Libraries**: React-Bootstrap, Vite 

## Setup and Installation

### Prerequisites
- Node.js and npm installed on your machine.
- Firebase account if using Firebase for data storage.

### Steps

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/lucky-ikefe/budget-tracker.git

   cd budget-tracking-app
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Start the Development Server**:
   ```bash
   npm run dev
   ```

   The app will be available at `http://localhost:5173`.

## Usage

- **Adding a Budget**: Click the "Add Budget" button and fill in the details (name and maximum budget limit).
- **Adding an Expense**: Click "Add Expense" for any budget card or from the main screen, fill in the description, amount, and select a budget category.
- **Viewing Expenses**: Click on "View Expenses" to see a list of all expenses in a particular budget.

## Project Structure
- `src/components`: Contains React components like `BudgetCard`, `AddBudgetModal`, and `AddExpenseModal`.
- `src/contexts`: Includes context files like `BudgetsContext` for state management.
- `src/utils`: Utility functions like currency formatting.
- `public`: Static assets and the app’s main HTML file.

## Contributing
Contributions are welcome! If you'd like to contribute, please:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes and commit them (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a pull request.

## Credits

This project was recreated based on Youtube tutorial video titled "How To Create A Budget App with React"  by Web Dev Simplified.

