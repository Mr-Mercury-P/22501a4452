- **Purpose:**  
  Creates a new shortened URL with a specified or default validity period.

- **Request Body:**  
  - `originalUrl` (string, required): The URL to be shortened.
  - `validityMinutes` (number, optional): Validity period in minutes (defaults to 30).

- **Response:**  
  - `originalUrl`: The original URL.
  - `shortenedUrl`: The generated short code.
  - `expiresAt`: Expiry timestamp.

- **Error Handling:**  
  - Returns 400 if `originalUrl` is missing.
  - Returns 500 for server errors.

---

### getOriginalUrl

- **Purpose:**  
  Retrieves the original URL and expiry time for a given short code.

- **Route Parameter:**  
  - `shorturl`: The short code.

- **Response:**  
  - `originalUrl`: The original URL.
  - `expiresAt`: Expiry timestamp.

- **Error Handling:**  
  - Returns 404 if the short URL is not found or expired.
  - Returns 500 for server errors.

---

## Example Usage

### Shorten a URL

**POST** `http://localhost:4000/shorturls`
```json
{
  "originalUrl": "https://www.amazon.com/",
  "validityMinutes": 45
}
```

### Retrieve Original URL

**GET** `[/:shorturl](http://localhost:4000/shorturls/JSTNjfIXf)`

**Response:**
```json
{
    "originalUrl": "https://www.amazon.com/",
    "expiresAt": "2025-06-28T06:42:33.731Z"
}
```
![alt text](image.png)
