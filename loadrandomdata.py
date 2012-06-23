#!/usr/bin/env python
from django.core.management import setup_environ
from pricepie import settings

setup_environ(settings)
from pies.models import PieData

RECORDS = 25

import random

def constrained_sum_sample_pos(n, total):
    """Return a randomly chosen list of n positive integers summing to total.
    Each such list is equally likely to occur."""

    dividers = sorted(random.sample(xrange(1, total), n - 1))
    return [a - b for a, b in zip(dividers + [total], [0] + dividers)]

for i in range(RECORDS):
    p = PieData()
    p.loadData(constrained_sum_sample_pos(5, 100))
    p.save()
