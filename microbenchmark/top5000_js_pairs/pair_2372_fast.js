const Benchmark = {
    run: function() {
        var VAR_1 = "abcdefg";
        for (var VAR_2 = 0; VAR_2 < 1000; VAR_2++) {
          VAR_1.substring(2, 4);
        }
    }
};