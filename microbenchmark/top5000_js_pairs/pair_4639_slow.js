const Benchmark = {
    run: function() {
        Number.MAX_VALUE.toString(2)
          .substr(0, 20)
          .split("")
          .map(function () {
            return null;
          });
    }
};