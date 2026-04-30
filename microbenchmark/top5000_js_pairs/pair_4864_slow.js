const Benchmark = {
    run: function() {
        function FUNCTION_1() {
          this.FUNCTION_2 = function () {};
          this.FUNCTION_3 = function () {};
          this.FUNCTION_4 = function () {};
        }
        var VAR_1 = new FUNCTION_1();
        VAR_1.FUNCTION_2;
        VAR_1.FUNCTION_3;
        VAR_1.FUNCTION_4;
    }
};