FROM postgres:9.4
# Install modules
RUN apt-get update && apt-get install -y \
        ssh

#RUN mkdir -p /etc/postgresql/9.4/main
#RUN echo "host all  all    0.0.0.0/0  md5" >> /etc/postgresql/9.4/main/pg_hba.conf

# And add ``listen_addresses`` to ``/etc/postgresql/9.4/main/postgresql.conf``
#RUN echo "listen_addresses='*'" >> /etc/postgresql/9.4/main/postgresql.conf

#USER postgres
#WORKDIR /app

# Set the default command to run when starting the container
#CMD ["/usr/lib/postgresql/9.4/bin/postgres", "-D", "/var/lib/postgresql/9.4/main", "-c", "config_file=/etc/postgresql/9.4/main/postgresql.conf"]
