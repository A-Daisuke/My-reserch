const Benchmark = {
    run: function() {
        var VAR_1 = 9999;
        var VAR_2 = 0;
        while (VAR_1--) {
          (function () {
            function FUNCTION_1() {
              VAR_2 += 1;
            }
            FUNCTION_1();
          })();
        }
        if (VAR_2 !== 9999) {
          throw new Eroor("fail");
        }
    }
};