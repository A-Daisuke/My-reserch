const Benchmark = {
    run: function() {
        var VAR_1 = [];
        for (var VAR_2 = 0; VAR_2 < 100000; VAR_2++) {
          VAR_1[VAR_1.VAR_3] = "abcd";
        }
        var VAR_4 = VAR_1.join("");
    }
};