const Benchmark = {
    run: function() {
        function FUNCTION_1() {
          this.VAR_1 = "value";
          this.VAR_2 = "";
          this.VAR_3 = "";
          this.VAR_4 = false;
          this.VAR_5 = 0;
        }
        const VAR_6 = new FUNCTION_1();
    }
};