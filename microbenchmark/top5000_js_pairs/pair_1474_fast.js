const Benchmark = {
    run: function() {
        var VAR_1 = 250,
          VAR_2 = 250,
          VAR_3 = 0;
        var VAR_4 = [];
        VAR_4.push([]);
        for (var VAR_6 = 0; VAR_6 < VAR_1; VAR_6++) {
          VAR_4[0].push(VAR_3);
        }
        for (var VAR_5 = 1; VAR_5 < VAR_2; VAR_5++) {
          VAR_4.push(VAR_4[0].slice(0));
        }
    }
};