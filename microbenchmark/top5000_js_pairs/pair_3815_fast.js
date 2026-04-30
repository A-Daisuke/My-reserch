const Benchmark = {
    run: function() {
        function FUNCTION_1() {
          return undefined;
        }
        function FUNCTION_2(VAR_2, VAR_3) {
          var VAR_4 = false;
          return function () {
            if (!VAR_4) {
              VAR_2.apply(this, arguments);
              VAR_4 = true;
              setTimeout(function () {
                VAR_4 = false;
              }, VAR_3);
            }
          };
        }
        var VAR_7 = 100;
        var VAR_8 = FUNCTION_2(function () {
          FUNCTION_1();
        }, 100);
        while (VAR_7--) VAR_8();
    }
};