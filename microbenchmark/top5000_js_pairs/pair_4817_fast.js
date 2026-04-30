const Benchmark = {
    run: function() {
        (1 << 19)
          .toString(2)
          .split("")
          .map(function () {
            return null;
          });
    }
};