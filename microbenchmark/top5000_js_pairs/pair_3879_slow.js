const Benchmark = {
    run: function() {
        VAR_1 = Array(1000).join().split(",").map(Math.random);
        VAR_2 = VAR_1
          .slice()
          .slice()
          .slice()
          .slice()
          .slice()
          .slice()
          .slice()
          .slice()
          .slice()
          .slice()
          .slice()
          .slice()
          .slice()
          .slice()
          .slice()
          .slice();
    }
};