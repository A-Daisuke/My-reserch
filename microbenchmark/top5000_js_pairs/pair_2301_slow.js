const Benchmark = {
    run: function() {
        function FUNCTION_1() {
          this.VAR_1 = 10;
        }
        FUNCTION_1.prototype.FUNCTION_2 = function () {
          return this.VAR_1;
        };
        for (var VAR_2 = 0; VAR_2 < 10000; VAR_2++) {
          var VAR_3 = new FUNCTION_1();
        }
    }
};