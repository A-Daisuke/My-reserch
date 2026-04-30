const Benchmark = {
    run: function() {
        var VAR_1 = new RegExp("(.*)test(.*)", "");
        var VAR_2 = "0123456789";
        var VAR_3 = VAR_2 + VAR_2;
        var VAR_4 = VAR_3 + VAR_3 + VAR_2;
        var VAR_5 = VAR_4 + VAR_4;
        for (var VAR_9 = 0; VAR_9 < 50; VAR_9++) {
          VAR_1.test(VAR_5);
        }
    }
};