const Benchmark = {
    run: function() {
        VAR_1 = [];
        for (var VAR_2 = 0; VAR_2 < 1000; VAR_2++) VAR_1.push("hello");
        VAR_1.join(" ");
    }
};