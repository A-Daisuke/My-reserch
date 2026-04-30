const Benchmark = {
    run: function() {
        var VAR_5 = Math.sin;
        for (var VAR_3 = 0; VAR_3 < 10000; VAR_3++) {
          var VAR_4 = VAR_5(VAR_3);
        }
    }
};