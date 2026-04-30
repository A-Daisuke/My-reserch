const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1, VAR_2, VAR_3) {
          this.VAR_4 = VAR_1;
          this.VAR_5 = VAR_2;
          this.VAR_6 = VAR_3;
        }
        function FUNCTION_2() {
          return new FUNCTION_1(10, 20, 30);
        }
        FUNCTION_2();
    }
};