#!/bin/sh
rm -f db/pie.db
./manage.py syncdb
./loadrandomdata.py
