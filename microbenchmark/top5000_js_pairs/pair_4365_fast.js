const Benchmark = {
    run: function() {
        VAR_1 = {
          KEY_1: "lorem ipsum",
          KEY_2: "lorem ipsum",
          KEY_3: "lorem ipsum",
        };
        var VAR_7 = "";
        var VAR_8 = "";
        var VAR_9 = "";
        for (var VAR_3 = 1; VAR_3 < 1000; VAR_3++) {
          VAR_7 = VAR_1.KEY_1;
          VAR_8 = VAR_1.KEY_2;
          VAR_9 = VAR_1.KEY_3;
        }
    }
};