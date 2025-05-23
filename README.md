<h1 align="center">
  TriageMate
</h1>

<h2 align="center">
  An AI-powered symptom translation and parser for more efficient hospital triage - Empowering patients, supporting providers
</h2>

<h3>BCS Hacks 2025</h3>
Devpost link: https://devpost.com/software/TriageMate
<br>
<br>

<p align="center">
  <img src="assets/screenshots/logo.png" alt="logo" width="500"/>
</p>


<br>

## Contributors
- Vincent Tu
- Jennifer Wong
- Stephanie Xue
  
<br>

## Inspiration
Our inspiration for TriageMate stemmed from a shared understanding of the gaps in our current healthcare system. About a month ago, one of our team members had to take his mother, who suddenly started profusely bleeding, to the emergency department (ED) in the Vancouver General Hospital. While trying to find a spot to park, she had already completed the nurse-patient intake interview, despite not being able to speak English. The nurse who saw her marked her condition as "profusely bleeding, looks well", and together they ended up waiting at the hospital for 12 hours to be seen by a doctor because of this. If she had some help where she could speak in her native tongue to express her concerns and have the information parsed for triage, it would have helped her a lot. Another member of our team comes from a healthcare background as a pharmacist and has seen firsthand how communication gaps and systemic inefficiencies affect both patients and providers. This is what sparked our idea.

Communicating health concerns can be overwhelming — especially when symptoms are complex, emotions run high, or language barriers exist. Together, our group was inspired to create a solution that empowers patients to communicate their symptoms in their native language (spoken or text-based) and enables healthcare professionals to receive structured, meaningful triage reports to streamline care and improve triage. Through TriageMate, we aim to empower individuals to speak freely, in any language, and ensure that their needs are captured accurately and compassionately — helping healthcare professionals deliver the right care, faster.

<br>

## What It Does
TriageMate is an AI-powered hospital triage assistant that streamlines symptom reporting and risk assessment — where smart tech meets compassionate care. Our application transforms the traditional triage experience by enabling users to describe their symptoms through voice or text in any language, which is then intelligently translated, analyzed, and structured into a concise report for healthcare providers. Whether you're managing patient flow, reducing language barriers, or enhancing clinical decision-making, TriageMate empowers both patients and healthcare teams with faster, smarter, and more accessible triage.
<br>
<br>
Users can:
  - Input their symptoms through voice or text in any language 
  - The application will translate and parse through their input to generate a concise triage report for healthcare providers that they can review before confirming and submitting it to be stored in the database to be sent to the healthcare provider

<br>

## User Flow
<p align="center">
  <img src="assets/screenshots/layout1.png" alt="logo" width="800"/>
</p>

<p align="center">
  <img src="assets/screenshots/layout2.png" alt="logo" width="800"/>
</p>

<br>

## Features

### Landing Screen
- Welcomes the user to the application
<p align="center">
  <img src="assets/screenshots/landing.jpg" alt="landing" height="500"/>
</p>

### Profile Screen
- Allows the user to view their profile with demographic information including their name, date of birth, age, personal health number, address, and phone number
<p align="center">
  <img src="assets/screenshots/profile.jpg" alt="profile" height="500"/>
</p>

### Symptom Input Screen
- The user can input their symptoms through voice or text in any language 
<p align="center">
  <img src="assets/screenshots/input1.jpg" alt="input1" height="500" />
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <img src="assets/screenshots/input2.jpg" alt="input2" height="500" />
</p>


### Processing Screen
- Displays a processing/loading screen while the application generates the triage report
<p align="center">
  <img src="assets/screenshots/processing.jpg" alt="processing" height="500"/>
</p>

### Triage Results Screen
- Displays a structured triage report with details including the patient's chief complaint, symptom summary, risk factors, and potential red flags
- The user can confirm the information on the report before submitting it to be stored in the database to be sent to the healthcare provider
<p align="center">
  <img src="assets/screenshots/results1.jpg" alt="results1" height="500" />
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <img src="assets/screenshots/results2.jpg" alt="results2" height="500" />
</p>


### Submission Successs Screen
- Confirms that the triage report has been successfully submitted and stored to the database in the backend
<p align="center">
  <img src="assets/screenshots/success.jpg" alt="success" height="500"/>
</p>

### Other Languages
- User can type or speak their symptoms in any chosen language
<p align="center">
  <img src="assets/screenshots/chinese-input.png" alt="chinese-input" height="500" />
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <img src="assets/screenshots/chinese-result.png" alt="chinese-result" height="500" />
</p>

<br>

## How We Built It
- Frontend: Developed with React Native and TypeScript using the Expo platform, enabling a smooth and responsive cross-platform mobile experience
- Backend: Leverages Node.js with Express.js to handle API requests and server-side logic
- Database: MongoDB provides a secure and flexible database for storing report data
- API: The app integrates the Gemini 2.0 Flash API For AI-powered symptom translation and parsing, which translates and parses multilingual user input into structured medical triage reports

<br>

## Challenges We Ran Into
Most of our team had never worked with React Native or built a mobile app before, so the development process was a challenging learning experience. Getting the React Native environment set up with Expo and running the app smoothly on the mobile Expo Go platform proved to be tricky at first. We also encountered difficulties connecting the frontend to the backend on a mobile device, which required careful debugging to ensure seamless integration. Throughout development, we dealt with merge conflicts, platform-specific issues, and lots of trial-and-error debugging, all of which pushed us to grow rapidly as a team.

<br>

## Accomplishments That We're proud Of
- Managed to successfully build a multilingual AI-powered triage system that translates and parses user symptoms from any language that aims to improve accessibility for diverse patient populations
- Designed a clean, intuitive mobile app using React Native and TypeScript, making symptom input and report confirmation simple and user-friendly

<br>

## What We Learned
Through this project, we learned how to build a fully functional mobile application using React Native and the Expo platform, gaining hands-on experience with cross-platform development and mobile integration. We developed a deeper understanding of how to structure a React Native project, connect it to a backend, and debug issues specific to mobile environments. A key highlight was learning how to prompt engineer healthcare-related data—specifically, how to extract only the relevant clinical details from free-text input and translate it into a structured triage report using AI. Additionally, we strengthened our collaboration skills, learning how to work effectively as a team, manage merge conflicts, and support each other in navigating new tools and technologies.

<br>

## What's Next For TriageMate
Next for TriageMate, we aim to expand its capabilities to make it even more impactful in real-world healthcare settings. This includes implementing secure user authentication, enable persistent patient profiles, and allow direct integration with electronic health records (EHR) systems or healthcare provider dashboards. On the frontend, we want to improve the user experience with animations, accessibility features, and a more dynamic report visualization. Ultimately, we envision TriageMate evolving into a reliable digital assistant that bridges communication gaps and supports faster, more inclusive patient care across diverse healthcare environments.

<br>

## How to Run Locally (Frontend & Backend)
- Install the required tools
    - Install the latest version of node
        - Check the version using the command
            - ```node --version```
    - Install Expo CLI by using the command
        - ```npm install -g expo-cli```
    - Download the Expo Go app on your phone (iOS/Android devices)
- Clone the repository from github by typing in the command line
    - HTTPS: ```git clone https://github.com/steph-xue/TriageMate.git```
    - SSH: ```git clone git@github.com:steph-xue/TriageMate.git```
- Setup environment variables
    - Create a .env file inside the backend folder with the following information:
      - ```ATLAS_URL="mongodb+srv://your-mongo-uri"```
      - ```GEMINIAI="your-gemini-api-key"```
- Configure network access
    - Ensure your computer and phone are on the same wifi network
    - Add your computer's local IP address
        - In app/input.tsx, replace the backend URL (line 25) with your computer’s local IP address ```(e.g., http://192.168.1.xxx:3000)``` so your phone can connect to the backend server
- Install any project dependencies
    - From the root of the project, use command:
        - ```npm install```
    - May also need to cd into the backend and use:
        - ```npm install```
- Start the frontend Expo Server by typing in the command line
    - ```npx expo start```
- Start the backend server by typing in the command line
    - ```cd backend```
    - ```node app.js```
- It will provide you a url for the local host to view it from your computer and a QR code to run it on your phone
- Scan the QR code using your phone camera to open the application in your Expo Go app
