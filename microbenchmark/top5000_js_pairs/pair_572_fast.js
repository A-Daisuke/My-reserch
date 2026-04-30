const Benchmark = {
    run: function() {
        var VAR_1 = { KEY_1: "lsh" };
        var VAR_2;
        var VAR_4 = {
          KEY_2: "&",
          KEY_3: "|",
          KEY_4: "^",
          KEY_5: ">>",
          KEY_6: ">>>",
          KEY_7: "<<",
        };
        for (var VAR_3 = 0; VAR_3 < 1000000; VAR_3++) {
          VAR_2 = VAR_4[VAR_1.KEY_1];
        }
    }
};