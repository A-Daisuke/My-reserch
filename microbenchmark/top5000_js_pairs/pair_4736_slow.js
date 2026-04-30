const Benchmark = {
    run: function() {
        var FUNCTION_1 = function () {
          this.VAR_1 = 1;
          this.VAR_2 = "test";
          this.VAR_3 = true;
          this.FUNCTION_2 = function () {
            return this.test1 + this.VAR_2 + this.VAR_3;
          };
        };
        var VAR_4 = new FUNCTION_1();
        VAR_4.FUNCTION_2();
    }
};