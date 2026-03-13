# 🌱 IKIGAI – Lifestyle Balance & Productivity Analyzer

A web-based platform that helps students understand how their **daily habits influence mental well-being, productivity, and life balance** using the **Ikigai philosophy and Machine Learning**.

The system analyzes lifestyle patterns such as **sleep, study, exercise, social activity, and screen time** and predicts an **Ikigai Balance Score** with **explainable insights** to guide users toward healthier routines.

---

# 📌 Project Motivation

Students often struggle to balance:

- Academics
- Mental health
- Personal interests
- Social life
- Physical well-being

Inspired by the **Japanese concept of Ikigai**, this platform combines:

```
Data + Habit Tracking + Machine Learning
```

to help students maintain harmony between **productivity and well-being**.

---

# 🎯 Objectives

- Track daily lifestyle habits
- Evaluate balance between work, health, and personal growth
- Predict an **Ikigai Balance Score**
- Provide **explainable AI recommendations**
- Visualize progress through dashboards and activity logs

---

# 🧠 Ikigai Model Concept

Ikigai is defined by four components:

| Component | Meaning |
|-----------|--------|
| Passion | What you love |
| Skill | What you are good at |
| Purpose | What the world needs |
| Profession | What you can be paid for |

The system maps these concepts to **data-driven lifestyle indicators**.

Example mapping:

| Ikigai Component | Lifestyle Indicators |
|------------------|----------------------|
| Passion | hobbies, extracurricular activities |
| Skill | study hours, learning effort |
| Purpose | social activity, helping others |
| Well-being | sleep, exercise, screen time |

---

# 🚀 Key Features

## 1️⃣ User Authentication
Users can create accounts and log in.

Pages included:

- `index.html`
- `signin.html`
- `signup.html`

---

## 2️⃣ Dashboard

The home dashboard provides quick access to:

- Analyze Ikigai score
- Accept daily challenge
- View progress history
- Mental wellness chatbot

---

## 3️⃣ Daily Ikigai Challenge

Users complete **three small daily tasks**:

```
Passion (10 minutes)
Skill (10 minutes)
Purpose / Profession (10 minutes)
```

Example tasks:

- Spend 10 minutes doing a hobby
- Solve coding problems or learn a concept
- Help someone or research opportunities

### Coin System

| Tasks Completed | Coins Earned |
|-----------------|-------------|
| 1 | 10 coins |
| 2 | 20 coins |
| 3 | 30 coins |

---

## 4️⃣ Progress Dashboard

Tracks user activity and shows:

- Total coins earned
- Active days
- Daily challenge history

Example history table:

| Date | Passion | Skill | Purpose | Coins |
|------|--------|------|--------|------|
| 2026-03-12 | ✔ | ✖ | ✔ | 20 |

---

## 5️⃣ Lifestyle Data Collection

Users input daily lifestyle data such as:

- Sleep hours
- Study hours
- Screen time
- Exercise minutes
- Social activity
- Mood score

These inputs are used to calculate lifestyle balance.

---

# 🤖 Machine Learning Model

The system predicts an **Ikigai Balance Score** using a machine learning model trained on lifestyle data.

Dataset used:

**Student Lifestyle Dataset**

https://www.kaggle.com/datasets/steve1215rogg/student-lifestyle-dataset

The dataset includes features such as:

- Sleep hours
- Study hours
- Physical activity
- Social interaction
- Screen time

---

# 📊 ML Pipeline

```
Data Collection
        ↓
Data Cleaning
        ↓
Feature Engineering
        ↓
Train/Test Split
        ↓
Model Training
        ↓
Model Evaluation
        ↓
Prediction
        ↓
Explainable AI Insights
```

---

# 🧮 Model Used

Primary model:

```
Random Forest Regressor
```

Why Random Forest?

- Works well with tabular data
- Captures nonlinear relationships
- Robust to overfitting
- Compatible with Explainable AI tools

---

# 🔍 Explainable AI (XAI)

The system uses:

```
SHAP (SHapley Additive Explanations)
```

to explain predictions.

Example output:

```
Your Ikigai Score: 69

Positive Factors
+ Good sleep habits
+ Consistent study time

Areas to Improve
- High screen time
- Low physical activity
```

This ensures predictions are **transparent and actionable**.

---

# 🧱 Tech Stack

### Frontend
- HTML
- CSS
- JavaScript

### Backend
- Python
- Flask

### Machine Learning
- Scikit-learn
- Pandas
- NumPy
- SHAP

### Dataset
- Kaggle Student Lifestyle Dataset

---

# 📁 Project Structure

```
IKIGAI_VERSION2
│
├── assets
│   └── ikigai.png
│
├── css
│   ├── style.css
│   └── challenge.css
│
├── js
│   ├── app.js
│   ├── challenge.js
│   └── history.js
│
├── index.html
├── signin.html
├── signup.html
├── home.html
├── challenge.html
├── history.html
├── about.html
```

---

# 📈 Future Enhancements

Planned improvements include:

- AI mental wellness chatbot
- Ikigai score visualization graphs
- streak tracking system
- personalized habit recommendations
- mobile responsive design
- real-time model retraining

---

# 👩‍💻 Author

**Prachi Patil**  
B.Tech IT Student

---

# 🌟 Vision

The vision of this project is to create a platform where **technology helps students live balanced and meaningful lives**.

Instead of only focusing on productivity, the system encourages:

```
Balance
Well-being
Purpose
Personal Growth
```

Inspired by the philosophy of **Ikigai**.