const Benchmark = {
    run: function() {
        for (var VAR_1, VAR_2 = [], VAR_3 = 0; VAR_3 < 100000; VAR_3++) VAR_2.push("a");
        VAR_1 = VAR_2.join("");
    }
};