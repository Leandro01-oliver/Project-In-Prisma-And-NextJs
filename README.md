
## Comando para criar um projeto com next Js

1° - Ter o node js instalado na maquina. 

2° - abrir um cmd ou powersheel e executar o comando "npx create-next-app nomeprojeto".

## Comando para utilizar o prisma em seu projeto criado com next js

1° - abrir um terminal no visual studio, ou outra IDE de seu gosto executar o comando "npm i prisma"

2° - No terminal ao instalar a depedência do prisma executar o comando "npx prisma init --datasource-provider mysql", caso queira usar o mysql se não pode ser usado o mysql, postgres, sqllite, oracle e mongoDB.

3° - Na pasta que foi gerada pelo prisma em /prisma/schema.prisma coloque um schema de banco de dados 

## Exemlo de shema 
 ```bash
   model Evento{
  id Int @id @default(autoincrement())
  title String @db.VarChar(150)
  description String @db.VarChar(150)

  @@map("tb_evento")
 }
```

4° - Crie a migration com o comando ainda no terminal "npx prisma migrate dev"

5° - Após executar o seu shema informe o nome de sua migration no terminal
