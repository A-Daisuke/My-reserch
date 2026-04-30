const Benchmark = {
    run: function() {
        var VAR_1 = [];
        function FUNCTION_1() {
          this.VAR_2 = "test";
          function FUNCTION_2() {
            alert("woof");
          }
          this.VAR_3 = FUNCTION_2;
        }
        for (var VAR_4 = 0; VAR_4 < 10000; VAR_4++) {
          VAR_1.push(new FUNCTION_1());
        }
    }
};