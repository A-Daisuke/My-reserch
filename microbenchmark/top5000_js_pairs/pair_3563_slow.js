const Benchmark = {
    run: function() {
        for (var VAR_1 = 1000; VAR_1--; ) {
          (function () {
            return (function () {
              return (function () {
                return (function () {
                  return (function () {
                    return true;
                  })();
                })();
              })();
            })();
          })();
        }
    }
};