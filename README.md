## Установка шаблона
1. **Установите зависимостей**
```bash
$ npm install
```

2. **Настройка окружения**

Скопируйте `.env.default` в `.env`

3. **Подключение к бд**

Запустите Postgres SQL сервер (или PgAdmin), создайте БД для вашего проекта
и измените `DATABASE_URL` в .env файле.

4. **Соберите и запустите проект**
```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Особенности шаблона
### Swagger
При запуске приложение в консоль выводится адрес, по которому можно открыть swagger api документацию.

### Aliases
В tsconfig.json определён алиас @/, который ссылается на src/. 
То есть можно писать `import smth from "@dto/user.dto.ts"`

### Prisma
Для работы с бд используется **Prisma ORM**.
В `prisma/schema.prisma` вы описываете схему вашей базы данных.
Затем нужно обновить саму базу данных:
`npx prisma migrate dev --name init` - зафиксирует изменения в миграцию init
`npx prisma migrate dev` - Prisma сама сгенерирует название для миграции (что не очень удобно)
`npx prisma generate` - чтобы пробросить сгенерированные модели в типизированный @prisma/client
`npx prisma studio` - открывает веб интерфейс, в котором можно просматривать базу данных

### Тестирование API
Вы можете использовать Postman или Insomnia (Более простой аналог Postman).
Или же использовать файл `api.http` в корне проекта. В нём можно прописывать
api запросы, которые IDE может выполнять сама.

### Валидация данных
Если вы принимаете какие-то данные в контроллере из вне (например, body), 
то нужно написать DTO (data transfer object) с валидацией полей. 
В случае, если в запросе нет каких-то полей или у них неверный тип, то 
nestjs выбросит ошибку.

