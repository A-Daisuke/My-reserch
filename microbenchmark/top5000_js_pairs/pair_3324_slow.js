const Benchmark = {
    run: function() {
        (function () {
          var VAR_1 = {
            KEY_1: "",
            KEY_2: function (VAR_2) {
              this.KEY_1 += VAR_2;
            },
          };
          for (var VAR_3 = 0; VAR_3 < 1000; VAR_3++) {
            VAR_1.KEY_2("Quick ");
            VAR_1.KEY_2(VAR_3);
            VAR_1.KEY_2(" fox ");
            VAR_1.KEY_2(VAR_3);
            VAR_1.KEY_2(" over the ");
            VAR_1.KEY_2(VAR_3);
            VAR_1.KEY_2(" dog. ");
          }
        })();
    }
};