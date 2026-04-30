const Benchmark = {
    run: function() {
        var VAR_1, VAR_2;
        for (var VAR_3 = 0; VAR_3 < 1000; VAR_3++) {
          VAR_1 =
            Math.random() >= 0.5 ? "asdf" : (Math.random() >= 0.5 ? "-" : "") + "27";
          VAR_2 = +VAR_1 >= 0 || +VAR_1 < 0;
        }
    }
};