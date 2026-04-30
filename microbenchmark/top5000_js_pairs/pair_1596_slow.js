const Benchmark = {
    run: function() {
        var VAR_1 = [];
        for (var VAR_2 = 0; VAR_2 < 114; VAR_2++) {
          VAR_1.push(new Array(164 + 1).join("0").split("").map(parseFloat));
        }
    }
};