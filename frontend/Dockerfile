FROM nginx:1.25-alpine 
RUN rm -rf /usr/share/nginx/html

COPY html /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80
CMD [ "nginx", "-g", "daemon off;"]
