const Benchmark = {
    run: function() {
        var VAR_1 = new Array(65536 + 1)
          .join("0")
          .split("")
          .map((VAR_2, VAR_3, VAR_4) => VAR_3);
    }
};