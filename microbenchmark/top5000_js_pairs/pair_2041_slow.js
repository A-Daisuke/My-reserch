const Benchmark = {
    run: function() {
        function FUNCTION_1() {
          this.VAR_1 = "b";
        }
        var VAR_2 = 10000;
        while (--VAR_2) {
          new FUNCTION_1();
        }
    }
};