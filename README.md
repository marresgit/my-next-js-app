# next-js-test
Testing some next-js + react with typescript?

## How to:

```bash
npm run dev
```

## Todo:

- [x] Create new prject
- [x] Create fist static site with content from Starwars API (https://swapi.dev/api/people/1/)
- [x] Create postgres database with prisma and tablename=starwars (Small guide - https://vercel.com/guides/nextjs-prisma-postgres) 
- [x] Create static content in mysql database (to show on a page when we connect to database<br>
```bash
npx prisma studio
```
- [x] Connect to mysql/postgres database and show content on page (Connect to existing mysql database: https://www.prisma.io/docs/concepts/database-connectors/mysql, https://www.youtube.com/watch?v=CQcaeIhVB8c)
- [x] Create route to add to mysql (dota) (https://www.youtube.com/watch?v=cQ6V7ZHzg8c&t=2164s This could be to help)
- [ ] Create route to PUT/change mysql (dota) 
- [ ] Create route to delete (name)
- [x] Remove after post values on the form ()

Done

### *Extra*

- [ ] Backend with FastAPI
- [x] Google maps iframe

### Prixma

.env file
```
DATABASE_URL = "mysql://your_username:your_password@localhost:3306/your_db_name"
```
or sqllite
```
DATABASE_URL="file:./dev.db"
```

Here are the prisma commands
```bash
npx prisma init
```
```bash
npx prisma generate
```
```bash
npx prisma migrate dev
```