const Benchmark = {
    run: function() {
        function FUNCTION_1() {}
        function FUNCTION_2() {}
        function FUNCTION_3() {
          this.VAR_1 = this.VAR_1();
          this.VAR_2 = this.VAR_2();
        }
        function FUNCTION_4() {
          return new FUNCTION_3();
        }
        FUNCTION_3.prototype.VAR_1 = FUNCTION_1;
        FUNCTION_3.prototype.VAR_2 = FUNCTION_2;
        FUNCTION_4();
    }
};