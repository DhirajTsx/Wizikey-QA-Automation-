# 🧪 Wizikey QA Assignment - Media Search Page Automation

![Playwright](https://img.shields.io/badge/Playwright-45ba4b?style=for-the-badge&logo=Playwright&logoColor=white) ![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)

## 📌 Overview
This repository contains the QA assessment for **Wizikey**, focusing on the **Media Search Page** (`https://wizikey.com/media/search`). 

The project includes:
1. **Automated Test Scripts** using Playwright & TypeScript.
2. **Manual Test Cases** & **Bug Reports** (See PDF Report).
3. **Risk Analysis** of the search functionality.

## 🚀 Features Automates
The following scenarios have been automated to ensure critical functionality:
- ✅ **Smoke Test:** Verifies page load, title, and search bar visibility.
- ✅ **Functional Test:** Performs a search keyword (e.g., "Technology") and validates results using stable `data-cy` attributes.
- ✅ **UI/UX Test:** Checks mobile responsiveness and layout stability on smaller viewports.

---

## 🛠️ Prerequisites
Before running the tests, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v14 or higher)
- npm (comes with Node.js)

---

## ⚙️ Installation & Setup

1. **Clone the Repository**
   ```bash
   git clone [https://github.com/DhirajTsx/wizikey-qa-assignment.git](https://github.com/DhirajTsx/wizikey-qa-assignment.git)
   cd wizikey-qa-assignment
   ```
2. **Install Dependencies**
   ```bash
   npm install or npm i
   ```
3. **Install PlayWright**
   ```bash
   npx playwight install
   ```
4.**Run All tests**
  ```bash
  npx playwright test
```
