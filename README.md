# Micro Project
## Development Environment

Run application

`docker-compose up`

Add following schemas to 

Access at

1. http://localhost:3000/cart
1. http://localhost:3000/catalog

Add Following schemas to postgres database

1. catalog
2. cart

Add Migration in cart module
```
docker-compose exec ms-cart yarn workspace @micro-project/cart typeorm:migrate cart_initial
```

Run Migration in cart module
```
docker-compose exec ms-cart yarn workspace @micro-project/cart typeorm:run
```

Add Migration in catalog module
```
docker-compose exec ms-catalog yarn workspace @micro-project/catalog typeorm:migrate catalog_initial
```

Run Migration in catalog module
```
docker-compose exec ms-catalog yarn workspace @micro-project/catalog typeorm:run
```


## Checklist

- [ ] Add prefix to migration files, may be custom helper would be required
- [ ] Make debugging work, `start:debug`, VScode not able to attach
- [ ] Keycloak intergration
- [ ] Keycloak production checks
- [ ] Keycloak roles definition