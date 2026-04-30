const Benchmark = {
    run: function() {
        function FUNCTION_1() {
          this.FUNCTION_2 = function () {};
        }
        function FUNCTION_3() {}
        FUNCTION_3.prototype.VAR_1 = (function () {
          return function () {};
        })();
        for (var VAR_2 = 0; VAR_2 < 10000; VAR_2++) {
          new FUNCTION_1();
        }
    }
};