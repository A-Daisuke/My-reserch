const Benchmark = {
    run: function() {
        var VAR_1 = [];
        for (var VAR_2 = 0; VAR_2 < 1000; VAR_2++) VAR_1.push("foobar", "/foobar/");
        var VAR_3 = 0;
        for (var VAR_4 of VAR_1) if (VAR_4.startsWith("/") && VAR_4.endsWith("/")) VAR_3++;
    }
};