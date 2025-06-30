📊 Panasonic QMS - Client Management Dashboard

A responsive web-based dashboard built using **HTML**, **CSS**, and **JavaScript** to manage client subscriptions, monitor status, and streamline organizational client operations. This project is designed for internal quality management systems (QMS) where businesses can manage active/inactive clients, subscription renewals, and reports with ease.

🖥️ Project Features

### 🔹 1. Dashboard Overview

* Displays key statistics at a glance:

  * ✅ **Active Clients**
  * ❌ **Inactive Clients**
  * ⏰ **Due for Renewal**
  * ⚠️ **Expired Subscriptions**
* Integrated data visualizations:

  * 📈 Line Chart showing subscription trends.
  * 🟢 Pie/Donut Chart for sent activity breakdown.

### 🔹 2. Add Client Module

* A structured form to add new clients:

  * Fields: Organization Name, Contact Person, Email, Domain, Contact Number, Address, Validity (date range), Subscription Plan, and Number of Licenses.
  * Includes validation-ready inputs and date pickers.

### 🔹 3. Client Search and Management

* Search clients dynamically by:

  * Organization Name
  * Contact Person
  * Contact Number
* Table displays all relevant client information:

  * Domain, Licenses, Validity Dates, Status (Active/Inactive)
* Includes **Edit** action for updates.

### 🔹 4. Sidebar Navigation

* Persistent left-hand navigation for seamless movement between:

  * 📋 Dashboard
  * 👥 Clients Management
  * 🧾 Subscription
  * 📄 Reports

## 🛠️ Technologies Used

* **HTML5** – Structure of the web pages
* **CSS3** – Styling and layout
* **JavaScript** – Basic DOM interactions (search, table updates)
* **Font Awesome** – Icons
* **Chart.js** (or similar) – For rendering dynamic charts (assumed from visuals)

## 📷 Screenshots

### Dashboard Overview

![image](https://github.com/user-attachments/assets/11cf04f9-a158-4b1a-8fc7-1ed6af90d66e)

### Add Client Page

![image](https://github.com/user-attachments/assets/288c981d-517b-40b2-9e4c-579b761d6439)

### Search Client Functionality

![image](https://github.com/user-attachments/assets/fd6e6ac7-3eee-4006-b5d0-09d424bf9f61)

### Filtered Client Results

![image](https://github.com/user-attachments/assets/0ce19549-c861-4a58-a370-df30bcdd17df)

## 📁 File Structure

```
Project/
│
├── dashboard.html        # Main dashboard page
├── client.html           # Client add/search page
├── style.css             # Custom CSS styles
├── script.js             # Client-side JS for filtering/search
└── images/               # Logo, icons, graphs, etc.
```







