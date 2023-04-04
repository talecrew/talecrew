from django.shortcuts import render

from db.models import Novel


def index(request):
    novels = Novel.objects.filter(
        is_show=True
    )
    return render(request, 'index.html', context={'novels': novels})
