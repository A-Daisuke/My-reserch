const Benchmark = {
    run: function() {
        new Array(10000)
          .join(" ")
          .split(" ")
          .map(() => 1);
    }
};