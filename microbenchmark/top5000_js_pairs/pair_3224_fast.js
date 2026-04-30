const Benchmark = {
    run: function() {
        var VAR_1 = 10000;
        Array(VAR_1)
          .fill()
          .map((VAR_2, VAR_3) => VAR_3);
    }
};