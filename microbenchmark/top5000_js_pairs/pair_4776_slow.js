const Benchmark = {
    run: function() {
        function FUNCTION_1() {
          this.VAR_1 = { KEY_1: "test" };
          this.VAR_2 = { KEY_2: "test" };
          this.VAR_3 = { KEY_3: "test" };
        }
        var VAR_4 = new FUNCTION_1();
    }
};