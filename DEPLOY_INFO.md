# 🚀 Deploy Information

## Server
- **IP:** 89.23.96.192
- **OS:** Ubuntu 24.04
- **Web-server:** nginx 1.24.0
- **Site path:** /var/www/otrabotka
- **nginx config:** /etc/nginx/sites-available/otrabotka

## Credentials
- **User:** root
- **Password:** zf+Ct5moL6X#Ds

## SSH Key
- **Local key:** `~/.ssh/id_ed25519_investment` (needs to be added to server)
- **Timeweb key name:** `investment-deploy`

## Deploy Commands
```bash
# From project root
python deploy.py

# Manual
scp -r figma_export/build/* root@89.23.96.192:/var/www/otrabotka/
```

## Site URL
- http://otrabotka.by
- http://89.23.96.192
