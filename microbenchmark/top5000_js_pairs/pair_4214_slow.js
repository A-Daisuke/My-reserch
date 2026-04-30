const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1) {
          this.VAR_2 = VAR_1;
        }
        function FUNCTION_2(VAR_3) {
          this.VAR_4 = VAR_3;
        }
        function FUNCTION_3(VAR_5, VAR_6, VAR_7) {
          this.VAR_2 = VAR_5;
          this.VAR_4 = VAR_6;
          this.VAR_8 = VAR_7;
        }
        var VAR_9 = new FUNCTION_1(1);
        var VAR_10 = new FUNCTION_2("2");
        var VAR_11 = new FUNCTION_3(VAR_9.VAR_2, VAR_10.VAR_4, true);
    }
};