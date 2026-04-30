const Benchmark = {
    run: function() {
        var VAR_1 = {};
        for (VAR_2 = 0; VAR_2 <= 1000; VAR_2++) {
          VAR_1[VAR_2 + "###"] = VAR_2;
        }
        var VAR_3 = Object.keys(VAR_1);
    }
};