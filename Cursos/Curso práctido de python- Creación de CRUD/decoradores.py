# -*- coding: utf-8 -*-

PASSWORD = '12345'


def password_required(func):
    def wrapper():
        password = input('¿Cuál es tu contraseña? ')

        if password == PASSWORD:
            return func()
        
        else:
            print('La contraseña no es correcta.')

    return wrapper

# Decorador: Forma 1
@password_required
def needs__password():
    print('La contrasena es correcta.')


# Decorador: Forma 2

def upper(func):
    def wrapper(*args, **kwargs):
        result = func(*args, **kwargs)

        return result.upper()
    
    return wrapper

@upper
def say_my_name(name):
    return('Hola, {}.'.format(name))

if __name__ == '__main__':
    print(say_my_name('Jaime'))


# Los decoradores nos permiten ejecutar lógica antes y después de una función
# nos permite determinar condicionalmente si un usuario tiene acceso a una
# función o no