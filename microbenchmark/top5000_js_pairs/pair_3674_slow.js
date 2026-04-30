const Benchmark = {
    run: function() {
        var VAR_1 = [],
          VAR_2 = 0;
        for (VAR_2 = 0; VAR_2 < 1000; VAR_2++) VAR_1.push("hello" + "world");
        VAR_1 = VAR_1.join("");
    }
};