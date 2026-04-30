const Benchmark = {
    run: function() {
        function FUNCTION_1() {
          this.FUNCTION_2 = function () {};
          this.FUNCTION_3 = function () {};
          this.FUNCTION_4 = function () {};
        }
        new FUNCTION_1().FUNCTION_2();
    }
};