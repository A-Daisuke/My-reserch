const Benchmark = {
    run: function() {
        var VAR_1 = [];
        var VAR_2 = [];
        function FUNCTION_1() {
          VAR_1.push(new Error("Something is not right..."));
        }
        function FUNCTION_2() {
          VAR_2.push(new CLASS_1());
        }
        class CLASS_1 {
          KEY_1(VAR_3, VAR_4) {
            this.VAR_5 = VAR_3;
            this.VAR_6 = VAR_4;
          }
        }
        function FUNCTION_3(VAR_7, VAR_8) {
          if (VAR_8 > 0) FUNCTION_3(VAR_7, VAR_8 - 1);
          else VAR_7();
        }
        FUNCTION_3(FUNCTION_1, 5);
    }
};