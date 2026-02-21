Deployment checklist for fcs.tavabharat.com

1) DNS
- In your DNS provider, create an A record:
  - Host: fcs
  - Type: A
  - Value: 35.154.9.116
  - TTL: automatic

This will point fcs.tavabharat.com to your Ubuntu server.

2) On the Ubuntu server (once DNS points)
- Install Node.js and Git (if not present):

```bash
# example for Ubuntu 22.04
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs git nginx
```

- Copy `deploy/nginx/fcs.conf` to `/etc/nginx/sites-available/fcs` and symlink:

```bash
sudo cp deploy/nginx/fcs.conf /etc/nginx/sites-available/fcs
sudo ln -s /etc/nginx/sites-available/fcs /etc/nginx/sites-enabled/
sudo nginx -t && sudo systemctl reload nginx
```

- Create app directory and set permissions (adjust user):

```bash
sudo mkdir -p /var/www/fcs
sudo chown -R ubuntu:ubuntu /var/www/fcs    # or www-data:www-data depending on your setup
```

- Add the `fcs.service` systemd file (adjust User if needed):

```bash
sudo cp deploy/systemd/fcs.service /etc/systemd/system/fcs.service
sudo systemctl daemon-reload
sudo systemctl enable fcs.service
```

3) GitHub Actions setup
- In your repository settings -> Secrets -> Actions, add these secrets:
  - `SSH_HOST` = 35.154.9.116
  - `SSH_USER` = ubuntu   (or your SSH username)
  - `SSH_PRIVATE_KEY` = (private key content for the above user)
  - `REMOTE_DIR` = /var/www/fcs

Notes:
- The server user must have sudo privileges to restart the `fcs.service` or you must adjust the workflow to use a non-sudo approach.
- After push to `main`, the workflow will SSH into the server, pull the repo, run `npm ci`, `npm run build`, and restart the systemd service.

4) TLS
- Use Certbot to obtain certificates for `fcs.tavabharat.com`:

```bash
sudo apt-get install -y certbot python3-certbot-nginx
sudo certbot --nginx -d fcs.tavabharat.com
```

5) Troubleshooting
- Check logs for nginx: `/var/log/nginx/fcs.error.log`
- Check app logs: `sudo journalctl -u fcs.service -f`

