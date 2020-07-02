# Django-React Template

## General

Oriented on https://blog.logrocket.com/creating-an-app-with-react-and-django/.

Need to have `Python 3.8` and `Node.js 12.13` installed.


## Prepare project

Create a virtual environment for Python:
```
python3 -m venv venv
```

Activate virtual environment:
```
source venv/bin/activate
```

Install required python modules:
```
pip install -r requirements.txt
```

Set up database and add a superuser
```
./project/manage.py makemigrations
./project/manage.py migrate
./project/manage.py createsuperuser
```

Run Django server (Backend):
```
./project/manage.py runserver 0.0.0.0:8000
```

Test React App (Frontend):
```
npm test --prefix ./project/03_frontend
```

Run React App (Frontend):
```
npm start --prefix ./project/03_frontend
```

## Links

https://www.djangoproject.com

https://create-react-app.dev/docs/getting-started/

https://www.django-rest-framework.org

https://medium.com/@dakota.lillie/django-react-jwt-authentication-5015ee00ef9a

https://github.com/axios/axios

https://reactstrap.github.io

https://pusher.com/tutorials/consume-restful-api-react

https://github.com/adamchainz/django-cors-headers/

https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet

https://medium.com/@auchenberg/live-edit-and-debug-your-react-apps-directly-from-vs-code-without-leaving-the-editor-3da489ed905f
