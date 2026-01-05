# Деплой otrabotka.by

## Серверная инфраструктура

| Параметр | Значение |
|----------|----------|
| **IP адрес** | 89.23.96.192 |
| **ОС** | Ubuntu 24.04 |
| **Web-сервер** | nginx 1.24.0 |
| **Путь к сайту** | /var/www/otrabotka |
| **nginx config** | /etc/nginx/sites-available/otrabotka |

## Доступ

- **Пользователь:** root
- **Пароль:** `zf+Ct5moL6X#Ds`
- **SSH ключ:** `~/.ssh/id_ed25519_deploy` (Alex@DESKTOP-P0V2V04)

## Команды деплоя

### Windows (PowerShell)

```powershell
# Сборка
cd figma_export
npm run build

# Деплой через pscp
echo y | pscp -r -pw "zf+Ct5moL6X#Ds" "build\*" root@89.23.96.192:/var/www/otrabotka/
```

### Проверка на сервере

```powershell
echo y | plink -pw "zf+Ct5moL6X#Ds" root@89.23.96.192 "ls -la /var/www/otrabotka/"
```

## Сайт

- **Домен:** otrabotka.by (если настроен)
- **IP доступ:** http://89.23.96.192
