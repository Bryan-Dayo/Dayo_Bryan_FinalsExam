# Prompt Log: Student Portal

**Student:** Dayo Bryan, BSIT2b
**AI tool:** Claude (by Anthropic)

---

## Entry 1: Building the Student Portal Web App

### 1. Technique or Framework

**Role-based prompting** combined with **detailed specification prompting**. The prompt asks the AI to act as a junior web developer and gives a complete list of required files, features, constraints, and allowed technologies.

### 2. Purpose

To have the AI create a three-page student portal (login, registration, and dashboard) that follows the lab exam requirements. Specifically, it needed to:

- Use only the HTML and CSS features in my learning notes, and use JavaScript for interactivity.
- Use flexbox, transitions with `ease`, `forwards` animation fill, and `@keyframes`.
- Be responsive on every device using media queries.
- Use the exact theme color `#551815`, with PNG icons stored in an `assets` folder.
- Produce a `README.md` and a `PROMPT_LOG.md`.

### 3. Exact Prompt

```
act as my junior web developer, i am a BSIT student who is planning to make my a application development lab exam, create a simple web app that can be tittled of Student portal use html css javascript concept, you must use some propper alignment such as flexbox and try to use some simple transitions and animations such as ease, forward and @keyframes i want you to make a two markdown file that can be named as README.md and PROMPT_LOG.md the readme.md contains the following: 
Project title and description
Student Information Portal and its purpose
2. Student name and section
Your name and BSIT section
3. Target users and objectives
Students and the problems your system addresses
4. Features and technologies
Login, registration, dashboard, HTML, CSS, JS, Bootstrap
5. Instructions
How to open and use your application
6. AI tools used
ChatGPT and how you used it
7. Testing and corrections
Bugs encountered and how you fixed them
8. Known limitations
No real database or backend authentication
9. Credits
External images, icons, fonts, and other resources

The prompt log.md contains:
Required entry	What you should write
1. Technique or framework	Example: Role-based prompting
2. Purpose	What you wanted AI to accomplish
3. Exact prompt	The complete prompt you entered
4. Result summary	What AI generated
5. Evaluation	What was correct, incorrect, or missing
6. Improvement	Your revised prompt or manual correction

you must generate those two files and assuming and answer those required entry and content that is given for both md file.

The Structure of the web app student portal has a 3 page a total of 3 html files, Login Registerepage and Dashboard, i want you to make it responsive to all any device by using Media Queries. make the buttons clickable and working, i allow you to use javascript even if i didnt tackled that yet, but i expect to make it working for user to type email and password

the login contains email and password
the registration contains email, username, and password and also a student id that follows this format 25 -00000 for example my student id is 25-00161 then after i registered using my email and password and i already make my username, the next page is login, then after login it will go to dashboard that display everything except for password Welcome " Username" Id "number" then the title above student portal.
you must decide what the ui looks like just only i want #551815 exact theme color, you must decide for other color, and you must decide for where you can get some icons, and also use png for icons. follow this path when you sent all the files

├── index.html          (Login Page)
├── register.html       (Registration Page)
├── dashboard.html     (Dashboard Page)
│
├── assets/
│   ├── css/
│   │   └── style.css
│   │
│   ├── js/
│   │   └── script.js
│   │
│   └── images/
│
├── README.md
└── PROMPT_LOG.md


i AM EXPECTING TO SEE ONE FOLDER WHICH IS THE ASSET FOLDER CONTAINING THE script.js and style.js and image folder for those png you use,


TAKE NOTE!!
i allow you to use html known and css known skill.md i allow you to use any javascript concept, dont use frameworks i need pure css and html. follow the filename i sent and also the folder names
```

### 4. Result Summary

The AI generated the full project folder:

- **Three HTML pages:** `index.html` (login), `register.html` (registration with email, username, password, and student ID validated as `25-00000`), and `dashboard.html` (title, welcome message, username, student ID, and email, with no password shown).
- **One stylesheet** (`assets/css/style.css`) using `#551815` as the main color, flexbox layouts, `transition` with `ease`, `@keyframes` (fade, slide, shake), `animation-fill-mode: forwards`, and three media query breakpoints.
- **One JavaScript file** (`assets/js/script.js`) that validates each form, saves accounts in `localStorage`, stores the logged-in session in `sessionStorage`, redirects between pages, and protects the dashboard.
- **Five PNG icons** in `assets/images/`, drawn with Python Pillow.
- **README.md** with the nine sections requested and **PROMPT_LOG.md** with this entry.

### 5. Evaluation

**Correct:**

- The file names and folder structure match the requested tree.
- The theme color is exactly `#551815`.
- The student ID check uses the `25-00000` format, and the example `25-00161` passes.
- The dashboard shows the username, student ID, and email, and never the password.
- Animations use `ease`, `forwards`, and `@keyframes` as requested.
- JavaScript is used for interactivity, and no frameworks are used.

**Incorrect or needing attention:**

- **Bootstrap:** The README checklist asked for Bootstrap, but the same prompt said to avoid frameworks. The AI followed the "no frameworks" rule and noted the difference in the README. The instructor should be asked which one is correct.
- **Feature checklist:** The skill file lists some features (such as `color`, `width`, `:hover`, `<script>`, and `type="password"`) as not yet confirmed. The AI used them because the page cannot work without them, and it should have asked for confirmation before building. This should be checked with the instructor or the skill's owner.
- **Missing:** The AI wrote the README and bug table in general terms. The bugs section should be replaced with issues found during my own testing.
- **AI tool name:** The prompt asked for "ChatGPT" in the README. The AI used Claude, so the README should be edited if a different tool was used.

### 6. Improvement

I will test the app in a browser, record the bugs I find, and update the README's testing section. I will also use a revised prompt next time that asks the AI to confirm the allowed features first:

```
Before writing any code, list every HTML tag, attribute, CSS property, and selector
you plan to use, and check each one against my known HTML and CSS list. Mark any
item that is not in my confirmed list, and ask me to confirm it before you build.
Then build a 3-page student portal (login, register, dashboard) with flexbox,
ease transitions, forwards animation fill, @keyframes, and media queries.
Use JavaScript for validation and storing accounts in localStorage.
Theme color: #551815 exactly. Bootstrap is not allowed.
```

---

## Entry 2: Manual Correction (Template)

### 1. Technique or Framework

Manual correction after review (human-in-the-loop prompting).

### 2. Purpose

To fix anything the AI got wrong after I tested the app in a browser.


### 4. Result Summary

*ai doesnt change anything but i didnt meet my expecting output.*

### 5. Evaluation

*i already downloaded  a png in iconify because the file doesnt give me a icons.*

### 6. Improvement

*i write them using their propper hex color manually using vs code.*
