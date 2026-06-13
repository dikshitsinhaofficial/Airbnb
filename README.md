# 🏠 Airbnb Clone - Django Booking Platform

A full-stack Airbnb-inspired web application built using **Django** that allows users to discover, book, and manage accommodations for various purposes such as vacations, parties, events, temporary stays, and short-term rentals.

---

## 🚀 Live Demo

🔗 Add your deployed link here

---

## 📌 Features

### 👤 User Features
- User Registration & Authentication
- Secure Login & Logout
- Browse Available Properties
- Property Search & Exploration
- Book Properties for Specific Dates
- View Booking History
- Responsive User Interface

### 🏡 Host Features
- Add New Listings
- Upload Property Images
- Edit Property Details
- Manage Bookings
- Delete Listings

### 📅 Booking System
- Date-Based Reservation System
- Check Availability Before Booking
- Booking Confirmation
- Stay Duration Management

### 🔒 Security Features
- Django Authentication System
- CSRF Protection
- Form Validation
- Secure User Sessions

---

## 🛠️ Tech Stack

### Backend
- Django
- Python
- SQLite (Can be replaced with PostgreSQL/MySQL)

### Frontend
- HTML5
- CSS3
- Bootstrap
- JavaScript

### Tools & Libraries
- Django ORM
- Django Authentication
- Pillow (Image Handling)

---

## 📂 Project Structure

```bash
Airbnb/
│
├── airbnb/
│   ├── settings.py
│   ├── urls.py
│   └── wsgi.py
│
├── listings/
│   ├── models.py
│   ├── views.py
│   ├── urls.py
│   └── templates/
│
├── static/
├── media/
├── templates/
├── db.sqlite3
├── manage.py
└── requirements.txt
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/dikshitsinhaofficial/Airbnb.git
cd Airbnb
```

### 2️⃣ Create Virtual Environment

```bash
python -m venv venv
```

### 3️⃣ Activate Virtual Environment

#### Windows

```bash
venv\Scripts\activate
```

#### Linux/Mac

```bash
source venv/bin/activate
```

### 4️⃣ Install Dependencies

```bash
pip install -r requirements.txt
```

### 5️⃣ Apply Migrations

```bash
python manage.py makemigrations
python manage.py migrate
```

### 6️⃣ Create Superuser

```bash
python manage.py createsuperuser
```

### 7️⃣ Run Server

```bash
python manage.py runserver
```

Visit:

```bash
http://127.0.0.1:8000/
```

---

## 📸 Screenshots

### Home Page
Add screenshot here

### Property Listings
Add screenshot here

### Booking Page
Add screenshot here

### User Dashboard
Add screenshot here

---

## 🎯 Future Improvements

- Payment Gateway Integration (Stripe/Razorpay)
- Property Reviews & Ratings
- Wishlist/Favorites
- Email Notifications
- Google Maps Integration
- Advanced Search Filters
- Chat Between Host and Guest
- AI-Based Property Recommendations

---

## 📈 Learning Outcomes

Through this project, I gained hands-on experience in:

- Django Framework
- MVC/MVT Architecture
- Authentication & Authorization
- CRUD Operations
- Database Management
- File Handling & Image Uploads
- Responsive Web Design
- Full Stack Web Development

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repository
2. Create a feature branch

```bash
git checkout -b feature-name
```

3. Commit changes

```bash
git commit -m "Added new feature"
```

4. Push changes

```bash
git push origin feature-name
```

5. Open a Pull Request

---

## 👨‍💻 Author

**Dikshit Sinha**

- GitHub: https://github.com/dikshitsinhaofficial
- LinkedIn: Add your LinkedIn profile

---

## ⭐ Support

If you found this project useful, please consider giving it a ⭐ on GitHub.