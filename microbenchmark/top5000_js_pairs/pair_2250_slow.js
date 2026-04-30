const Benchmark = {
    run: function() {
        var VAR_1 = 1000;
        var VAR_2 = ".";
        var VAR_3 = ["aaa", "bbb", "ccc"];
        var VAR_4;
        for (VAR_5 = 0; VAR_5 < VAR_1; VAR_5++) {
          VAR_4 = VAR_3.join(VAR_2);
        }
    }
};