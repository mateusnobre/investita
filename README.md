# Investita

## Prerequisites
- python 3.8.5
- node 14.16.1
- npm 7.14.0

## Initial Setup

```
git clone https://github.com/mateusnobre/investita.git
cd investita
virtualenv env --python=python3.8.5
source env/bin/activate
```
Make sure you have python3.8.5 installed at the system level (e.g. /usr/bin/python3.8.5).


Install python packages
```
pip install -r requirements.txt
```

Install node packages
```
cd frontend
npm install
```

## How to run the app
### Open 2 terminals

- Run from investita directory:
```
python manage.py runserver
```
- Run from frontend directory:
```
npm run start:dev
```

Head to [localhost:8000](localhost:8000), and you can see your app.

The app reload automatically when you save your files, but it takes 4-5s to compile.
