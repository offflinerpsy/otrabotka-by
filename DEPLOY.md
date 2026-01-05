# 🚀 Деплой otrabotka.by

## Серверная инфраструктура

| Параметр | Значение |
|----------|----------|
| **IP адрес** | `89.23.96.192` |
| **Хостинг** | Timeweb Cloud |
| **ОС** | Ubuntu 24.04 |
| **Web-сервер** | nginx 1.24.0 |
| **Путь к сайту** | `/var/www/otrabotka` |
| **nginx config** | `/etc/nginx/sites-available/otrabotka` |

## Доступ к серверу

```
Пользователь: root
Пароль: zf+Ct5moL6X#Ds
```

## SSH ключи (Timeweb)

На сервере добавлены ключи:
- `hiddify-root`
- `investment-deploy`
- `Alex@DESKTOP-P0V2V04`

Локальный ключ: `~/.ssh/id_ed25519_deploy`

## Команды деплоя (Windows PowerShell)

### 1. Сборка проекта

```powershell
cd "C:\Users\Makkaroshka\Desktop\игорь поджаров\figma_export"
npm run build
```

### 2. Очистка старых файлов на сервере

```powershell
echo y | plink -pw "zf+Ct5moL6X#Ds" root@89.23.96.192 "rm -rf /var/www/otrabotka/*"
```

### 3. Создание папок на сервере

```powershell
echo y | plink -pw "zf+Ct5moL6X#Ds" root@89.23.96.192 "mkdir -p /var/www/otrabotka/assets /var/www/otrabotka/images"
```

### 4. Копирование файлов

```powershell
# index.html
echo y | pscp -pw "zf+Ct5moL6X#Ds" "build\index.html" root@89.23.96.192:/var/www/otrabotka/

# assets (JS, CSS, изображения)
echo y | pscp -pw "zf+Ct5moL6X#Ds" "build\assets\*" root@89.23.96.192:/var/www/otrabotka/assets/

# images (hero-bg, autopark и др.)
echo y | pscp -pw "zf+Ct5moL6X#Ds" "build\images\*" root@89.23.96.192:/var/www/otrabotka/images/
```

### 5. Проверка файлов на сервере

```powershell
echo y | plink -pw "zf+Ct5moL6X#Ds" root@89.23.96.192 "ls -laR /var/www/otrabotka/"
```

### 6. Просмотр логов nginx (при ошибках)

```powershell
echo y | plink -pw "zf+Ct5moL6X#Ds" root@89.23.96.192 "tail -30 /var/log/nginx/error.log"
```

## ⚡ Быстрый деплой (одной командой)

```powershell
cd "C:\Users\Makkaroshka\Desktop\игорь поджаров\figma_export"; npm run build; echo y | plink -pw "zf+Ct5moL6X#Ds" root@89.23.96.192 "rm -rf /var/www/otrabotka/* && mkdir -p /var/www/otrabotka/assets /var/www/otrabotka/images"; echo y | pscp -pw "zf+Ct5moL6X#Ds" "build\index.html" root@89.23.96.192:/var/www/otrabotka/; echo y | pscp -pw "zf+Ct5moL6X#Ds" "build\assets\*" root@89.23.96.192:/var/www/otrabotka/assets/; echo y | pscp -pw "zf+Ct5moL6X#Ds" "build\images\*" root@89.23.96.192:/var/www/otrabotka/images/
```

## Структура файлов на сервере

```
/var/www/otrabotka/
├── index.html
├── assets/
│   ├── index-*.js      # React bundle
│   ├── index-*.css     # Стили
│   ├── *.png           # Изображения из Figma
│   └── *.jpg           # Hero изображения
└── images/
    ├── hero-bg.png
    ├── hero-bg-mobile.png
    ├── autopark.png
    ├── mobile-point.png
    ├── oil-refinery-hero.jpg
    └── oil-refinery-hero-mobile.jpg
```

## nginx конфигурация

```nginx
server {
    listen 80;
    server_name 89.23.96.192;
    root /var/www/otrabotka;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    location /assets/ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

## Сайт

- **Прямой доступ:** http://89.23.96.192
- **Домен:** otrabotka.by (если настроен DNS)

## ⚠️ Важно

- **pscp и plink** — утилиты из PuTTY, должны быть в PATH
- Не использовать `pscp -r` для папок — копирует криво, лучше отдельно каждую папку
- `echo y |` нужен для автоматического принятия ключа сервера
