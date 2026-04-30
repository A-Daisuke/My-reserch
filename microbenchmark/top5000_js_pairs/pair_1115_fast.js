const Benchmark = {
    run: function() {
        var VAR_1 = [];
        var VAR_2 = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
        for (var VAR_3 = 0; VAR_3 < 100000; VAR_3++) {
          VAR_1.push(VAR_2[Math.floor(Math.random() * 10)]);
        }
        VAR_1.filter((VAR_5) => !["a", "b"].includes(VAR_5));
    }
};