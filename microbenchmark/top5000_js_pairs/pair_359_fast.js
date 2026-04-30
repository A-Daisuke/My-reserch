const Benchmark = {
    run: function() {
        var VAR_1;
        var VAR_2 = 1000000;
        VAR_1 = Array(VAR_2 + 1)
          .join("0")
          .split("");
    }
};