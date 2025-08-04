# **Calculator**

A modern, sleek, and responsive calculator web application built with HTML, CSS, and JavaScript. This project features a premium design with a dark and light theme toggle, optimized performance, and an intuitive user interface.

## **Features**

* **Basic Arithmetic Operations:** Supports addition, subtraction, multiplication, and division.  
* **Theme Toggle:** Switch between dark and light themes for enhanced user experience.  
* **Responsive Design:** Optimized for various screen sizes, from mobile to desktop.  
* **Premium Aesthetics:** Glassmorphism-inspired UI with smooth transitions and hover effects.  
* **Error Handling:** Prevents division by zero and invalid inputs.  
* **Keyboard Accessibility:** The display input is read-only to prevent direct user edits.

## **Installation**

1. **Clone or Download:** Download the project files or clone the repository to your local machine.  
2. **Place Files:** Ensure that index.html and any referenced assets are in the correct directory structure.  
3. **Serve Locally:** Use a local development server (e.g., Live Server in VS Code, or run python \-m http.server in the project directory). Alternatively, open index.html directly in a browser (note: some features may require a server due to CORS restrictions for external resources like Font Awesome).

## **Usage**

* **Number Buttons:** Click numbers `(0-9)` to input digits.
* **Decimal Button:** Add a decimal point (only one per number).
* **Operator Buttons:** Use `+, -, *, /` for arithmetic operations.
* **Equals Button:** Compute the result of the current operation.
* **Clear (AC):** Reset the calculator to its initial state.
* **Delete:** Remove the last digit from the current input.
* **Theme Toggle:** Click the moon/sun icon in the top-right corner to switch between dark and light themes.

## **Technologies Used**

* **HTML5:** Structure of the calculator.  
* **CSS3:** Styling with CSS variables, grid layout, and glassmorphism effects.  
* **JavaScript (ES6):** Class-based logic for handling calculations and UI interactions.  
* **Hugeicons:** Icons for delete and theme toggle buttons.
* **Google Fonts (Inter):** Modern typography for a premium look.

## **File Structure**

```
Calculator/
     ├── .idea/
     ├── assets/
     │   ├── css/
     │   │   └── style.css
     │   ├── images/
     │   │   └── logo.png
     │   └── js/
     │       └── script.js
     ├── .gitignore
     ├── index.html
     └── README.md
```

*Note: For this single-file version, the CSS and JS are embedded directly within index.html.*

## **Customization**

* **Styling:** Modify CSS variables in `:root` and `[data-theme="light"]` for custom colors and aesthetics.  
* **Icons:** Replace Font Awesome icons by updating the `<i>` tags in index.html.  
* **Logo:** Update the favicon by replacing `/assets/images/logo.png`.  
* **Functionality:** Extend the Calculator class in the JavaScript section to add new features (e.g., advanced math functions).

## **Limitations**

* Requires an internet connection for external resources (Font Awesome, Google Fonts).  
* Division by zero returns an "Error" message.  
* No keyboard input support in this version.

## **Future Improvements**

* Implement memory functions (e.g., M+, M-, MR, MC).  
* Add scientific calculator features (e.g., sin, cos, sqrt).  
* Persist theme preference using localStorage.

## **License**

This project is open-source and available under the MIT License.

## **Author**

* **Name**: **Lahiru Kodikara**
* **GitHub**: [**GitHub Profile**](https://github.com/LahiruChanak)