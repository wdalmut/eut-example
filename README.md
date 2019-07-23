# How to use

```
docker run -v `pwd`:/data --workdir /data node:10 npm install
```

```
docker-compose up -d
```

```
docker-compose exec db mysql -uroot -p -h127.0.0.1
mysql> create database app;
mysql> create table app.pippo(id int(11) not null auto_increment, primary key(id));
mysql> insert into app.pippo () values ();
mysql> insert into app.pippo () values ();
mysql> insert into app.pippo () values ();
```

Navigate http://localhost:4000


