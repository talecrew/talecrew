from django.db import models


class Novel(models.Model):
    title = models.CharField('제목', max_length=50)
    description = models.TextField('설명')
    cover = models.ImageField('표지 이미지')
    order = models.IntegerField('정렬순서', default=0, help_text='낮을수록 우선순위 높음')
    link_to = models.URLField(
        '클릭 시 이동할 경로',
        blank=True,
        help_text='ex: https://novel.munpia.com/266932, '
                  'https://series.naver.com/novel/detail.series?productNo=4775407 등'
    )
    is_show = models.BooleanField('테일크루 페이지 표시 여부', default=True)

    created_at = models.DateTimeField(auto_now_add=True)
    modified_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ('order', '-modified_at', '-created_at')

    def __str__(self):
        return self.title
