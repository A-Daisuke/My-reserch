const Benchmark = {
    run: function() {
        var VAR_2 = /a{331}/;
        for (var VAR_1 = 0; VAR_1 < 100000; VAR_1++) "baab".match(VAR_2);
    }
};