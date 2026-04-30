const Benchmark = {
    run: function() {
        var VAR_1 = [];
        for (var VAR_2 = 0; VAR_2 < 50; VAR_2++) {
          VAR_1.push("String_" + 2 * VAR_2);
          VAR_1.push("String_" + VAR_2);
        }
        var VAR_3 = [...new Set(VAR_1)];
    }
};