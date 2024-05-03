# Airbnb URL to JSON generator

## How to use the generator
1. Fork the project

2. Open 2 separate terminals

**First terminal**
```cd backend```

```npm i```

```npm run dev```  

Create .env file and add ```VITE_BACKEND_URL=http://localhost:3000```

**Second terminal**
```cd frontend```

```npm i``` 

```npm run dev```

**Airbnb URL to JSON should now be running. You can test it if you visit `http://localhost:5173/`**

## I want to change what is being scraped

**You can do that in the following file:**
`backend/src/scrapers/contentScraper.js`
