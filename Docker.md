# Static Website with Nginx

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

----

# Build Docker Image

docker build -f ISTQB-CTFL-4.0-EXAM-PREP/Dockerfile -t istqb-quiz ISTQB-CTFL-4.0-EXAM-PREP/

# Run with Port-Mapping

docker run -p 8080:80 istqb-quiz