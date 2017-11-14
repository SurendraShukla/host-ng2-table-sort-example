# Set nginx base image - https://hub.docker.com/_/nginx/
FROM nginx

# the content is in the content directory and the configuration files are in the conf directory,
COPY dist /usr/share/nginx/html

# The NGINX image uses the default NGINX configuration, which uses /usr/share/nginx/html as the container’s root directory
# and puts configuration files in /etc/nginx/conf.d
# Copy custom configuration file from the current directory
# commands that delete the default files
# RUN rm /etc/nginx/conf.d/default.conf
# RUN rm /etc/nginx/conf.d/example_ssl.conf
COPY config/default.conf /etc/nginx/conf.d/default.conf
# COPY conf /etc/nginx

# NGINX image exposes ports 80 and 443 by default + expose 8080 in the container(if nginx listen 8080 see default.conf)
EXPOSE 8080
