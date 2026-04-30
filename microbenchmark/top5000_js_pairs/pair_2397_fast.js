const Benchmark = {
    run: function() {
        let VAR_1 = [];
        for (var VAR_2 = 0; VAR_2 < 10000; VAR_2++) {
          VAR_1.push("a");
        }
        let VAR_3 = VAR_1.forEach((VAR_4) => VAR_4 + "bc");
    }
};