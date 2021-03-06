from django.conf.urls import patterns, include, url

# Uncomment the next two lines to enable the admin:
# from django.contrib import admin
# admin.autodiscover()

urlpatterns = patterns('',
    # Examples:
    # url(r'^$', 'pricepie.views.home', name='home'),
    # url(r'^pricepie/', include('pricepie.foo.urls')),

    # Uncomment the admin/doc line below to enable admin documentation:
    # url(r'^admin/doc/', include('django.contrib.admindocs.urls')),

    # Uncomment the next line to enable the admin:
    # url(r'^admin/', include(admin.site.urls)),
    url(r'^$', 'pies.views.raphael'),
    url(r'^detail/(?P<chart_id>\d+)$', 'pies.views.detail'),
    url(r'^qrcode/(?P<chart_id>\d+)$', 'pies.views.qrcode'),
)
