#!"c:\users\jaime david burbano\desktop\cursos platzi\cursos\curso práctido de python- creación de crud\platzi-ventas\venv\scripts\python.exe" -x
# EASY-INSTALL-ENTRY-SCRIPT: 'pv','console_scripts','pv'
__requires__ = 'pv'
import re
import sys
from pkg_resources import load_entry_point

if __name__ == '__main__':
    sys.argv[0] = re.sub(r'(-script\.pyw?|\.exe)?$', '', sys.argv[0])
    sys.exit(
        load_entry_point('pv', 'console_scripts', 'pv')()
    )
