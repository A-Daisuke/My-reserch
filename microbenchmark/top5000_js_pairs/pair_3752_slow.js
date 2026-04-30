const Benchmark = {
    run: function() {
        var VAR_1 = "\\",
          VAR_2 = /\\/,
          VAR_3 = "\\";
        for (var VAR_4 = 0; VAR_4 < 1000; VAR_4++) {
          var VAR_5 = VAR_2.test(VAR_1);
        }
    }
};