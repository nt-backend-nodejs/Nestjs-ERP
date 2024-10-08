## Mahsulot Talablar Hujjati (PRD)

### Loyihaning Umumiy Ko'rinishi
**Loyiha nomi:** RentCar Dasturi  
**Texnologiyalar:** NestJS, Prisma, Multer, PostgreSQL, JWT, PassportJS, Swagger, Telegram Bot  
**Maqsad:** Masshtablanuvchi va samarali avtomobil ijarasi ilovasini ishlab chiqish.

### Umumiy Qo'shimchalar
1. **Email Verify:** Foydalanuvchilarni email orqali tasdiqlash.
2. **Refresh Token:** Sessiyani yangilash uchun refresh tokenlar qo'llaniladi.
3. **Update Password:** Foydalanuvchi parolini yangilash imkoniyati.
4. **Telegram Bot:** Telegram orqali avtomatik bildirishnomalar va xizmatlar.
5. **File Upload for Avatar:** Foydalanuvchi avatarlarini yuklash.
6. **RABAS (Role-Based Access Control System):** Rollarga asoslangan kirish huquqlarini boshqarish.

---

### Ma'lumotlar Bazasi
#### Jadval va Ustunlar
1. **Auth**
   - Foydalanuvchilarni autentifikatsiya qilish va ro'yxatdan o'tkazish uchun foydalaniladi.
   - **Metodlar:**
     - `POST /api/auth/login`: Foydalanuvchini tizimga kirish (autentifikatsiya qilish).
     - `POST /api/auth/register`: Foydalanuvchini ro'yxatdan o'tkazish.

2. **Brands**
   - Avtomobil brendlari haqida ma'lumotlarni boshqarish.
   - **Metodlar:**
     - `GET /api/brands/getall`: Barcha brendlarni olish.
     - `GET /api/brands/getbyid`: Brendni ID bo'yicha olish.
     - `POST /api/brands/add`: Yangi brend qo'shish.
     - `POST /api/brands/delete`: Brendni o'chirish.
     - `POST /api/brands/update`: Brend ma'lumotlarini yangilash.

3. **CarFindeks**
   - Avtomobil Findeks (kredit reytingi) ma'lumotlarini boshqarish.
   - **Metodlar:**
     - `GET /api/carfindeks/getall`: Barcha Findeks ma'lumotlarini olish.
     - `GET /api/carfindeks/getcarfindeksdetail`: Avtomobil Findeks ma'lumotlarini olish.
     - `GET /api/carfindeks/getcarfindeksdetailbyuserid`: Foydalanuvchi ID bo'yicha Findeks ma'lumotlarini olish.

4. **CarImages**
   - Avtomobil rasmlarini boshqarish.
   - **Metodlar:**
     - `GET /api/carimages/getall`: Barcha avtomobil rasmlarini olish.
     - `GET /api/carimages/getbyimageid`: Rasmni ID bo'yicha olish.
     - `GET /api/carimages/getbycarid`: Avtomobil ID bo'yicha rasmlarni olish.
     - `POST /api/carimages/add`: Yangi rasm qo'shish.
     - `POST /api/carimages/delete`: Rasmni o'chirish.

5. **Cars**
   - Avtomobillar haqida ma'lumotlarni boshqarish.
   - **Metodlar:**
     - `GET /api/cars/getall`: Barcha avtomobillarni olish.
     - `GET /api/cars/getbyid`: Avtomobilni ID bo'yicha olish.
     - `GET /api/cars/getbybrandid`: Brend ID bo'yicha avtomobillarni olish.
     - `GET /api/cars/getbycoloridwithdetails`: Rang ID bo'yicha avtomobillarni olish.
     - `GET /api/cars/getbybrandandcolor`: Brend va rang bo'yicha avtomobillarni olish.
     - `POST /api/cars/add`: Yangi avtomobil qo'shish.
     - `POST /api/cars/delete`: Avtomobilni o'chirish.
     - `POST /api/cars/update`: Avtomobil ma'lumotlarini yangilash.

6. **Colors**
   - Avtomobil ranglari haqida ma'lumotlarni boshqarish.
   - **Metodlar:**
     - `GET /api/colors/getall`: Barcha ranglarni olish.
     - `GET /api/colors/getbyid`: Rangni ID bo'yicha olish.
     - `POST /api/colors/add`: Yangi rang qo'shish.
     - `POST /api/colors/delete`: Rangni o'chirish.
     - `POST /api/colors/update`: Rang ma'lumotlarini yangilash.

7. **Contacts**
   - Aloqa ma'lumotlarini boshqarish.
   - **Metodlar:**
     - `GET /api/contacts/getall`: Barcha aloqa ma'lumotlarini olish.
     - `POST /api/contacts/add`: Yangi aloqa ma'lumotlarini qo'shish.

8. **Customers**
   - Mijozlar haqida ma'lumotlarni boshqarish.
   - **Metodlar:**
     - `GET /api/customers/getall`: Barcha mijozlarni olish.
     - `GET /api/customers/getbyid`: Mijozni ID bo'yicha olish.
     - `POST /api/customers/add`: Yangi mijoz qo'shish.
     - `POST /api/customers/update`: Mijoz ma'lumotlarini yangilash.

9. **Findeks**
   - Findeks (kredit reytingi) ma'lumotlarini boshqarish.
   - **Metodlar:**
     - `GET /api/findeks/getall`: Barcha Findeks ma'lumotlarini olish.
     - `GET /api/findeks/getfindeksdetail`: Findeks ma'lumotlarini olish.
     - `GET /api/findeks/getfindeksdetailbyuserid`: Foydalanuvchi ID bo'yicha Findeks ma'lumotlarini olish.

10. **Payments**
    - To'lovlar haqida ma'lumotlarni boshqarish.
    - **Metodlar:**
      - `GET /api/payments/getall`: Barcha to'lovlarni olish.
      - `GET /api/payments/pay`: To'lovni amalga oshirish.
      - `POST /api/payments/add`: Yangi to'lov qo'shish.
      - `POST /api/payments/update`: To'lov ma'lumotlarini yangilash.
      - `POST /api/payments/delete`: To'lovni o'chirish.

11. **Rentals**
    - Ijara shartnomalari haqida ma'lumotlarni boshqarish.
    - **Metodlar:**
      - `GET /api/rentals/getall`: Barcha ijara shartnomalarini olish.
      - `GET /api/rentals/getdetails`: Ijara shartnomasi tafsilotlarini olish.
      - `POST /api/rentals/add`: Yangi ijara shartnomasi qo'shish.
      - `POST /api/rentals/update`: Ijara shartnomasi ma'lumotlarini yangilash.
      - `POST /api/rentals/delete`: Ijara shartnomasini o'chirish.

12. **Users**
    - Foydalanuvchilar haqida ma'lumotlarni boshqarish.
    - **Metodlar:**
      - `GET /api/users/getall`: Barcha foydalanuvchilarni olish.
      - `GET /api/users/getbyid`: Foydalanuvchini ID bo'yicha olish.
      - `POST /api/users/add`: Yangi foydalanuvchi qo'shish.
      - `POST /api/users/delete`: Foydalanuvchini o'chirish.
      - `POST /api/users/update`: Foydalanuvchi ma'lumotlarini yangilash.
      - `POST /api/users/uploadprofile`: Profil rasmni yuklash.
      - `GET /api/users/email`: Foydalanuvchi email manzilini olish.
      - `GET /api/users/id`: Foydalanuvchi ID sini olish.

13. **Email Verification**
    - Foydalanuvchilarni email orqali tasdiqlash uchun.
    - **Metodlar:**
      - `POST /api/auth/verify-email`: Emailni tasdiqlash tokenini yuborish.
      - `GET /api/auth/confirm-email`: Tasdiqlash tokeni orqali emailni tasdiqlash.

14. **Token Management**
    - Sessiyalarni yangilash va tokenlarni boshqarish.
    - **Metodlar:**
      - `POST /api/auth/refresh-token`: Yangi access va refresh tokenlarni yaratish.
      - `POST /api/auth/revoke-token`: Refresh tokenni bekor qilish.

15. **Password Management**
    - Foydalanuvchi parolini boshqarish.
    - **Metodlar:**
      - `POST /api/auth/update-password`: Parolni yangilash.
      - `POST /api/auth/forgot-password`: Parolni tiklash uchun email yuborish.
      - `POST /api/auth/reset-password`: Parolni tiklash.

16. **Telegram Bot**
    - Telegram orqali avtomatik bildirishnomalar va xizmatlar.
    - **Funktsional Talablar:**
      - Yangi avtomob

illarni ko'rish, mavjudlikni tekshirish, buyurtmalarni ko'rish va boshqalar.
      - Foydalanuvchilarning avtomatik bildirishnomalari uchun qo'llab-quvvatlash.

17. **RABAS (Role-Based Access Control System)**
    - Rollarga asoslangan kirish huquqlarini boshqarish.
    - **Rollar:**
      - `client`, `owner`, `supervisor`, `admin`
    - **Funktsional Talablar:**
      - Har bir ro'l uchun maxsus huquqlar va ruxsatlar belgilanishi.

### Qo'shimcha Talablar
- **Rate Limiting:** Suiste'mollikni oldini olish uchun rate limiting joriy qilish.
- **Fayl Boshqaruvi:** Fayllarni yuklash uchun Multer dan foydalanish, bulutli saqlash (Amazon S3 yoki boshqalar) qo'llab-quvvatlanishi mumkin.
- **Ma'lumotlar Bazasi Boshqaruvi:** Prisma orqali ma'lumotlar bazasini boshqarish va migratsiyalarni amalga oshirish.
- **Autentifikatsiya:** JWT yoki OAuth yordamida autentifikatsiyani amalga oshirish. Refresh tokenlar orqali sessiyalarni uzaytirish.
- **Xatolik Boshqaruvi:** Markazlashgan xatolik boshqaruvi uchun NestJS filtrlaridan foydalanish.

### Public Dekorator
Public API'lar uchun `@Public` dekoratori qo'llanilishi kerak, bu autentifikatsiya talab qilinmaydigan endpointlarni belgilash uchun ishlatiladi.

### PassportJS Bilan Integratsiya
**Autentifikatsiya strategiyalari:**
- **JWT:** Sessiyalarni boshqarish uchun JWT ishlatiladi.
- **OAuth2:** Google, Facebook va boshqa xizmatlar orqali autentifikatsiya qo'llab-quvvatlanadi.

#### Implementatsiya Talablari
1. **JWT Strategy:**
   - Har bir so'rov uchun foydalanuvchini tekshiradi.
   - JWT tokenni tekshiradi va foydalanuvchi ma'lumotlarini olish imkonini beradi.

2. **OAuth2 Strategy:**
   - Tashqi xizmatlar orqali autentifikatsiya (Google, Facebook va boshqalar).

### Xulosa
Ushbu hujjat RentCar dasturining API endpointlari, ma'lumotlar bazasi sxemasi, modul ruxsatlari va qo'shimcha talablarni batafsil yoritadi. Bu PRD loyiha jamoasiga API ni ishlab chiqish va undan foydalanishni aniq tushunish imkonini beradi. Yangi funksiyalar va o'zgarishlar kiritilganida, bu hujjatni yangilab turish muhimdir.

--- 

## Mahsulot Talablar Hujjati (PRD)

### Loyihaning Umumiy Ko'rinishi
**Loyiha nomi:** RentCar Dasturi  
**Texnologiyalar:** NestJS, Prisma, Multer, PostgreSQL, JWT, PassportJS, Swagger, Telegram Bot  
**Maqsad:** Masshtablanuvchi va samarali avtomobil ijarasi ilovasini ishlab chiqish.

---

## Ma'lumotlar Bazasi
### Jadval va Ustunlar
Loyihada foydalaniladigan asosiy ma'lumotlar bazasi jadvallari va ularning ustunlari quyidagicha:

#### 1. **Auth**
- Foydalanuvchilarni autentifikatsiya qilish va ro'yxatdan o'tkazish uchun.
  - `id`: UUID (Primary Key)
  - `email`: string (Unique, Foydalanuvchi email manzili)
  - `password`: string (Hashlangan parol)
  - `role`: enum (`client`, `owner`, `supervisor`, `admin`)
  - `created_at`: timestamp (Foydalanuvchi yaratilgan vaqti)
  - `updated_at`: timestamp (Oxirgi yangilanish vaqti)

#### 2. **Brands**
- Avtomobil brendlari haqida ma'lumotlarni boshqarish.
  - `id`: UUID (Primary Key)
  - `name`: string (Brend nomi)
  - `created_at`: timestamp (Yaratilgan vaqti)
  - `updated_at`: timestamp (Oxirgi yangilanish vaqti)

#### 3. **CarFindeks**
- Avtomobil Findeks (kredit reytingi) ma'lumotlarini boshqarish.
  - `id`: UUID (Primary Key)
  - `car_id`: UUID (Foreign Key, `Car` jadvaliga)
  - `user_id`: UUID (Foreign Key, `User` jadvaliga)
  - `score`: number (Findeks balli)
  - `created_at`: timestamp (Yaratilgan vaqti)
  - `updated_at`: timestamp (Oxirgi yangilanish vaqti)

#### 4. **CarImages**
- Avtomobil rasmlarini boshqarish.
  - `id`: UUID (Primary Key)
  - `car_id`: UUID (Foreign Key, `Car` jadvaliga)
  - `url`: string (Rasm URL manzili)
  - `mimetype`: string (MIME turi)
  - `size`: number (Fayl hajmi)
  - `created_at`: timestamp (Yaratilgan vaqti)
  - `updated_at`: timestamp (Oxirgi yangilanish vaqti)

#### 5. **Cars**
- Avtomobillar haqida ma'lumotlarni boshqarish.
  - `id`: UUID (Primary Key)
  - `name`: string (Avtomobil nomi)
  - `model_id`: UUID (Foreign Key, `Model` jadvaliga)
  - `brand_id`: UUID (Foreign Key, `Brand` jadvaliga)
  - `year`: number (Ishlab chiqarilgan yil)
  - `color_id`: UUID (Foreign Key, `Color` jadvaliga)
  - `registration_number`: string (Ro'yxatga olish raqami)
  - `is_available`: boolean (Mavjudlik holati)
  - `created_at`: timestamp (Yaratilgan vaqti)
  - `updated_at`: timestamp (Oxirgi yangilanish vaqti)

#### 6. **Colors**
- Avtomobil ranglari haqida ma'lumotlarni boshqarish.
  - `id`: UUID (Primary Key)
  - `name`: string (Rang nomi)
  - `created_at`: timestamp (Yaratilgan vaqti)
  - `updated_at`: timestamp (Oxirgi yangilanish vaqti)

#### 7. **Contacts**
- Aloqa ma'lumotlarini boshqarish.
  - `id`: UUID (Primary Key)
  - `user_id`: UUID (Foreign Key, `User` jadvaliga)
  - `phone`: string (Telefon raqami)
  - `email`: string (Email manzili)
  - `created_at`: timestamp (Yaratilgan vaqti)
  - `updated_at`: timestamp (Oxirgi yangilanish vaqti)

#### 8. **Customers**
- Mijozlar haqida ma'lumotlarni boshqarish.
  - `id`: UUID (Primary Key)
  - `full_name`: string (To'liq ism)
  - `email`: string (Email manzili)
  - `phone`: string (Telefon raqami)
  - `created_at`: timestamp (Yaratilgan vaqti)
  - `updated_at`: timestamp (Oxirgi yangilanish vaqti)

#### 9. **Findeks**
- Findeks (kredit reytingi) ma'lumotlarini boshqarish.
  - `id`: UUID (Primary Key)
  - `user_id`: UUID (Foreign Key, `User` jadvaliga)
  - `score`: number (Findeks balli)
  - `created_at`: timestamp (Yaratilgan vaqti)
  - `updated_at`: timestamp (Oxirgi yangilanish vaqti)

#### 10. **Payments**
- To'lovlar haqida ma'lumotlarni boshqarish.
  - `id`: UUID (Primary Key)
  - `user_id`: UUID (Foreign Key, `User` jadvaliga)
  - `amount`: number (To'lov summasi)
  - `method`: string (To'lov usuli)
  - `status`: enum (`pending`, `completed`, `failed`)
  - `created_at`: timestamp (Yaratilgan vaqti)
  - `updated_at`: timestamp (Oxirgi yangilanish vaqti)

#### 11. **Rentals**
- Ijara shartnomalari haqida ma'lumotlarni boshqarish.
  - `id`: UUID (Primary Key)
  - `user_id`: UUID (Foreign Key, `User` jadvaliga)
  - `car_id`: UUID (Foreign Key, `Car` jadvaliga)
  - `start_date`: timestamp (Ijara boshlanish sanasi)
  - `end_date`: timestamp (Ijara tugash sanasi)
  - `total_price`: number (Umumiy narx)
  - `status`: enum (`active`, `completed`, `cancelled`)
  - `created_at`: timestamp (Yaratilgan vaqti)
  - `updated_at`: timestamp (Oxirgi yangilanish vaqti)

#### 12. **Users**
- Foydalanuvchilar haqida ma'lumotlarni boshqarish.
  - `id`: UUID (Primary Key)
  - `email`: string (Foydalanuvchi email manzili)
  - `password`: string (Hashlangan parol)
  - `full_name`: string (To'liq ism)
  - `avatar_url`: string (Avatar URL manzili)
  - `role`: enum (`client`, `owner`, `supervisor`, `admin`)
  - `created_at`: timestamp (Foydalanuvchi yaratilgan vaqti)
  - `updated_at`: timestamp (Oxirgi yangilanish vaqti)

#### 13. **Email Verification**
- Foydalanuvchilarni email orqali tasdiqlash uchun.
  - `id`: UUID (Primary Key)
  - `user_id`: UUID (Foreign Key, `User` jadvaliga)
  - `token`: string (Tasdiqlash tokeni)
  - `created_at`: timestamp (Token yaratilgan vaqti)
  - `expires_at`: timestamp (Token muddati tugash vaqti)

#### 14. **Token Management**
- Sessiyalarni yangilash va tokenlarni boshqarish.
  - `id`: UUID (Primary Key)
  - `user_id`: UUID (Foreign Key, `User` jadvaliga)
  - `token`: string (Refresh token)
  - `created_at`: timestamp (Token yaratilgan vaqti)
  - `expires_at`: timestamp (Token muddati tugash vaqti)

#### 15. **Password Management**
- Foydalanuvchi parolini boshqarish.
  - **Metodlar:**
    - `POST /api/auth/update-password`: Parolni yangilash.
    - `POST /api/auth/forgot-password`: Parolni tiklash uchun email yuborish.
    - `POST /api/auth/reset-password`: Parolni tiklash.

---

## Modullar va Ruxsatlar
### Yangi Modullar
#### Telegram Bot
- Telegram orqali avtomatik bildirishnomalar va xizmatlar.
  - **Funktsional Talablar:**
    - Yangi avtomobillarni ko'rish, mavjudlikni tekshirish, buyurtmalarni ko'rish va boshqalar.
    - Foydalanuvchilarning avtomatik bildirishnomalari uchun qo'llab-quvvatlash.

#### RABAS (Role-Based Access Control System)
- Rollarga asoslangan kirish huquqlarini boshqarish.
  - **Rollar:**
    - `client`, `owner`, `supervisor`, `admin`
  - **Funktsional Talablar:**
    - Har bir ro'l uchun maxsus huquqlar va ruxsatlar belgilanishi.
