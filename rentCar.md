### Mahsulot Talablar Hujjati (PRD)

#### Loyihaning Umumiy Ko'rinishi

**Loyiha nomi:** RentCar Dasturi  
**Texnologiyalar:** NestJS, Prisma, Multer, PostgreSQL, JWT, PassportJS, Swagger, Telegram Bot  
**Maqsad:** Masshtablanuvchi va samarali avtomobil ijarasi ilovasini ishlab chiqish.

#### Umumiy Qo'shimchalar

1. **Email Verify:** Foydalanuvchilarni email orqali tasdiqlash.
2. **Refresh Token:** Sessiyani yangilash uchun refresh tokenlar qo'llaniladi.
3. **Update Password:** Foydalanuvchi parolini yangilash imkoniyati.
4. **Telegram Bot:** Telegram orqali avtomatik bildirishnomalar va xizmatlar.
5. **File Upload for Avatar:** Foydalanuvchi avatarlarini yuklash.
6. **RABAS (Role-Based Access Control System):** Rollarga asoslangan kirish huquqlarini boshqarish.

---

### Ma'lumotlar Bazasi

#### Jadval va Ustunlar

Loyihada foydalaniladigan asosiy ma'lumotlar bazasi jadvallari va ularning ustunlari quyidagicha:

```json
{
  "Auth": {
    "id": "UUID",
    "email": "string (Unique, Foydalanuvchi email manzili)",
    "password": "string (Hashlangan parol)",
    "role": "enum (client, owner, supervisor, admin)",
    "created_at": "timestamp (Foydalanuvchi yaratilgan vaqti)",
    "updated_at": "timestamp (Oxirgi yangilanish vaqti)"
  },
  "Brands": {
    "id": "UUID",
    "name": "string (Brend nomi)",
    "created_at": "timestamp (Yaratilgan vaqti)",
    "updated_at": "timestamp (Oxirgi yangilanish vaqti)"
  },
  "CarFindeks": {
    "id": "UUID",
    "car_id": "UUID (Foreign Key, Car jadvaliga)",
    "user_id": "UUID (Foreign Key, User jadvaliga)",
    "score": "number (Findeks balli)",
    "created_at": "timestamp (Yaratilgan vaqti)",
    "updated_at": "timestamp (Oxirgi yangilanish vaqti)"
  },
  "CarImages": {
    "id": "UUID",
    "car_id": "UUID (Foreign Key, Car jadvaliga)",
    "url": "string (Rasm URL manzili)",
    "mimetype": "string (MIME turi)",
    "size": "number (Fayl hajmi)",
    "created_at": "timestamp (Yaratilgan vaqti)",
    "updated_at": "timestamp (Oxirgi yangilanish vaqti)"
  },
  "Cars": {
    "id": "UUID",
    "name": "string (Avtomobil nomi)",
    "model_id": "UUID (Foreign Key, Model jadvaliga)",
    "brand_id": "UUID (Foreign Key, Brand jadvaliga)",
    "year": "number (Ishlab chiqarilgan yil)",
    "color_id": "UUID (Foreign Key, Color jadvaliga)",
    "registration_number": "string (Ro'yxatga olish raqami)",
    "is_available": "boolean (Mavjudlik holati)",
    "created_at": "timestamp (Yaratilgan vaqti)",
    "updated_at": "timestamp (Oxirgi yangilanish vaqti)"
  },
  "Colors": {
    "id": "UUID",
    "name": "string (Rang nomi)",
    "created_at": "timestamp (Yaratilgan vaqti)",
    "updated_at": "timestamp (Oxirgi yangilanish vaqti)"
  },
  "Contacts": {
    "id": "UUID",
    "user_id": "UUID (Foreign Key, User jadvaliga)",
    "phone": "string (Telefon raqami)",
    "email": "string (Email manzili)",
    "created_at": "timestamp (Yaratilgan vaqti)",
    "updated_at": "timestamp (Oxirgi yangilanish vaqti)"
  },
  "Customers": {
    "id": "UUID",
    "full_name": "string (To'liq ism)",
    "email": "string (Email manzili)",
    "phone": "string (Telefon raqami)",
    "created_at": "timestamp (Yaratilgan vaqti)",
    "updated_at": "timestamp (Oxirgi yangilanish vaqti)"
  },
  "Findeks": {
    "id": "UUID",
    "user_id": "UUID (Foreign Key, User jadvaliga)",
    "score": "number (Findeks balli)",
    "created_at": "timestamp (Yaratilgan vaqti)",
    "updated_at": "timestamp (Oxirgi yangilanish vaqti)"
  },
  "Payments": {
    "id": "UUID",
    "user_id": "UUID (Foreign Key, User jadvaliga)",
    "amount": "number (To'lov summasi)",
    "method": "string (To'lov usuli)",
    "status": "enum (pending, completed, failed)",
    "created_at": "timestamp (Yaratilgan vaqti)",
    "updated_at": "timestamp (Oxirgi yangilanish vaqti)"
  },
  "Rentals": {
    "id": "UUID",
    "user_id": "UUID (Foreign Key, User jadvaliga)",
    "car_id": "UUID (Foreign Key, Car jadvaliga)",
    "start_date": "timestamp (Ijara boshlanish sanasi)",
    "end_date": "timestamp (Ijara tugash sanasi)",
    "total_price": "number (Umumiy narx)",
    "status": "enum (active, completed, cancelled)",
    "created_at": "timestamp (Yaratilgan vaqti)",
    "updated_at": "timestamp (Oxirgi yangilanish vaqti)"
  },
  "Users": {
    "id": "UUID",
    "email": "string (Foydalanuvchi email manzili)",
    "password": "string (Hashlangan parol)",
    "full_name": "string (To'liq ism)",
    "avatar_url": "string (Avatar URL manzili)",
    "role": "enum (client, owner, supervisor, admin)",
    "created_at": "timestamp (Foydalanuvchi yaratilgan vaqti)",
    "updated_at": "timestamp (Oxirgi yangilanish vaqti)"
  },
  "Email Verification": {
    "id": "UUID",
    "user_id": "UUID (Foreign Key, User jadvaliga)",
    "token": "string (Tasdiqlash tokeni)",
    "created_at": "timestamp (Token yaratilgan vaqti)",
    "expires_at": "timestamp (Token muddati tugash vaqti)"
  },
  "Token Management": {
    "id": "UUID",
    "user_id": "UUID (Foreign Key, User jadvaliga)",
    "token": "string (Refresh token)",
    "created_at": "timestamp (Token yaratilgan vaqti)",
    "expires_at": "timestamp (Token muddati tugash vaqti)"
  }
}
```

---

### Modullar va Ruxsatlar

#### Telegram Bot

- **Funktsional Talablar:**
  - Yangi avtomobillarni ko'rish, mavjudlikni tekshirish, buyurtmalarni ko'rish va boshqalar.
  - Foydalanuvchilarning avtomatik bildirishnomalari uchun qo'llab-quvvatlash.

#### RABAS (Role-Based Access Control System)

- **Rollar:**
  - `client`, `owner`, `supervisor`, `admin`
- **Funktsional Talablar:**
  - Har bir ro'l uchun maxsus huquqlar va ruxsatlar belgilanishi.

---

### API Endpointlar va Ma'lumotlar

#### Auth

- **POST /api/auth/login**

  - **Kiritish:**
    ```json
    {
      "email": "string",
      "password": "string"
    }
    ```
  - **Chiqarish:**
    ```json
    {
      "access_token": "string",
      "refresh_token": "string"
    }
    ```

- **POST /api/auth/register**

  - **Kiritish:**
    ```json
    {
      "email": "string",
      "password": "string",
      "full_name": "string"
    }
    ```
  - **Chiqarish:**
    ```json
    {
      "id": "UUID",
      "email": "string",
      "full_name": "string",
      "created_at": "timestamp"
    }
    ```

- **POST /api/auth/verify-email**

  - **Kiritish:**
    ```json
    {
      "email": "string"
    }
    ```
  - **Chiqarish:**
    ```json
    {
      "message": "Email verification sent"
    }
    ```

- **GET /api/auth/confirm-email**
  - **Kiritish:**
    ```json
    {
      "token": "string"
    }
    ```
  - \*\*Chi

qarish:\*\*
`json
    {
      "message": "Email confirmed successfully"
    }
    `

- **POST /api/auth/refresh-token**

  - **Kiritish:**
    ```json
    {
      "refresh_token": "string"
    }
    ```
  - **Chiqarish:**
    ```json
    {
      "access_token": "string",
      "refresh_token": "string"
    }
    ```

- **POST /api/auth/revoke-token**

  - **Kiritish:**
    ```json
    {
      "refresh_token": "string"
    }
    ```
  - **Chiqarish:**
    ```json
    {
      "message": "Token revoked successfully"
    }
    ```

- **POST /api/auth/update-password**

  - **Kiritish:**
    ```json
    {
      "old_password": "string",
      "new_password": "string"
    }
    ```
  - **Chiqarish:**
    ```json
    {
      "message": "Password updated successfully"
    }
    ```

- **POST /api/auth/forgot-password**

  - **Kiritish:**
    ```json
    {
      "email": "string"
    }
    ```
  - **Chiqarish:**
    ```json
    {
      "message": "Password reset email sent"
    }
    ```

- **POST /api/auth/reset-password**
  - **Kiritish:**
    ```json
    {
      "token": "string",
      "new_password": "string"
    }
    ```
  - **Chiqarish:**
    ```json
    {
      "message": "Password reset successfully"
    }
    ```

#### Brands

- **GET /api/brands/getall**

  - **Chiqarish:**
    ```json
    [
      {
        "id": "UUID",
        "name": "string"
      }
    ]
    ```

- **GET /api/brands/getbyid**

  - **Kiritish:**
    ```json
    {
      "id": "UUID"
    }
    ```
  - **Chiqarish:**
    ```json
    {
      "id": "UUID",
      "name": "string"
    }
    ```

- **POST /api/brands/add**

  - **Kiritish:**
    ```json
    {
      "name": "string"
    }
    ```
  - **Chiqarish:**
    ```json
    {
      "id": "UUID",
      "name": "string",
      "created_at": "timestamp"
    }
    ```

- **POST /api/brands/delete**

  - **Kiritish:**
    ```json
    {
      "id": "UUID"
    }
    ```
  - **Chiqarish:**
    ```json
    {
      "message": "Brand deleted successfully"
    }
    ```

- **POST /api/brands/update**
  - **Kiritish:**
    ```json
    {
      "id": "UUID",
      "name": "string"
    }
    ```
  - **Chiqarish:**
    ```json
    {
      "message": "Brand updated successfully"
    }
    ```

#### CarFindeks

- **GET /api/carfindeks/getall**

  - **Chiqarish:**
    ```json
    [
      {
        "id": "UUID",
        "car_id": "UUID",
        "user_id": "UUID",
        "score": "number"
      }
    ]
    ```

- **GET /api/carfindeks/getcarfindeksdetail**

  - **Kiritish:**
    ```json
    {
      "car_id": "UUID"
    }
    ```
  - **Chiqarish:**
    ```json
    {
      "id": "UUID",
      "car_id": "UUID",
      "user_id": "UUID",
      "score": "number"
    }
    ```

- **GET /api/carfindeks/getcarfindeksdetailbyuserid**
  - **Kiritish:**
    ```json
    {
      "user_id": "UUID"
    }
    ```
  - **Chiqarish:**
    ```json
    {
      "id": "UUID",
      "car_id": "UUID",
      "user_id": "UUID",
      "score": "number"
    }
    ```

#### CarImages

- **GET /api/carimages/getall**

  - **Chiqarish:**
    ```json
    [
      {
        "id": "UUID",
        "car_id": "UUID",
        "url": "string",
        "mimetype": "string",
        "size": "number"
      }
    ]
    ```

- **GET /api/carimages/getbyimageid**

  - **Kiritish:**
    ```json
    {
      "id": "UUID"
    }
    ```
  - **Chiqarish:**
    ```json
    {
      "id": "UUID",
      "car_id": "UUID",
      "url": "string",
      "mimetype": "string",
      "size": "number"
    }
    ```

- **GET /api/carimages/getbycarid**

  - **Kiritish:**
    ```json
    {
      "car_id": "UUID"
    }
    ```
  - **Chiqarish:**
    ```json
    [
      {
        "id": "UUID",
        "car_id": "UUID",
        "url": "string",
        "mimetype": "string",
        "size": "number"
      }
    ]
    ```

- **POST /api/carimages/add**

  - **Kiritish:**
    ```json
    {
      "car_id": "UUID",
      "file": "file"
    }
    ```
  - **Chiqarish:**
    ```json
    {
      "id": "UUID",
      "car_id": "UUID",
      "url": "string",
      "mimetype": "string",
      "size": "number"
    }
    ```

- **POST /api/carimages/delete**
  - **Kiritish:**
    ```json
    {
      "id": "UUID"
    }
    ```
  - **Chiqarish:**
    ```json
    {
      "message": "Car image deleted successfully"
    }
    ```

#### Cars

- **GET /api/cars/getall**

  - **Chiqarish:**
    ```json
    [
      {
        "id": "UUID",
        "name": "string",
        "model_id": "UUID",
        "brand_id": "UUID",
        "year": "number",
        "color_id": "UUID",
        "registration_number": "string",
        "is_available": "boolean"
      }
    ]
    ```

- **GET /api/cars/getbyid**

  - **Kiritish:**
    ```json
    {
      "id": "UUID"
    }
    ```
  - **Chiqarish:**
    ```json
    {
      "id": "UUID",
      "name": "string",
      "model_id": "UUID",
      "brand_id": "UUID",
      "year": "number",
      "color_id": "UUID",
      "registration_number": "string",
      "is_available": "boolean"
    }
    ```

- **GET /api/cars/getbybrandid**

  - **Kiritish:**
    ```json
    {
      "brand_id": "UUID"
    }
    ```
  - **Chiqarish:**
    ```json
    [
      {
        "id": "UUID",
        "name": "string",
        "model_id": "UUID",
        "brand_id": "UUID",
        "year": "number",
        "color_id": "UUID",
        "registration_number": "string",
        "is_available": "boolean"
      }
    ]
    ```

- **GET /api/cars/getbycoloridwithdetails**

  - **Kiritish:**
    ```json
    {
      "color_id": "UUID"
    }
    ```
  - **Chiqarish:**
    ```json
    [
      {
        "id": "UUID",
        "name": "string",
        "model_id": "UUID",
        "brand_id": "UUID",
        "year": "number",
        "color_id": "UUID",
        "registration_number": "string",
        "is_available": "boolean"
      }
    ]
    ```

- **GET /api/cars/getbybrandandcolor**

  - **Kiritish:**
    ```json
    {
      "brand_id": "UUID",
      "color_id": "UUID"
    }
    ```
  - **Chiqarish:**
    ```json
    [
      {
        "id": "UUID",
        "name": "string",
        "model_id": "UUID",
        "brand_id": "UUID",
        "year": "number",
        "color_id": "UUID",
        "registration_number": "string",
        "is_available": "boolean"
      }
    ]
    ```

- **POST /api/cars/add**

  - **Kiritish:**
    ```json
    {
      "name": "string",
      "model_id": "UUID",
      "brand_id": "UUID",
      "year": "number",
      "color_id": "UUID",
      "registration_number": "string",
      "is_available": "boolean"
    }
    ```
  - **Chiqarish:**

    ```json

      {
      "id": "UUID",
      "name": "string",
      "model_id": "UUID",
      "brand_id": "UUID",
      "year": "number",
      "color_id": "UUID",
      "registration_number": "string",
      "is_available": "boolean",
      "created_at": "timestamp"
      }
  ````

- **POST /api/cars/delete**

  - **Kiritish:**
    ```json
    {
      "id": "UUID"
    }
    ```
  - **Chiqarish:**
    ```json
    {
      "message": "Car deleted successfully"
    }
    ```

- **POST /api/cars/update**
  - **Kiritish:**
    ```json
    {
      "id": "UUID",
      "name": "string",
      "model_id": "UUID",
      "brand_id": "UUID",
      "year": "number",
      "color_id": "UUID",
      "registration_number": "string",
      "is_available": "boolean"
    }
    ```
  - **Chiqarish:**
    ```json
    {
      "message": "Car updated successfully"
    }
    ```

#### Colors

- **GET /api/colors/getall**

  - **Chiqarish:**
    ```json
    [
      {
        "id": "UUID",
        "name": "string"
      }
    ]
    ```

- **GET /api/colors/getbyid**

  - **Kiritish:**
    ```json
    {
      "id": "UUID"
    }
    ```
  - **Chiqarish:**
    ```json
    {
      "id": "UUID",
      "name": "string"
    }
    ```

- **POST /api/colors/add**

  - **Kiritish:**
    ```json
    {
      "name": "string"
    }
    ```
  - **Chiqarish:**
    ```json
    {
      "id": "UUID",
      "name": "string",
      "created_at": "timestamp"
    }
    ```

- **POST /api/colors/delete**

  - **Kiritish:**
    ```json
    {
      "id": "UUID"
    }
    ```
  - **Chiqarish:**
    ```json
    {
      "message": "Color deleted successfully"
    }
    ```

- **POST /api/colors/update**
  - **Kiritish:**
    ```json
    {
      "id": "UUID",
      "name": "string"
    }
    ```
  - **Chiqarish:**
    ```json
    {
      "message": "Color updated successfully"
    }
    ```

#### Contacts

- **GET /api/contacts/getall**

  - **Chiqarish:**
    ```json
    [
      {
        "id": "UUID",
        "user_id": "UUID",
        "phone": "string",
        "email": "string"
      }
    ]
    ```

- **POST /api/contacts/add**
  - **Kiritish:**
    ```json
    {
      "user_id": "UUID",
      "phone": "string",
      "email": "string"
    }
    ```
  - **Chiqarish:**
    ```json
    {
      "id": "UUID",
      "user_id": "UUID",
      "phone": "string",
      "email": "string",
      "created_at": "timestamp"
    }
    ```

#### Customers

- **GET /api/customers/getall**

  - **Chiqarish:**
    ```json
    [
      {
        "id": "UUID",
        "full_name": "string",
        "email": "string",
        "phone": "string"
      }
    ]
    ```

- **GET /api/customers/getbyid**

  - **Kiritish:**
    ```json
    {
      "id": "UUID"
    }
    ```
  - **Chiqarish:**
    ```json
    {
      "id": "UUID",
      "full_name": "string",
      "email": "string",
      "phone": "string"
    }
    ```

- **POST /api/customers/add**

  - **Kiritish:**
    ```json
    {
      "full_name": "string",
      "email": "string",
      "phone": "string"
    }
    ```
  - **Chiqarish:**
    ```json
    {
      "id": "UUID",
      "full_name": "string",
      "email": "string",
      "phone": "string",
      "created_at": "timestamp"
    }
    ```

- **POST /api/customers/update**
  - **Kiritish:**
    ```json
    {
      "id": "UUID",
      "full_name": "string",
      "email": "string",
      "phone": "string"
    }
    ```
  - **Chiqarish:**
    ```json
    {
      "message": "Customer updated successfully"
    }
    ```

#### Findeks

- **GET /api/findeks/getall**

  - **Chiqarish:**
    ```json
    [
      {
        "id": "UUID",
        "user_id": "UUID",
        "score": "number"
      }
    ]
    ```

- **GET /api/findeks/getfindeksdetail**

  - **Kiritish:**
    ```json
    {
      "user_id": "UUID"
    }
    ```
  - **Chiqarish:**
    ```json
    {
      "id": "UUID",
      "user_id": "UUID",
      "score": "number"
    }
    ```

- **GET /api/findeks/getfindeksdetailbyuserid**
  - **Kiritish:**
    ```json
    {
      "user_id": "UUID"
    }
    ```
  - **Chiqarish:**
    ```json
    {
      "id": "UUID",
      "user_id": "UUID",
      "score": "number"
    }
    ```

#### Payments

- **GET /api/payments/getall**

  - **Chiqarish:**
    ```json
    [
      {
        "id": "UUID",
        "user_id": "UUID",
        "amount": "number",
        "method": "string",
        "status": "enum (pending, completed, failed)"
      }
    ]
    ```

- **GET /api/payments/pay**

  - **Kiritish:**
    ```json
    {
      "amount": "number",
      "method": "string"
    }
    ```
  - **Chiqarish:**
    ```json
    {
      "id": "UUID",
      "user_id": "UUID",
      "amount": "number",
      "method": "string",
      "status": "enum (pending, completed, failed)",
      "created_at": "timestamp"
    }
    ```

- **POST /api/payments/add**

  - **Kiritish:**
    ```json
    {
      "user_id": "UUID",
      "amount": "number",
      "method": "string"
    }
    ```
  - **Chiqarish:**
    ```json
    {
      "id": "UUID",
      "user_id": "UUID",
      "amount": "number",
      "method": "string",
      "status": "enum (pending, completed, failed)",
      "created_at": "timestamp"
    }
    ```

- **POST /api/payments/update**

  - **Kiritish:**
    ```json
    {
      "id": "UUID",
      "amount": "number",
      "method": "string",
      "status": "enum (pending, completed, failed)"
    }
    ```
  - **Chiqarish:**
    ```json
    {
      "message": "Payment updated successfully"
    }
    ```

- **POST /api/payments/delete**
  - **Kiritish:**
    ```json
    {
      "id": "UUID"
    }
    ```
  - **Chiqarish:**
    ```json
    {
      "message": "Payment deleted successfully"
    }
    ```

#### Rentals

- **GET /api/rentals/getall**

  - **Chiqarish:**
    ```json
    [
      {
        "id": "UUID",
        "user_id": "UUID",
        "car_id": "UUID",
        "start_date": "timestamp",
        "end_date": "timestamp",
        "total_price": "number",
        "status": "enum (active, completed, cancelled)"
      }
    ]
    ```

- **GET /api/rentals/getdetails**

  - **Kiritish:**
    ```json
    {
      "id": "UUID"
    }
    ```
  - **Chiqarish:**
    ```json
    {
      "id": "UUID",
      "user_id": "UUID",
      "car_id": "UUID",
      "start_date": "timestamp",
      "end_date": "timestamp",
      "total_price": "number",
      "status": "enum (active, completed, cancelled)"
    }
    ```

- **POST /api/rentals/add**

  - **Kiritish:**
    ```json
    {
      "user_id": "UUID",
      "car_id": "UUID",
      "start_date": "timestamp",
      "end_date": "timestamp",
      "total_price": "number"
    }
    ```
  - **Chiqarish:**

    ```json
    {
      "id": "UUID",
      "user_id": "UUID",
      "car_id": "UUID",
      "start_date": "timestamp",
      "end_date": "timestamp",
      "total_price": "number",
      "status": "enum (active, completed, cancelled)",
      "created_at": "timestamp"
    }
    ```

- **POST /api/rentals/update**

  - **Kiritish:**
    ```json
    {
      "id": "UUID",
      "start_date": "timestamp",
      "end_date": "timestamp",
      "total_price": "number",
      "status": "enum (active, completed, cancelled)"
    }
    ```
  - **Chiqarish:**
    ```json
    {
      "message": "Rental updated successfully"
    }
    ```

- **POST /api/rentals/delete**
  - **Kiritish:**
    ```json
    {
      "id": "UUID"
    }
    ```
  - **Chiqarish:**
    ```json
    {
      "message": "Rental deleted successfully"
    }
    ```

#### Users

- **GET /api/users/getall**

  - **Chiqarish:**
    ```json
    [
      {
        "id": "UUID",
        "email": "string",
        "full_name": "string",
        "role": "enum (client, owner, supervisor, admin)"
      }
    ]
    ```

- **GET /api/users/getbyid**

  - **Kiritish:**
    ```json
    {
      "id": "UUID"
    }
    ```
  - **Chiqarish:**
    ```json
    {
      "id": "UUID",
      "email": "string",
      "full_name": "string",
      "role": "enum (client, owner, supervisor, admin)"
    }
    ```

- **POST /api/users/add**

  - **Kiritish:**
    ```json
    {
      "email": "string",
      "password": "string",
      "full_name": "string",
      "role": "enum (client, owner, supervisor, admin)"
    }
    ```
  - **Chiqarish:**
    ```json
    {
      "id": "UUID",
      "email": "string",
      "full_name": "string",
      "role": "enum (client, owner, supervisor, admin)",
      "created_at": "timestamp"
    }
    ```

- **POST /api/users/delete**

  - **Kiritish:**
    ```json
    {
      "id": "UUID"
    }
    ```
  - **Chiqarish:**
    ```json
    {
      "message": "User deleted successfully"
    }
    ```

- **POST /api/users/update**

  - **Kiritish:**
    ```json
    {
      "id": "UUID",
      "email": "string",
      "full_name": "string",
      "role": "enum (client, owner, supervisor, admin)"
    }
    ```
  - **Chiqarish:**
    ```json
    {
      "message": "User updated successfully"
    }
    ```

- **POST /api/users/uploadprofile**

  - **Kiritish:**
    ```json
    {
      "id": "UUID",
      "avatar": "file"
    }
    ```
  - **Chiqarish:**
    ```json
    {
      "message": "Profile picture uploaded successfully"
    }
    ```

- **GET /api/users/email**

  - **Kiritish:**
    ```json
    {
      "email": "string"
    }
    ```
  - **Chiqarish:**
    ```json
    {
      "id": "UUID",
      "email": "string",
      "full_name": "string",
      "role": "enum (client, owner, supervisor, admin)"
    }
    ```

- **GET /api/users/id**
  - **Kiritish:**
    ```json
    {
      "id": "UUID"
    }
    ```
  - **Chiqarish:**
    ```json
    {
      "id": "UUID",
      "email": "string",
      "full_name": "string",
      "role": "enum (client, owner, supervisor, admin)"
    }
    ```

---

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

---

### Xulosa

Ushbu hujjat RentCar dasturining API endpointlari, ma'lumotlar bazasi sxemasi, modul ruxsatlari va qo'shimcha talablarni batafsil yoritadi. Bu PRD loyiha jamoasiga API ni ishlab chiqish va undan foydalanishni aniq tushunish imkonini beradi. Yangi funksiyalar va o'zgarishlar kiritilganida, bu hujjatni yangilab turish muhimdir.

---
````
