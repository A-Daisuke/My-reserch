const Benchmark = {
    run: function() {
        var VAR_1 = new Array(100);
        VAR_1[50] = 50;
        VAR_1[0] = 30;
        for (var VAR_4 = 0; VAR_4 < 300000; ++VAR_4) {
          var VAR_6 = VAR_1[50];
        }
    }
};