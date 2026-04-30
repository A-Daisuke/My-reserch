const Benchmark = {
    run: function() {
        function FUNCTION_1() {
          this.VAR_1 = 11;
          this.VAR_2 = 22;
          this.VAR_3 = 33;
          this.VAR_4 = "first";
          this.VAR_5 = "second";
          this.VAR_6 = false;
        }
        VAR_7 = new FUNCTION_1();
    }
};