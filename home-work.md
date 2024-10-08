# RentCar

## Loyihaning Umumiy Ko'rinishi

**Loyiha nomi:** RentCar Dasturi  
**Texnologiyalar:** NestJS, Prisma, Multer, PostgreSQL, Rate limiting  
**Maqsad:** Masshtablanuvchi va samarali avtomobil ijarasi ilovasini ishlab chiqish.

## Ma'lumotlar Bazasi

### Jadval va Ustunlar

1. **File**

   - `id`: UUID
   - `url`: string
   - `mimetype`: string
   - `size`: number
   - `car_id`: UUID (chet kalit `car.id` ga)
   - `created_at`: timestamp
   - `last_edited_at`: timestamp

2. **User**

   - `id`: UUID
   - `phone`: string
   - `full_name`: string
   - `avatar`: string
   - `role`: enum (`client`, `owner`, `supervisor`, `admin`)
   - `created_at`: timestamp
   - `last_edited_at`: timestamp

3. **Company**

   - `id`: UUID
   - `name`: string
   - `owner`: UUID (chet kalit `user.id` ga)
   - `logo`: string
   - `created_at`: timestamp
   - `last_edited_at`: timestamp

4. **Model**

   - `id`: UUID
   - `name`: string
   - `company_id`: UUID (chet kalit `company.id` ga)
   - `created_at`: timestamp
   - `last_edited_at`: timestamp

5. **Car**

   - `id`: UUID
   - `name`: string
   - `model_id`: UUID (chet kalit `model.id` ga)
   - `company_id`: UUID (chet kalit `company.id` ga)
   - `info`: text
   - `created_at`: timestamp
   - `last_edited_at`: timestamp

6. **Transaction**
   - `id`: UUID
   - `company_id`: UUID (chet kalit `company.id` ga)
   - `user_id`: UUID (chet kalit `user.id` ga)
   - `user_data`: JSON
   - `car_id`: UUID (chet kalit `car.id` ga)
   - `car_data`: JSON
   - `price`: number
   - `start_date`: timestamp
   - `end_date`: timestamp
   - `status`: enum (`debit`, `credit`)
   - `created_at`: timestamp
   - `last_edited_at`: timestamp
   - `created_by`: UUID (chet kalit `user.id` ga)
   - `last_edited_by`: UUID (chet kalit `user.id` ga)

## Modullar va Ruxsatlar

### File

- **CRUD Amallar:** CRUD amallar talab qilinmaydi

### Company

- **Yaratish:** Faqat `admin`
- **Yangilash:** `admin`, `owner`
- **O'chirish:** Faqat `admin`
- **Barchasini olish:** Ochiq
- **ID bo'yicha olish:** Ochiq

### User

- **Ro'yxatdan o'tish (client):** Ochiq
- **Ro'yxatdan o'tish (adminlarsiz):** `admin`, `owner`
- **Kirish:** Ochiq
- **Barchasini olish:** `owner`, `supervisor`, `admin`
- **ID bo'yicha olish:** Ochiq

### Model

- **Yaratish:** `admin`, `owner`
- **Yangilash:** `admin`, `owner`
- **O'chirish:** `admin`, `owner`
- **Company ID bo'yicha olish:** Ochiq
- **ID bo'yicha olish:** Ochiq

### Car

- **Yaratish:** `admin`, `owner`
- **Yangilash:** `admin`, `owner`
- **O'chirish:** `admin`, `owner`
- **Company ID bo'yicha olish:** Ochiq
- **ID bo'yicha olish:** Ochiq

### Transaction

- **Yaratish:** `client`, `owner`, `supervisor`, `admin`
- **Yangilash:** `admin`, `owner`, `supervisor`
- **O'chirish:** `admin`, `owner`
- **ID bo'yicha olish:** `admin`, `owner`, `supervisor`
- **Barchasini olish:** `admin`, `owner`, `supervisor` (filtrlash: vaqt oralig'i, companyId, userId, carId, status)
- **Mening Transactionlarimni olish:** `client`, `owner`, `supervisor`, `admin` (filtrlash: vaqt oralig'i, companyId, status)

## Qo'shimcha Talablar

- **Rate Limiting:** Suiste'mollikni oldini olish uchun rate limiting ni amalga oshirish.
- **Fayl Boshqaruvi:** Fayllarni yuklash uchun Multer dan foydalanish.
- **Ma'lumotlar Bazasi Boshqaruvi:** Prisma dan ma'lumotlar bazasi boshqaruvi va migratsiyalar uchun foydalanish.
- **API Hujjatlari:** Swagger yordamida API hujjatlarini taqdim etish.
- **Autentifikatsiya:** JWT yoki OAuth yordamida autentifikatsiya amalga oshirish.
- **Xatolik Boshqaruvi:** NestJS filtrlaridan foydalanib markazlashgan xatolik boshqaruvi.

## Xulosa

Ushbu hujjat RentCar dasturining talablarini o'z ichiga oladi, ma'lumotlar bazasi sxemasi, modul ruxsatlari, baholash mezonlari va qo'shimcha talablarni batafsil yoritadi. Ushbu spetsifikatsiyalarni amalga oshirish mustahkam, masshtablanuvchi va samarali avtomobil ijarasi xizmatini ta'minlaydi.

