const Benchmark = {
    run: function() {
        var VAR_1 = 0,
          VAR_2 = 1000,
          VAR_3 =
            "We want to replace all instances of 'geoff' in this string with 'REPLACED'. ";
        var VAR_4 = /'/g;
        for (VAR_1 = 0; VAR_1 < VAR_2; VAR_1++) {
          VAR_3.replace("'", "REPLACED");
        }
    }
};