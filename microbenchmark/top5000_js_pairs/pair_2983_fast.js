const Benchmark = {
    run: function() {
        var VAR_1;
        for (var VAR_2 = 0; VAR_2 < 10000; VAR_2 += 1) {
          VAR_1 = VAR_2.toString();
          var VAR_3 = parseInt(VAR_1);
        }
    }
};