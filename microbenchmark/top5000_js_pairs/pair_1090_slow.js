const Benchmark = {
    run: function() {
        var VAR_1 = Array(100000)
          .fill()
          .map((VAR_2, VAR_3) => VAR_3 + 1);
    }
};