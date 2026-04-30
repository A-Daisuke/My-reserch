const Benchmark = {
    run: function() {
        var VAR_1;
        for (var VAR_2 = 0, VAR_3 = 100; VAR_2 < VAR_3; ++VAR_2) {
          VAR_1 =
            "a" +
            "b" +
            "c" +
            "d" +
            "e" +
            "f" +
            "g" +
            "h" +
            "i" +
            "j" +
            "k" +
            "l" +
            "m" +
            "n";
        }
        VAR_1 = VAR_1.substr(2, 5);
    }
};