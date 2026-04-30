const Benchmark = {
    run: function() {
        function FUNCTION_1(VAR_1, VAR_2, VAR_3) {
          this.VAR_4 = VAR_1;
          this.VAR_5 = VAR_2;
          this.VAR_6 = VAR_3;
        }
        function FUNCTION_2(VAR_7, VAR_8) {
          this.VAR_5 = VAR_7;
          this.VAR_6 = VAR_8;
        }
        function FUNCTION_3(VAR_9) {
          this.VAR_6 = VAR_9;
        }
        var VAR_10 = new FUNCTION_2({ KEY_1: "http://" }, [
          new FUNCTION_3("text"),
          new FUNCTION_3("more text"),
        ]);
    }
};