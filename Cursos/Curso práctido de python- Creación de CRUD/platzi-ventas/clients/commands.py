import click

@click.group()
def clients():
    """ MANAGES THE CLIENTS LIFECYCLE """
    pass


@clients.command()
@click.pass_context
def create(context, name, compay, email, position):
    """ Creates a new client """
    pass


@clients.command()
@click.pass_context
def list(context):
    """ List all clients """
    pass


@clients.command()
@click.pass_context
def update(context, client_uid):
    """ Updates a client """
    pass


@clients.command()
@click.pass_context
def delate(context, client_uid):
    """ Deletes a client """
    pass


all = clients
