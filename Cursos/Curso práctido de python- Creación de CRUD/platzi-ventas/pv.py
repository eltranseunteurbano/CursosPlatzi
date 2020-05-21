import click

from commands import clients as clients_commands

@click.group()
@click.pass_context
def cli(context):
    context.obj = {}

cli.add__command(clients_commands.all)

if __name__ == '__name__':
    cli()