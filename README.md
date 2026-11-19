# Student Portal

## 1. Project Title and Description

**Student Portal** is a small, responsive web application built with pure HTML, CSS, and JavaScript. It lets a student create an account with their email, username, password, and student ID, log in with those details, and view a personal dashboard that shows their student information.

The project has three pages: a login page, a registration page, and a dashboard. It uses no frameworks or libraries.

## 2. Student Information Portal and Its Purpose

A Student Information Portal is a web page where a student can access their own school-related details in one place. This prototype demonstrates the core parts of such a system:

- **Registration**, where a new student creates an account and enters a student ID in the school format (for example, `25-00161`).
- **Login**, where a registered student proves who they are with their email and password.
- **Dashboard**, where the logged-in student sees their welcome message, username, student ID, and email.

The purpose of the project is to practice building a real multi-page web app: layout with flexbox, responsive design with media queries, animation, and JavaScript logic for validation, saving data, and protecting pages.

## 3. Student Name and Section

- **Name:** Dayo Bryan
- **Section:** BSIT2b

## 4. Target Users and Objectives

**Target users:** Students who need a simple, quick way to check their own information, and students and instructors who want to see how a basic portal works.

**Problems the system addresses:**

- Students have no single page where they can see their own account details after signing up.
- New users need a clear, guided registration process that catches mistakes early, such as an invalid email, a short password, or a student ID in the wrong format.
- Students use phones as well as computers, so the layout must adapt to any screen size.

**Objectives:**

1. Create a registration form that validates every field before saving.
2. Create a login form that checks the saved email and password.
3. Create a dashboard that shows the student's information and hides the password.
4. Make every page usable on phones, tablets, and desktops.
5. Use transitions and keyframe animations to give clear feedback.

## 5. Features and Technologies

**Features**

- Login with email and password, with clear error messages.
- Registration with email, username, password, and student ID (format `25-00000`).
- Duplicate checks: the same email or student ID cannot be registered twice.
- Dashboard showing the title "Student Portal", a welcome message with the username, the student ID, the username, and the email. The password is never displayed.
- Logout button that ends the session and returns to the login page.
- Dashboard protection: anyone who opens the dashboard without logging in is sent back to the login page.
- Responsive layout that works on phones, tablets, and desktops (media queries at 900px, 768px, and 480px).
- Animations: a fade-and-rise entrance for cards, a slide-in for titles, a shake for error messages, and smooth transitions on buttons and inputs.

**Technologies**

- **HTML5** for the page structure (three pages).
- **CSS3** for the theme, flexbox layouts, transitions, `@keyframes` animations, and `@media` queries.
- **JavaScript** for form validation, saving accounts in `localStorage`, storing the logged-in session in `sessionStorage`, and page redirects.
- **PNG icons** for the logo and dashboard cards.

*Note: Bootstrap was listed in the assignment checklist, but it was not used. The project must use pure HTML, CSS, and JavaScript without frameworks.*

## 6. Instructions

**Folder structure**

```
student-portal/
├── index.html          (Login Page)
├── register.html       (Registration Page)
├── dashboard.html      (Dashboard Page)
├── assets/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   └── script.js
│   └── images/
│       ├── logo.png
│       ├── user.png
│       ├── id-card.png
│       ├── email.png
│       └── logout.png
├── README.md
└── PROMPT_LOG.md
```

**How to open the application**

1. Download or extract the `student-portal` folder.
2. Open the folder and double-click `index.html`. It opens in your web browser.
3. Keep all files in their folders. The pages load `assets/css/style.css`, `assets/js/script.js`, and the images in `assets/images/`.

**How to use the application**

1. **Register:** On the login page, click **Register here**. Fill in the email, username, password (at least 6 characters), and student ID in the format `25-00000`, for example `25-00161`. Click **Create account**. After a short message, you are taken to the login page.
2. **Login:** Type the same email and password you registered with, then click **Login**. If the details are correct, you are taken to the dashboard.
3. **Dashboard:** View the welcome message, your username, your student ID, and your email.
4. **Logout:** Click **Logout** in the top bar to return to the login page.

**Tip:** Press Enter in any field to submit the form quickly.

**Testing on different screen sizes:** Open the browser developer tools (press F12), click the device toolbar icon, and choose a phone or tablet size to check the responsive layout.

## 7. AI Tools Used

I used **Claude** (by Anthropic) as a junior web developer. I gave it a role-based prompt (see PROMPT_LOG.md) asking it to plan the three-page structure, write the HTML, CSS, and JavaScript, generate the PNG icons, and draft this README and the prompt log. I then checked the file names and folder structure against the assignment and reviewed the code so I can explain each part. The theme color is `#551815`, and the HTML and CSS were limited to features from my learning notes, with any exceptions listed for my instructor.

## 8. Testing and Corrections

Common problems for this kind of project, and how the code is written to prevent them (these were addressed while writing the code, and should be confirmed by testing in a browser):

| Issue | How it was fixed or prevented |
| --- | --- |
| Error animation did not replay when the same error appeared twice | The `shake` class is removed, the browser is forced to recalculate layout (`offsetWidth`), and then the class is added again. |
| A student ID such as `2500161` was accepted | The ID must match the pattern `25-00000` (two digits, a hyphen, and five digits) before it is saved. |
| Duplicate accounts could be created | Registration checks the saved list for the same email and the same student ID before adding a new account. |
| The dashboard could be opened without logging in | The dashboard checks for a session and redirects to the login page if none exists. |
| The password could appear on the dashboard | The dashboard reads only the username, student ID, and email. |
| Text typed by a user could run as code | The dashboard uses `textContent`, which treats user input as plain text. |
| Layout broke on phones | Media queries change the layout at 900px, 768px, and 480px. The hero panel is hidden on small screens and the cards stack in one column. |

*Add the bugs you actually found during your own testing here, with what caused each one and how you fixed it.*

## 9. Known Limitations

- **No real database:** Accounts are saved in the browser's `localStorage`. They exist only on that browser and device, and clearing browser data removes them.
- **No backend authentication:** Login checks happen in JavaScript on the user's device, so anyone who inspects the page can see the saved data. This is only suitable for a lab demonstration.
- **Passwords are stored as plain text:** A real system would hash passwords on a server.
- **No email verification or password reset.**
- **No session expiry:** The session lasts until the browser tab is closed or the user logs out.
- **Labels are not linked to inputs:** The field labels are `<span>` elements, so screen readers may not announce them with their fields.
- **Limited browser support testing:** The project was written for modern browsers such as Chrome, Edge, and Firefox.

## 10. Credits

- **Logo and icons (`assets/images/`):** Created for this project by drawing simple shapes with the Python Pillow library. No external icon sets, stock images, or artwork were used.
- **Fonts:** No external fonts. The page uses the system font stack: Segoe UI, Roboto, Helvetica Neue, Arial, or the browser's default sans-serif font.
- **Frameworks and libraries:** None. Bootstrap and other frameworks were not used.
- **Code:** Written for this project. Standard HTML, CSS, and JavaScript references (such as MDN Web Docs) were used as guides for syntax.
