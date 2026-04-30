const Benchmark = {
    run: function() {
        let VAR_1 = [];
        for (var VAR_2 = 0; VAR_2 < 10000; VAR_2++, VAR_1.push(VAR_2));
        for (var VAR_4 = 0; VAR_2 < VAR_1.length; VAR_2++) {
          VAR_1[VAR_2];
        }
    }
};