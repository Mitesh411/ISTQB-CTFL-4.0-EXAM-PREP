# Dockerfile

Docker configuration for serving the ISTQB CTFL 4.0 Practice Exam application using Nginx on Alpine Linux. It copies the static quiz files (HTML, CSS, JavaScript, and question data) into the Nginx web root and exposes port 80.

```dockerfile
# Use official Nginx image as a base
FROM nginx:alpine

# Copy static quiz files to nginx html directory with proper ownership
COPY --chown=nginx:nginx index.html /usr/share/nginx/html/index.html
COPY --chown=nginx:nginx style.css /usr/share/nginx/html/
COPY --chown=nginx:nginx script.js /usr/share/nginx/html/
COPY --chown=nginx:nginx questions.json /usr/share/nginx/html/

# Expose port 80
EXPOSE 80

# Start nginx in foreground (default)
CMD ["nginx", "-g", "daemon off;"]
```
