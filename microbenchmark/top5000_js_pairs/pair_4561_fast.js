const Benchmark = {
    run: function() {
        function FUNCTION_1() {}
        function FUNCTION_2() {}
        function FUNCTION_4() {
          return {
            KEY_1: FUNCTION_1(),
            KEY_2: FUNCTION_2(),
          };
        }
        function FUNCTION_3() {
          this.KEY_1 = this.KEY_1();
          this.KEY_2 = this.KEY_2();
        }
        FUNCTION_3.prototype.KEY_1 = FUNCTION_1;
        FUNCTION_3.prototype.KEY_2 = FUNCTION_2;
        FUNCTION_4();
    }
};