const Benchmark = {
    run: function() {
        var VAR_1 = [];
        for (var VAR_2 = 0; VAR_2 < 100000; VAR_2++) {
          VAR_1.push({ KEY_1: "Object " + VAR_2 });
        }
        for (var VAR_3 = 0; VAR_2 < VAR_1.length; VAR_2++) {
          var VAR_5 = VAR_1[VAR_2];
        }
    }
};