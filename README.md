# Qo'qon shahar 2-son texnikumi — Rasmiy sayt

Qo'qon shahar 2-son texnikumining rasmiy veb-sayti. Zamonaviy, professional va ishonchli ta'lim muassasasi sayti, o'zining kontent boshqaruv paneli (admin) bilan.

## 🚀 Texnologiyalar

- **Frontend**: React 19, Vite
- **Routing**: React Router v7 (sahifalar `React.lazy` orqali bo'lib yuklanadi)
- **Animatsiyalar**: Framer Motion
- **Icons**: Lucide React
- **Ma'lumotlar bazasi**: Firebase Firestore
- **Fayl saqlash**: Firebase Storage
- **Admin autentifikatsiyasi**: Firebase Authentication (Email/Parol)
- **Til**: i18next (UZ asosiy, RU/EN — navigatsiya darajasida)
- **Dizayn**: Toza CSS (yordamchi frameworklarsiz)
- **Hosting**: Netlify

## 📦 Lokal ishga tushirish

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # production build -> dist/
npm run preview   # build natijasini ko'rish
npm run lint      # oxlint bilan tekshirish
```

## 🔥 Firebase sozlash (majburiy)

Sayt Firestore (ma'lumotlar), Storage (rasm fayllari) va Authentication (admin kirishi) dan foydalanadi. **Sayt to'g'ri ishlashi uchun o'zingizning Firebase loyihangiz kerak** — repodagi `.env` fayli faqat mahalliy test uchun edi, uni o'zingizning ma'lumotlaringiz bilan almashtiring.

1. [Firebase Console](https://console.firebase.google.com/) da yangi loyiha yarating.
2. **Build → Firestore Database** ni yoqing (production rejimida).
3. **Build → Storage** ni yoqing.
4. **Build → Authentication → Sign-in method** dan **Email/Parol** ni yoqing.
5. **Authentication → Users** bo'limidan admin uchun qo'lda foydalanuvchi qo'shing (masalan `admin@texnikum2.uz` + kuchli parol). Saytda ro'yxatdan o'tish shakli yo'q — adminlar faqat shu yerdan qo'shiladi.
6. Loyiha sozlamalaridan (⚙️ → Project settings → Your apps → Web app) `firebaseConfig` qiymatlarini oling va `.env` fayliga joylang (`.env.example` namuna sifatida bor):

   ```
   VITE_FIREBASE_API_KEY=...
   VITE_FIREBASE_AUTH_DOMAIN=...
   VITE_FIREBASE_PROJECT_ID=...
   VITE_FIREBASE_STORAGE_BUCKET=...
   VITE_FIREBASE_MESSAGING_SENDER_ID=...
   VITE_FIREBASE_APP_ID=...
   ```

7. Firestore va Storage xavfsizlik qoidalarini (`firestore.rules`, `storage.rules`) deploy qiling. Agar [Firebase CLI](https://firebase.google.com/docs/cli) o'rnatilgan bo'lsa:

   ```bash
   npm install -g firebase-tools
   firebase login
   firebase use --add          # loyihangizni tanlang
   firebase deploy --only firestore:rules,firestore:indexes,storage
   ```

   `firestore.indexes.json` yangiliklar ro'yxati (`published` + `createdAt`) uchun kerakli composite indexni o'z ichiga oladi — buni deploy qilmasangiz, chop etilgan yangiliklar ro'yxati bo'sh ko'rinishi mumkin.

## 🌐 Netlify'ga deploy qilish

1. Loyihani GitHub'ga push qiling.
2. [Netlify](https://app.netlify.com/) da **Add new site → Import an existing project** orqali repo'ni ulang.
3. Build sozlamalari `netlify.toml` dan avtomatik olinadi:
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Node versiyasi: 22
4. **Site settings → Environment variables** bo'limiga yuqoridagi 6 ta `VITE_FIREBASE_*` o'zgaruvchini qo'shing (Firebase konsolidan olingan qiymatlar bilan).
5. Deploy qiling. React Router'ning client-side routing'i uchun SPA redirect (`/* → /index.html`) `netlify.toml` da allaqachon sozlangan.
6. Deploy tugagach, `public/robots.txt` va `public/sitemap.xml` fayllaridagi `https://your-domain.uz` manzilini haqiqiy domeningizga almashtirib qayta deploy qiling.

## 🔐 Admin panel

- Kirish: `/admin/login`
- Admin foydalanuvchilari faqat Firebase Authentication konsolidan qo'lda yaratiladi (yuqoridagi 5-qadam).
- Boshqarish mumkin: yangiliklar, qo'shimcha ta'lim yo'nalishlari, galereya rasmlari, sozlamalar.
- Rasmiy ta'lim yo'nalishlari ro'yxati (`src/data/constants.js` dagi `DIRECTIONS_DATA`) Vazirlik tomonidan tasdiqlangan kodlarga asoslangani uchun kodda saqlanadi; admin panel orqali faqat qo'shimcha yo'nalishlar qo'shish/o'chirish mumkin.

## 📁 Loyiha tuzilishi

```
src/
  components/   Qayta ishlatiladigan UI komponentlar
  pages/        Ommaviy sahifalar (Home, About, Directions, News, ...)
  pages/admin/  Admin panel sahifalari
  layouts/      MainLayout va AdminLayout
  firebase/     Firebase config, auth va firestore funksiyalari
  data/         Statik kontent (yo'nalishlar, aloqa, navigatsiya)
  i18n/         Ko'p tillilik sozlamalari
  styles/       Global CSS
```
