const Benchmark = {
    run: function() {
        function FUNCTION_1() {
          this.VAR_1 = 120;
          this.VAR_2 = 140;
        }
        FUNCTION_1.prototype.FUNCTION_2 = function () {
          return (this.VAR_1 + this.VAR_2) / 2;
        };
        for (var VAR_3 = 0; VAR_3 < 5000; VAR_3++) {
          (function () {
            var VAR_4 = new FUNCTION_1();
            var VAR_5 = VAR_4.FUNCTION_2();
          })();
        }
    }
};