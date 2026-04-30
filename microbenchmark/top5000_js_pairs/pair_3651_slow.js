const Benchmark = {
    run: function() {
        var VAR_1 = [];
        var VAR_2 = ".";
        for (var VAR_3 = 0; VAR_3 < 1000; VAR_3++) {
          VAR_1.push(VAR_2);
        }
        var VAR_4 = VAR_1.join("");
    }
};