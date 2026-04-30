const Benchmark = {
    run: function() {
        var VAR_1 = [];
        for (var VAR_2 = 0; VAR_2 < 7000; VAR_2++) {
          VAR_1.push({ KEY_1: "name" + VAR_2 });
        }
        var VAR_5 = VAR_1.length;
        for (var VAR_6 = 0; VAR_2 < VAR_5; VAR_2++) {
          VAR_1.VAR_7 = true;
        }
    }
};