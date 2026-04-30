const Benchmark = {
    run: function() {
        function FUNCTION_1() {
          this.VAR_1 = 1;
          this.VAR_2 = "test";
          this.VAR_3 = false;
        }
        var VAR_4 = 100;
        while (VAR_4--) new FUNCTION_1();
    }
};