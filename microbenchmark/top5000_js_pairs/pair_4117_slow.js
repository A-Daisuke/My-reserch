const Benchmark = {
    run: function() {
        var VAR_1 = [];
        for (var VAR_2 = 0; VAR_2 < 1000; VAR_2++) {
          VAR_1.push("zzzzzzzzzzzzzzzzzv" + VAR_2);
        }
        var VAR_3 = [];
        for (var VAR_4 in VAR_1) {
          VAR_3.push(VAR_1[VAR_2]);
        }
        var VAR_5 = VAR_3.join("");
    }
};