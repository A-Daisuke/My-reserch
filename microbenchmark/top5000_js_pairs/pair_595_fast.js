const Benchmark = {
    run: function() {
        var VAR_1 = { KEY_1: "and" };
        var VAR_2;
        var VAR_6 = {
          KEY_2: "&",
          KEY_3: "|",
          KEY_4: "^",
          KEY_5: ">>",
          KEY_6: ">>>",
          KEY_7: "<<",
        };
        for (var VAR_5 = 0; VAR_5 < 1000000; VAR_5++) {
          VAR_2 = VAR_6[VAR_1.KEY_1];
        }
    }
};