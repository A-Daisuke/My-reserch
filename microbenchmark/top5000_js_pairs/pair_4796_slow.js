const Benchmark = {
    run: function() {
        function FUNCTION_1() {
          this.VAR_1 = 1000;
          this.VAR_2 = 2000;
        }
        var VAR_3 = new FUNCTION_1();
        VAR_3["my_variable"]++;
        VAR_3["my_second_variable"]++;
    }
};