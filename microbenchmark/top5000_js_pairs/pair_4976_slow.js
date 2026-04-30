const Benchmark = {
    run: function() {
        function FUNCTION_1() {
          this.VAR_1 = 2;
          this.VAR_2 = 3;
        }
        function FUNCTION_2() {
          this.VAR_1 = 3;
        }
        var VAR_3 = new FUNCTION_1();
        var VAR_4 = new FUNCTION_2();
        function FUNCTION_3(VAR_5) {
          VAR_5.VAR_1 = Math.random();
        }
        FUNCTION_3(VAR_3);
        FUNCTION_3(VAR_4);
    }
};