const Benchmark = {
    run: function() {
        const FUNCTION_1 = function () {
          this.VAR_1 = "1";
          this.VAR_2 = "2";
          this.VAR_3 = "3";
          this.VAR_4 = "4";
          this.VAR_5 = "5";
          this.VAR_6 = "6";
        };
        const FUNCTION_2 = function () {};
        FUNCTION_2.prototype.VAR_1 = "1";
        FUNCTION_2.prototype.VAR_2 = "2";
        FUNCTION_2.prototype.VAR_3 = "3";
        FUNCTION_2.prototype.VAR_5 = "4";
        FUNCTION_2.prototype.VAR_4 = "5";
        FUNCTION_2.prototype.VAR_6 = "6";
        new FUNCTION_1();
    }
};