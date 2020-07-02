#!/usr/bin/env bash
. scripts/01_activate_venv.sh
python project/manage.py runserver 0.0.0.0:8000
