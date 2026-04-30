const Benchmark = {
    run: function() {
        (function () {
          var VAR_5 = {
            KEY_1: "",
            KEY_2: function (VAR_6) {
              this.KEY_1 += VAR_6;
            },
          };
          for (var VAR_3 = 0; VAR_3 < 1000; VAR_3++) {
            VAR_5.KEY_2("Quick ");
            VAR_5.KEY_2(VAR_3);
            VAR_5.KEY_2(" fox ");
            VAR_5.KEY_2(VAR_3);
            VAR_5.KEY_2(" over the ");
            VAR_5.KEY_2(VAR_3);
            VAR_5.KEY_2(" dog. ");
          }
        })();
    }
};