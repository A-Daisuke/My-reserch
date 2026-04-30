const Benchmark = {
    run: function() {
        new Array(20 + 1)
          .join(" ")
          .split("")
          .map(function () {
            return null;
          });
    }
};