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
        function FUNCTION_2() {
          var VAR_7 = Object();
          VAR_7.VAR_1 = 11;
          VAR_7.VAR_2 = 22;
          VAR_7.VAR_3 = 33;
          VAR_7.VAR_4 = "first";
          VAR_7.VAR_5 = "second";
          VAR_7.VAR_6 = false;
          return VAR_7;
        }
        VAR_8 = new FUNCTION_1();
    }
};