const Benchmark = {
    run: function() {
        let VAR_1 = [/a/, "b", true, {}, 1, []];
        let VAR_2;
        for (var VAR_3 = 0; VAR_3 < 10000000; VAR_3++) {
          VAR_2 = VAR_1[VAR_3 % 6];
        }
    }
};