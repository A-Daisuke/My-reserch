const Benchmark = {
    run: function() {
        var VAR_1 = new RegExp("(.*)test(.*)", "");
        var VAR_2 = "0123456789";
        for (var VAR_9 = 0; VAR_9 < 500; VAR_9++) {
          VAR_1.test(VAR_2);
        }
    }
};