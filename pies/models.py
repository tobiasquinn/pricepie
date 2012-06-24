from django.db import models

class PieData(models.Model):
    f1 = models.FloatField()
    f2 = models.FloatField()
    f3 = models.FloatField()
    f4 = models.FloatField()
    f5 = models.FloatField()
    name = models.TextField()

    @property
    def fieldarray(self):
        return [self.f1, self.f2, self.f3, self.f4, self.f5]

    def loadData(self, data):
        self.f1 = data[0]
        self.f2 = data[1]
        self.f3 = data[2]
        self.f4 = data[3]
        self.f5 = data[4]
