const Benchmark = {
    run: function() {
        var VAR_1 = [];
        var VAR_2 = 10000;
        var VAR_3;
        for (VAR_3 = 0; VAR_3 < VAR_2; VAR_3++) {
          VAR_1.push(VAR_3);
        }
        var VAR_4 = VAR_1.slice(1 + 10);
        VAR_1 = [].concat([0], VAR_4);
    }
};