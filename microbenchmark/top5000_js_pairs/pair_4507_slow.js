const Benchmark = {
    run: function() {
        function FUNCTION_1() {
          this.VAR_1 = "value";
        }
        console.log(new FUNCTION_1().VAR_1);
    }
};