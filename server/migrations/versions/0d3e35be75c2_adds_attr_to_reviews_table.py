"""adds attr to reviews table

Revision ID: 0d3e35be75c2
Revises: 8567443b3494
Create Date: 2024-04-06 12:14:30.508846

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '0d3e35be75c2'
down_revision = '8567443b3494'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('reviews', schema=None) as batch_op:
        batch_op.add_column(sa.Column('show', sa.String(), nullable=False))
        batch_op.add_column(sa.Column('location', sa.String(), nullable=False))
        batch_op.add_column(sa.Column('show_date', sa.DateTime(), nullable=True))

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('reviews', schema=None) as batch_op:
        batch_op.drop_column('show_date')
        batch_op.drop_column('location')
        batch_op.drop_column('show')

    # ### end Alembic commands ###