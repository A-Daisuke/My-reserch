const Benchmark = {
    run: function() {
        var VAR_4 = "";
        for (var VAR_3 = 0; VAR_3 < 1000; VAR_3++) {
          VAR_4 += VAR_3 < 999 ? VAR_3 + "," : VAR_3;
        }
    }
};