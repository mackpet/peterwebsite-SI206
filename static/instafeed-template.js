var userFeed = new Instafeed({
    get: 'user',
    userId: '524198678',
    accessToken: '524198678.1677ed0.49ed0356f0214612bf437821dbfcbd1d',
    limit: 60,
    template: '<a href="{{link}}"><img src="{{image}} alt={{caption}}" /></a>'
});
userFeed.run();