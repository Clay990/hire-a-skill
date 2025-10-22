# Hire-a-Skill 🤝

**Hire-a-Skill** is a mobile marketplace built with React Native and Firebase, designed to connect users with local individuals offering their skills, time, and companionship.

Unlike traditional rental apps that focus on "things," this project's unique focus is on the **human element**. It's a platform for hiring a photographer for an hour, finding a "foodie buddy" to explore new restaurants, or booking a local guitar tutor.

---

## 📸 Project Demo

*(TODO: Record a GIF (using tools like GIPHY Capture) showing user auth, profile creation, browsing, and the chat feature.)*

---

## ✨ Core Features

* **🛡️ Secure Authentication:** Users can sign up or log in easily using their **Email & Password** or **Phone Number** (via Firebase Auth).
* **👤 Service Provider Profiles:** Users can switch to a "Provider" profile to market their skills. This includes:
    * A gallery of their work/photos.
    * A list of skills they offer (e.g., "Photography," "Tutoring," "Event Help").
    * Their set **price per hour**.
* **🗺️ Location-Based Browsing:** The home screen features a beautiful grid/list of available providers, which users can **search and filter** based on skill and location. This is powered by `expo-location` to find buddies nearby.
* **💬 Real-Time In-App Chat:** This is the app's killer feature! Built with **Firebase (Firestore)**, any user can tap on a provider's profile and instantly start a real-time chat to ask questions, negotiate terms, or finalize a booking.

---

## 🚀 Why This Project?

This app was built as a comprehensive portfolio project to demonstrate a full-stack "social" application. It proves proficiency in:

* **Complex State Management:** Handling user auth status, profiles, and real-time chat messages.
* **Full-Stack Integration:** Connecting a React Native frontend with a powerful BaaS (Backend as a Service) like Firebase.
* **Real-Time Capabilities:** Implementing a core feature (chat) that requires real-time data synchronization.
* **Native API Usage:** Accessing device hardware like GPS for location-based searching.

---

## 🛠️ Tech Stack

* **Frontend:** [React Native](https://reactnative.dev/) (managed with [Expo](https://expo.dev/))
* **Backend & Database:** [Firebase](https://firebase.google.com/)
    * **Firebase Authentication** (for Email & Phone)
    * **Firestore** (for user profiles, skill listings, and chat messages)
    * **Firebase Storage** (for profile pictures and gallery images)
* **Navigation:** [React Navigation](https://reactnavigation.org/)
* **Location:** `expo-location`
* **Form Handling:** (e.g., [Formik](https://formik.org/) or [React Hook Form](https://react-hook-form.com/))
* **Styling:** React Native Stylesheet

---

## ⚙️ Getting Started

To clone and run this project locally, you will need [Node.js](https://nodejs.org/en/) and [Git](https://git-scm.com/) installed on your computer.

### 1. Clone the Repository

```bash
git clone https://github.com/Clay990/hire-a-skill.git
cd hire-a-skill
