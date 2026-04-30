const Benchmark = {
    run: function() {
        var VAR_1 = "";
        for (var VAR_2 = 0; VAR_2 < 10000; VAR_2++) {
          VAR_1 += "test" + VAR_2 + "\n";
        }
        var VAR_3 = [];
        var VAR_4 = VAR_1.split("\n");
        for (var VAR_5 = 0, VAR_6 = VAR_4.VAR_6; VAR_2 < VAR_6; VAR_2++) {
          VAR_3.push(VAR_4[VAR_2]);
        }
    }
};