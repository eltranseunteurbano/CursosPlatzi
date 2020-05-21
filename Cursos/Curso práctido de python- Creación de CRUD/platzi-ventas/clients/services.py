import csv
from clients.models import Client


class ClientService:

    def __init__(self, table_name):
        self.table_name = table_name

    
    def create_clients(self, client):
        with open(self.table_name, mode='a') as f:
            writer = csv.DictReader(f, fieldnames=Client.schema())
            writer.writerow(client.to_dict())