const Benchmark = {
    run: function() {
        var VAR_1 = "hwefsdkfdskf;sdkf;lsdkf;lsdkf;lsdkf;lsdk;lfksd;lfksdfsd";
        for (var VAR_2 = 0, VAR_3; VAR_2 < 100000; ++VAR_2) {
          VAR_3 = VAR_1.charAt(23);
        }
    }
};