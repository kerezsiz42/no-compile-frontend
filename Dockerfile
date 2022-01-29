FROM nginx:1.21-alpine

COPY ./nginx.conf /etc/nginx/conf.d/default.conf
WORKDIR /usr/share/nginx/html
COPY ./src ./

ADD start.sh /
RUN chmod +x /start.sh

CMD ["/start.sh"]