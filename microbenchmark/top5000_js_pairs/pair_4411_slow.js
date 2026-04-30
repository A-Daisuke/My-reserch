const Benchmark = {
    run: function() {
        var FUNCTION_1 = function () {
          this.VAR_1 = 0;
        };
        FUNCTION_1.prototype.FUNCTION_2 = function () {
          this.VAR_1++;
          console.log(this.VAR_1);
        };
        var VAR_2 = new FUNCTION_1();
        VAR_2.FUNCTION_2();
    }
};