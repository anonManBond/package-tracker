# 📦 YellowTrack – Parcel Tracking App

A clean, scalable, and user-friendly parcel tracking web application built with ReactJS. Created as part of a technical evaluation for Yellow Corporation.

---

## 🧠 UX Philosophy

This project applies modern web design and psychology principles:

- 🎯 Swiss Grid for layout clarity
- 🎨 Emotionally responsive color palette tied to parcel status
- 🧠 NLP & Priming for comfort and control
- 📱 Responsive design for mobile & desktop

---

## 🚀 Features

- 📋 Order list view:
  - Displays ETA, status, pickup location
  - Live-translated content (EN/SV toggle)
  - Status badge with color-coded meaning
- 🔍 Order detail page:
  - Extended info (delivery address, user name, parcel ID)
  - Live interactive map with parcel coordinates
- 🌐 i18n support via Context + custom translation structure
- ⚠️ Graceful 404 fallback page
- 💬 Fully scalable for future language and region support

---

## 🛠 Tech Stack

- React (CRA)
- Styled-components
- Axios (API calls)
- React Router
- React Context (for i18n prep)
- Leaflet + OpenStreetMap (interactive maps)
- Mockaroo (for order data)

---

## 🗺 Live Map Note
- Due to API quota limits on Mockaroo, data has been cached locally during development (/public/mock-orders.json).
- Map coordinates are resolved using OpenStreetMap Nominatim API or directly from location_coordinate_latitude/longitude fields provided in the dataset.
  
---

## 📦 Installation

```bash
git clone https://github.com/anonManBond/package-tracker.git
cd package-tracker
npm install
npm start
