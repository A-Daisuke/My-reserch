const Benchmark = {
    run: function() {
        function FUNCTION_1() {
          this.VAR_1 = 10;
        }
        FUNCTION_1.prototype.FUNCTION_2 = function () {
          return this.VAR_1;
        };
        var VAR_2 = new FUNCTION_1();
        for (var VAR_3 = 0; VAR_3 < 10000; VAR_3++) {
          VAR_2.FUNCTION_2();
        }
    }
};