const Benchmark = {
    run: function() {
        VAR_1 = [];
        for (var VAR_2 = 0; VAR_2 < 1000; VAR_2++) VAR_1.push("hello");
        var VAR_3 = "";
        for (var VAR_4 = 0; VAR_2 < VAR_1.length; VAR_2++) VAR_3 = VAR_3 + " " + VAR_1[VAR_2];
    }
};