const Benchmark = {
    run: function() {
        var VAR_1 = [{}, 89, 8.7, "a"];
        var VAR_2 = [];
        for (var VAR_3 = 0; VAR_3 < 10000; VAR_3++) {
          VAR_2.push(VAR_1[0]);
          VAR_2.push(VAR_1[1]);
          VAR_2.push(VAR_1[2]);
          VAR_2.push(VAR_1[3]);
        }
    }
};