const Benchmark = {
    run: function() {
        (function () {
          var VAR_1 = { KEY_1: 0 };
          (function () {
            for (var VAR_2 = 0; VAR_2 < 10000; ++VAR_2) this.KEY_1 += VAR_2;
          }).call(VAR_1);
          return VAR_1.KEY_1;
        })();
    }
};