const Benchmark = {
    run: function() {
        var VAR_1 = [];
        for (var VAR_2 = 0; VAR_2 < 10000; VAR_2++)
          VAR_1.push("550e8400-e29b-41d4-a716-446655440000");
        let VAR_3 = [].concat(VAR_1);
    }
};