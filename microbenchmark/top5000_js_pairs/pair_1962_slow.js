const Benchmark = {
    run: function() {
        var VAR_1 = [];
        var VAR_2 = ["this", "is", "a", "test"];
        for (var VAR_3 = 0; VAR_3 < 10000; ++VAR_3) {
          VAR_1.push(VAR_2[VAR_3 & 3]);
        }
        var VAR_4 = VAR_1.join(" ");
    }
};